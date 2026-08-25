/// <reference types="node" />

declare const Netlify: { env: { get(name: string): string | undefined } };

const jsonHeaders = { "Content-Type": "application/json; charset=utf-8" };

type QuotePayload = {
  name: string;
  phone: string;
  comment: string;
  page: string;
  honeypot: string;
};

const TELEGRAM_BOT_TOKEN =
  "8970492395:AAEPNN3L0gwKclgdKjEO0PxzMreM2cSdOOE";
const TELEGRAM_CHAT_ID = "-1003953047692";

function env(name: string): string {
  const fromNetlify =
    typeof Netlify !== "undefined" ? Netlify.env.get(name) : undefined;
  const value = (fromNetlify ?? process.env[name] ?? "").trim();
  if (value) return value;
  if (name === "TELEGRAM_BOT_TOKEN") return TELEGRAM_BOT_TOKEN;
  if (name === "TELEGRAM_CHAT_ID") return TELEGRAM_CHAT_ID;
  return "";
}

function telegramReady() {
  return Boolean(env("TELEGRAM_BOT_TOKEN") && env("TELEGRAM_CHAT_ID"));
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function wantsJson(req: Request) {
  return (req.headers.get("accept") ?? "").includes("application/json");
}

function phoneFallbackResponse(req: Request) {
  const phone = "+998 71 200 50 51";
  const tel = "+998712005051";
  if (wantsJson(req)) {
    return json({ ok: false, fallback: true, enabled: false, phone }, 503);
  }
  const html = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Позвоните</title>
  </head>
  <body>
    <p>Заявку сейчас нельзя отправить с сайта. Позвоните — подберём комплектацию.</p>
    <p><a href="tel:${tel}">${phone}</a></p>
    <p><a href="/contacts/">Контакты</a> · <a href="/catalog/stellazhi/">Каталог стеллажей</a></p>
  </body>
</html>`;
  return new Response(html, { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

async function readPayload(req: Request): Promise<QuotePayload> {
  const contentType = req.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const data = (await req.json()) as Record<string, unknown>;
    return {
      name: String(data.name ?? ""),
      phone: String(data.phone ?? ""),
      comment: String(data.comment ?? ""),
      page: String(data.page ?? ""),
      honeypot: String(data["bot-field"] ?? data.honeypot ?? ""),
    };
  }
  const form = await req.formData();
  return {
    name: String(form.get("name") ?? ""),
    phone: String(form.get("phone") ?? ""),
    comment: String(form.get("comment") ?? ""),
    page: String(form.get("page") ?? ""),
    honeypot: String(form.get("bot-field") ?? ""),
  };
}

function clip(value: string, max: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export default async (req: Request) => {
  if (req.method === "GET") {
    const enabled = telegramReady();
    return json({ enabled, fallback: !enabled });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const payload = await readPayload(req);
  if (payload.honeypot.trim()) {
    if (wantsJson(req)) return json({ ok: true });
    return Response.redirect(new URL("/contacts/thanks/", req.url), 303);
  }

  const name = clip(payload.name, 120);
  const phone = clip(payload.phone, 40);
  if (!name || !phone) {
    return wantsJson(req)
      ? json({ ok: false, error: "required" }, 400)
      : new Response("Укажите имя и телефон", { status: 400 });
  }

  if (!telegramReady()) {
    return phoneFallbackResponse(req);
  }

  const comment = clip(payload.comment, 2000);
  const page = clip(payload.page, 200);
  const text = [
    "Заявка с сайта innotek.uz",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    comment ? `Комментарий: ${comment}` : null,
    page ? `Страница: ${page}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const telegram = await fetch(
    `https://api.telegram.org/bot${env("TELEGRAM_BOT_TOKEN")}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env("TELEGRAM_CHAT_ID"),
        text,
      }),
    },
  );

  if (!telegram.ok) {
    return phoneFallbackResponse(req);
  }

  if (wantsJson(req)) return json({ ok: true });
  return Response.redirect(new URL("/contacts/thanks/", req.url), 303);
};

export const config = {
  path: "/api/quote",
  method: ["GET", "POST"],
};
