import { createAPIFileRoute } from "@tanstack/react-start/api";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export const APIRoute = createAPIFileRoute("/api/click-midia-lead")({
  POST: async ({ request }) => {
    const appId = process.env.CLICK_MIDIA_PARSE_APP_ID;
    const clientKey = process.env.CLICK_MIDIA_PARSE_CLIENT_KEY;
    const restApiKey = process.env.CLICK_MIDIA_PARSE_REST_API_KEY;

    if (!appId || !clientKey || !restApiKey) {
      return json({ error: "Integração comercial indisponível no momento." }, 503);
    }

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Dados do formulário inválidos." }, 400);
    }

    const hostname = new URL(request.url).hostname.toLowerCase();
    const local = hostname === "localhost" || hostname === "127.0.0.1";
    const baseUrl = local
      ? "https://parseh3.clickparts.app/parse/functions"
      : "https://parse.clickparts.app/parse/functions";

    try {
      const upstream = await fetch(`${baseUrl}/click-midia-lead-enviar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Parse-Application-Id": appId,
          "X-Parse-Client-Key": clientKey,
          "X-Parse-REST-API-Key": restApiKey,
        },
        body: JSON.stringify(payload),
      });
      const body = await upstream.text();
      return new Response(body, {
        status: upstream.status,
        headers: {
          "Content-Type": upstream.headers.get("Content-Type") || "application/json; charset=utf-8",
        },
      });
    } catch {
      return json({ error: "Não foi possível conectar ao atendimento. Tente novamente." }, 502);
    }
  },
});
