import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleCheck,
  GalleryHorizontal,
  Headphones,
  LoaderCircle,
  Mail,
  Megaphone,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Trophy,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";

import clickpartsLogo from "@/assets/clickparts-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/asset-url";
import {
  enviarLeadClickMidia,
  formatarCnpj,
  formatarTelefone,
  normalizarTexto,
  validarCnpj,
  validarTelefoneComercial,
  type ClickMidiaLeadForm,
  type ClickMidiaPlan,
} from "@/services/click-midia-lead";

type ClickHeaderProps = {
  onLead: (source?: string, plan?: ClickMidiaPlan) => void;
  sectionBase?: string;
  label?: "CLICK MÍDIA" | "CLICK PARTS BRASIL";
};

export function ClickHeader({ onLead, sectionBase = "", label = "CLICK MÍDIA" }: ClickHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchor = (id: string) => `${sectionBase}#${id}`;
  const closeMenu = () => setMenuOpen(false);
  const openLead = () => {
    closeMenu();
    onLead("header", "orientacao");
  };

  return (
    <header className="media-header shell">
      <Link className="brand-lockup" to="/" aria-label="Click Parts - página Click Mídia">
        <img src={assetUrl(clickpartsLogo)} alt="Click Parts" />
        <b>{label === "CLICK MÍDIA" ? "CLICK" : "CLICK PARTS"}</b>
        {label === "CLICK MÍDIA" ? " MÍDIA" : " BRASIL"}
      </Link>
      <nav
        id="primary-navigation"
        className={menuOpen ? "is-open" : ""}
        aria-label="Navegação principal"
      >
        <Link className="desktop-header-about" to="/quem-somos" onClick={closeMenu}>
          Quem somos
        </Link>
        <a href={anchor("audiencia")} onClick={closeMenu}>
          Audiência
        </a>
        <a href={anchor("inventario")} onClick={closeMenu}>
          Inventário
        </a>
        <a href={anchor("formatos")} onClick={closeMenu}>
          Formatos
        </a>
        <a href={anchor("pacotes")} onClick={closeMenu}>
          Pacotes
        </a>
      </nav>
      <div className="media-header-actions">
        <Link className="mobile-header-about" to="/quem-somos" onClick={closeMenu}>
          Quem somos
        </Link>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <Button className="header-cta" type="button" onClick={openLead}>
          Anunciar <ArrowRight />
        </Button>
      </div>
    </header>
  );
}

const WHATSAPP_URL =
  "https://wa.me/5521984231098?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Click%20Parts%20Brasil%20e%20gostaria%20de%20falar%20com%20o%20comercial.";

export function WhatsAppFloat() {
  const trackClick = () => {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "whatsapp_click",
      location: "floating_button",
      destination: "comercial",
    });
  };

  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o comercial da Click Parts pelo WhatsApp"
      title="Fale com nosso comercial"
      onClick={trackClick}
    >
      <span className="whatsapp-float-tip" aria-hidden="true">
        Fale com nosso comercial
      </span>
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.06 8.06 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11 4.47 0 8.11 3.64 8.11 8.11 0 4.52-3.64 8.12-8.11 8.12Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}

