export type ClickMidiaPlan = "logo" | "brand" | "orientacao";

export type ClickMidiaLeadForm = {
  intencaoPlano: ClickMidiaPlan;
  cnpj: string;
  nomeContato: string;
  telefone: string;
  aceitouTermos: boolean;
  website: string;
};

type Attribution = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  landingPath?: string;
  referrer?: string;
};

export function somenteDigitos(valor = "") {
  return String(valor || "").replace(/\D/g, "");
}

export function normalizarTexto(valor = "", limite = 160) {
  return Array.from(String(valor || ""))
    .filter((caractere) => {
      const codigo = caractere.codePointAt(0) || 0;
      return codigo > 31 && (codigo < 127 || codigo > 159);
    })
    .join("")
    .normalize("NFC")
    .trim()
    .slice(0, limite);
}

export function formatarCnpj(valor = "") {
  return somenteDigitos(valor)
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(.{6})(\d)/, "$1.$2")
    .replace(/^(.{10})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

export function formatarTelefone(valor = "") {
  const digitos = somenteDigitos(valor).slice(0, 11);
  if (digitos.length <= 2) return digitos ? `(${digitos}` : "";
  const ddd = digitos.slice(0, 2);
  const numero = digitos.slice(2);
  if (numero.length <= 4) return `(${ddd}) ${numero}`;
  const prefixo = digitos.length === 11 ? 5 : 4;
  return `(${ddd}) ${numero.slice(0, prefixo)}-${numero.slice(prefixo)}`;
}

export function validarCnpj(valor = "") {
  const cnpj = somenteDigitos(valor);
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
  const calcularDigito = (base: string) => {
    let peso = base.length - 7;
    let soma = 0;
    for (const numero of base) {
      soma += Number(numero) * peso;
      peso -= 1;
      if (peso === 1) peso = 9;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };
  const primeiro = calcularDigito(cnpj.slice(0, 12));
  const segundo = calcularDigito(`${cnpj.slice(0, 12)}${primeiro}`);
  return `${primeiro}${segundo}` === cnpj.slice(-2);
}

export function validarTelefoneComercial(valor = "") {
  const telefone = somenteDigitos(valor);
  const numeroLocal = telefone.slice(2);
  return (
    /^[1-9]{2}\d{8,9}$/.test(telefone) &&
    !/^(\d)\1+$/.test(telefone) &&
    !/^(\d)\1+$/.test(numeroLocal)
  );
}

function obterAtribuicao(): Attribution {
  if (typeof window === "undefined") return {};
  const query = new URLSearchParams(window.location.search);
  return {
    utmSource: query.get("utm_source") || "",
    utmMedium: query.get("utm_medium") || "",
    utmCampaign: query.get("utm_campaign") || "",
    utmContent: query.get("utm_content") || "",
    landingPath: `${window.location.pathname}${window.location.search}`,
    referrer: document.referrer || "",
  };
}

function montarPayload(form: ClickMidiaLeadForm, ctaSource: string, abertoEm: number) {
  const atribuicao = obterAtribuicao();
  return {
    intencaoPlano: normalizarTexto(form.intencaoPlano, 40).toLowerCase(),
    cnpj: somenteDigitos(form.cnpj),
    nomeContato: normalizarTexto(form.nomeContato, 160),
    telefone: somenteDigitos(form.telefone),
    aceitouTermos: form.aceitouTermos === true,
    website: normalizarTexto(form.website, 120),
    tempoPreenchimentoMs: abertoEm ? Math.max(0, Date.now() - abertoEm) : 0,
    campanha: {
      codigo: "click-midia",
      ctaSource: normalizarTexto(ctaSource, 80),
      utmSource: normalizarTexto(atribuicao.utmSource, 100),
      utmMedium: normalizarTexto(atribuicao.utmMedium, 100),
      utmCampaign: normalizarTexto(atribuicao.utmCampaign, 100),
      utmContent: normalizarTexto(atribuicao.utmContent, 100),
      landingPath: normalizarTexto(atribuicao.landingPath, 180),
      referrer: normalizarTexto(atribuicao.referrer, 300),
    },
  };
}

export async function enviarLeadClickMidia(form: ClickMidiaLeadForm, ctaSource: string, abertoEm: number) {
  let response: Response;
  try {
    response = await fetch("/api/click-midia-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(montarPayload(form, ctaSource, abertoEm)),
    });
  } catch {
    throw new Error("Não foi possível conectar ao atendimento. Verifique sua internet e tente novamente.");
  }

  const data = await response.json().catch(() => ({})) as {
    result?: { success?: boolean; message?: string };
    error?: string;
    message?: string;
  };
  const resultado = data.result ?? data;
  if (!response.ok || !resultado?.success) {
    throw new Error(data.error || resultado?.message || data.message || "Não foi possível enviar seu interesse. Tente novamente.");
  }
  return resultado;
}

