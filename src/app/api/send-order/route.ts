import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { phone, service, message } = body;

    if (!phone) {
      return NextResponse.json(
        { error: "Телефон обязателен" },
        { status: 400 }
      );
    }

    const serviceNames: Record<string, string> = {
      kuzov: "Кузовной ремонт",
      to: "Техническое обслуживание",
      engine: "Диагностика двигателя",
      podveska: "Ремонт подвески",
      maslo: "Замена масла",
      tormoza: "Тормозная система",
      other: "Другое",
    };

    const serviceText = service ? serviceNames[service] || service : "Не указана";

    const text = `🚗 *Новая заявка на ремонт*

*Телефон:* ${phone}
*Услуга:* ${serviceText}
${message ? `*Сообщение:* ${message}` : ""}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      console.error("Telegram API error:", telegramData);
      return NextResponse.json(
        { error: "Ошибка отправки в Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