export function ClickFooter() {
  return (
    <footer className="media-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand-lockup" to="/">
            <img src={assetUrl(clickpartsLogo)} alt="Click Parts" />
            <b>Click Mídia</b>
          </Link>
          <p>Retail media para o aftermarket automotivo.</p>
          <span className="footer-brand-badge">
            <ShieldCheck /> Ecossistema digital Click Parts Brasil
          </span>
        </div>
        <nav>
          <b>ECOSSISTEMA</b>
          <a href="/">Marketplace</a>
          <a href="/servicos">Serviços</a>
          <a href="/click-midia#formatos">Formatos de mídia</a>
        </nav>
        <nav>
          <b>TRANSPARÊNCIA</b>
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos de uso</a>
          <a href="mailto:contato@clickpartsbrasil.app">Contato</a>
        </nav>
        <div className="footer-contact">
          <b>COMERCIAL CLICK PARTS</b>
          <a href="tel:+5521984231098">
            <Phone aria-hidden="true" />
            <span>
              <small>Telefone comercial</small>(21) 98423-1098
            </span>
          </a>
          <a href="mailto:contato@clickpartsbrasil.app">
            <Mail aria-hidden="true" />
            <span>
              <small>E-mail comercial</small>contato@clickpartsbrasil.app
            </span>
          </a>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© 2026 Click Parts Brasil. Todos os direitos reservados.</span>
        <span>
          <ShieldCheck /> Ambiente oficial Click Parts
        </span>
      </div>
    </footer>
  );
}

const LEAD_PLANS = [
  {
    value: "logo" as const,
    label: "Logo Apenas",
    detail: "Presença recorrente nos carrosséis de marcas.",
    icon: Trophy,
  },
  {
    value: "brand" as const,
    label: "Destaque de Marca",
    detail: "Card visual para ampliar impacto e autoridade.",
    icon: GalleryHorizontal,
  },
  {
    value: "orientacao" as const,
    label: "Ainda não sei",
    detail: "Quero orientação do time comercial.",
    icon: Headphones,
  },
];

const LEAD_STEPS = [
  {
    id: "intencaoPlano",
    question: "Qual formato mais combina com o que sua marca procura?",
    helper: "Se ainda estiver avaliando, nosso comercial ajuda a escolher.",
  },
  {
    id: "cnpj",
    question: "Qual é o CNPJ da empresa anunciante?",
    helper: "Usaremos o CNPJ apenas para identificar corretamente sua empresa.",
  },
  {
    id: "nomeContato",
    question: "Com quem nosso time comercial deve falar?",
    helper: "Informe o nome completo da pessoa responsável pela campanha.",
  },
  {
    id: "telefone",
    question: "Qual WhatsApp recebe melhor nosso contato?",
    helper: "Informe o número com DDD para agilizar o atendimento.",
  },
  {
    id: "aceitouTermos",
    question: "Tudo pronto para falar com o comercial?",
    helper: "Confirme o contato e nossa equipe receberá o resumo completo.",
  },
] as const;

function planName(plan: ClickMidiaPlan) {
  return LEAD_PLANS.find(({ value }) => value === plan)?.label || "Orientação comercial";
}

function trackLead(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const trackedWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
  trackedWindow.dataLayer = trackedWindow.dataLayer || [];
  trackedWindow.dataLayer.push({ event, campaign: "click_midia", ...data });
}

type LeadDialogProps = {
  onClose: () => void;
  ctaSource?: string;
  initialPlanCode?: ClickMidiaPlan;
};

export function LeadDialog({
  onClose,
  ctaSource = "site",
  initialPlanCode = "orientacao",
}: LeadDialogProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<ClickMidiaLeadForm>({
    intencaoPlano: initialPlanCode,
    cnpj: "",
    nomeContato: "",
    telefone: "",
    aceitouTermos: false,
    website: "",
  });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const openedAt = useRef(Date.now());
  const step = LEAD_STEPS[stepIndex]!;
  const progress = Math.round(((stepIndex + 1) / LEAD_STEPS.length) * 100);
  const currentPlanName = useMemo(() => planName(form.intencaoPlano), [form.intencaoPlano]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting) onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, submitting]);

  useEffect(() => {
    trackLead("click_midia_lead_step", { form_step: stepIndex + 1 });
  }, [stepIndex]);

  function updateField<K extends keyof ClickMidiaLeadForm>(field: K, value: ClickMidiaLeadForm[K]) {
    setError("");
    setForm((current) => ({ ...current, [field]: value }));
  }

  function validateCurrentStep() {
    if (step.id === "intencaoPlano" && !form.intencaoPlano)
      return "Escolha uma opção para continuar.";
    if (step.id === "cnpj" && !validarCnpj(form.cnpj)) return "Informe um CNPJ válido.";
    if (step.id === "nomeContato" && normalizarTexto(form.nomeContato).length < 3)
      return "Informe o nome completo do contato.";
    if (step.id === "telefone" && !validarTelefoneComercial(form.telefone))
      return "Informe um WhatsApp válido com DDD.";
    if (step.id === "aceitouTermos" && !form.aceitouTermos)
      return "Autorize o contato comercial para enviar.";
    return "";
  }

  async function continueForm(event: FormEvent) {
    event.preventDefault();
    if (submitting) return;
    const validationError = validateCurrentStep();
    if (validationError) {
      setError(validationError);
      return;
    }
    if (stepIndex < LEAD_STEPS.length - 1) {
      setStepIndex((current) => current + 1);
      return;
    }

    setSubmitting(true);
    trackLead("click_midia_lead_submit", { plan_intent: form.intencaoPlano });
    try {
      await enviarLeadClickMidia(form, ctaSource, openedAt.current);
      setSuccess(true);
      trackLead("click_midia_lead_success", { plan_intent: form.intencaoPlano });
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Não foi possível enviar seu interesse.";
      setError(message);
      trackLead("click_midia_lead_error", { plan_intent: form.intencaoPlano });
    } finally {
      setSubmitting(false);
    }
  }

  const closeFromBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && !submitting) onClose();
  };

  return (
    <div
      className="dialog-backdrop lead-flow-backdrop"
      role="presentation"
      onMouseDown={closeFromBackdrop}
    >
      <section
        className="lead-dialog lead-dialog--flow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        aria-busy={submitting}
      >
        {success ? (
          <div className="lead-flow-success" aria-live="polite">
            <div className="lead-flow-success-icon">
              <CheckCircle2 />
            </div>
            <span>Interesse recebido</span>
            <h2>Obrigado, {normalizarTexto(form.nomeContato).split(" ")[0] || "anunciante"}!</h2>
            <p>
              O time comercial recebeu seu interesse em <strong>{currentPlanName}</strong>, junto
              com o CNPJ e o WhatsApp informados.
            </p>
            <div className="lead-flow-success-note">
              <Megaphone />
              <span>
                Acompanhe o WhatsApp informado. Nosso time falará com você para entender a campanha
                e orientar o melhor período.
              </span>
            </div>
            <button type="button" onClick={onClose}>
              Concluir
            </button>
          </div>
        ) : (
          <>
            <header className="lead-flow-header">
              <div>
                <span className="lead-flow-assistant">
                  <i /> Atendimento comercial
                </span>
                <h2 id="lead-title">Vamos posicionar sua marca</h2>
                <p>Quatro dados e uma confirmação. Resposta direta do time Click Mídia.</p>
                <div className="lead-flow-intent">
                  <Megaphone />
                  <span>
                    <small>Interesse atual</small>
                    <strong>{currentPlanName}</strong>
                  </span>
                </div>
              </div>
              <button
                className="lead-flow-close"
                type="button"
                onClick={onClose}
                disabled={submitting}
                aria-label="Fechar formulário"
              >
                <X />
              </button>
            </header>
            <div className="lead-flow-progress">
              <div>
                <span>
                  Pergunta {stepIndex + 1} de {LEAD_STEPS.length}
                </span>
                <strong>{progress}%</strong>
              </div>
              <i>
                <em style={{ width: `${progress}%` }} />
              </i>
            </div>
            <form className="lead-flow-form" onSubmit={continueForm} noValidate>
              <div className="lead-flow-viewport">
                <div className="lead-flow-question">
                  <span className="lead-flow-avatar">
                    <Megaphone />
                  </span>
                  <div>
                    <small>Click Mídia</small>
                    <h3>{step.question}</h3>
                    <p>{step.helper}</p>
                  </div>
                </div>

                {step.id === "intencaoPlano" && (
                  <div className="lead-flow-options">
                    {LEAD_PLANS.map((option) => {
                      const Icon = option.icon;
                      const selected = form.intencaoPlano === option.value;
                      return (
                        <button
                          className={selected ? "selected" : ""}
                          type="button"
                          key={option.value}
                          aria-pressed={selected}
                          onClick={() => updateField("intencaoPlano", option.value)}
                        >
                          <span>
                            <Icon />
                          </span>
                          <div>
                            <strong>{option.label}</strong>
                            <small>{option.detail}</small>
                          </div>
                          {selected ? <CircleCheck /> : <ChevronRight />}
                        </button>
                      );
                    })}
                  </div>
                )}

                {step.id === "cnpj" && (
                  <LeadInput
                    icon={<Building2 />}
                    label="CNPJ"
                    value={form.cnpj}
                    placeholder="00.000.000/0000-00"
                    inputMode="numeric"
                    maxLength={18}
                    onChange={(value) => updateField("cnpj", formatarCnpj(value))}
                  />
                )}
                {step.id === "nomeContato" && (
                  <LeadInput
                    icon={<UserRound />}
                    label="Nome completo"
                    value={form.nomeContato}
                    placeholder="Nome da pessoa responsável"
                    autoComplete="name"
                    maxLength={160}
                    onChange={(value) => updateField("nomeContato", value)}
                  />
                )}
                {step.id === "telefone" && (
                  <LeadInput
                    icon={<Phone />}
                    label="Telefone / WhatsApp com DDD"
                    value={form.telefone}
                    placeholder="(00) 00000-0000"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={15}
                    onChange={(value) => updateField("telefone", formatarTelefone(value))}
                  />
                )}
                {step.id === "aceitouTermos" && (
                  <label className="lead-flow-terms">
                    <input
                      type="checkbox"
                      checked={form.aceitouTermos}
                      onChange={(event) => updateField("aceitouTermos", event.target.checked)}
                    />
                    <span>
                      Autorizo o contato comercial da Click Parts pelo telefone ou WhatsApp
                      informado e li a{" "}
                      <a href="/privacidade" target="_blank" rel="noopener noreferrer">
                        Política de Privacidade
                      </a>
                      .
                    </span>
                  </label>
                )}

                <label className="lead-flow-honeypot" aria-hidden="true">
                  Website
                  <input
                    value={form.website}
                    onChange={(event) => updateField("website", event.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
                {error && (
                  <div className="lead-flow-error" role="alert">
                    {error}
                  </div>
                )}
              </div>
              <footer className="lead-flow-actions">
                {stepIndex > 0 && (
                  <button
                    className="lead-flow-back"
                    type="button"
                    disabled={submitting}
                    onClick={() => {
                      setError("");
                      setStepIndex((current) => current - 1);
                    }}
                  >
                    <ArrowLeft /> Voltar
                  </button>
                )}
                <button className="lead-flow-primary" type="submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <LoaderCircle className="lead-flow-spinner" /> Enviando
                    </>
                  ) : stepIndex === LEAD_STEPS.length - 1 ? (
                    <>
                      Enviar interesse <Send />
                    </>
                  ) : (
                    <>
                      Continuar <ArrowRight />
                    </>
                  )}
                </button>
              </footer>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

type LeadInputProps = {
  icon: ReactNode;
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: "text" | "tel" | "numeric";
  autoComplete?: string;
  maxLength?: number;
};

function LeadInput({
  icon,
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  inputMode = "text",
  autoComplete = "off",
  maxLength,
}: LeadInputProps) {
  return (
    <label className="lead-flow-field">
      <span>{label}</span>
      <div>
        {icon}
        <input
          value={value}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </label>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <span className="section-kicker">{children}</span>;
}
