import { NextRequest } from "next/server";
import { processIncomingMessage }
  from "@/lib/whatsapp/bot";

import { sendWhatsappMessage }
  from "@/lib/whatsapp/send-message";

import { db } from "@/db";

import {
  whatsappMessages,
} from "@/db/schema";

export async function GET(
  request: NextRequest
) {
  const searchParams =
    request.nextUrl.searchParams;

  const mode =
    searchParams.get("hub.mode");

  const token =
    searchParams.get("hub.verify_token");

  const challenge =
    searchParams.get("hub.challenge");

  console.log(
    "WHATSAPP VERIFY:",
    {
      mode,
      token,
      challenge,
    }
  );

  if (
    mode === "subscribe" &&
    token === process.env.WHATSAPP_VERIFY_TOKEN
  ) {
    return new Response(challenge);
  }

  return new Response(
    "Forbidden",
    { status: 403 }
  );
}

export async function POST(
  request: Request
) {
  const body =
    await request.json();

  console.log(
    "WHATSAPP WEBHOOK:",
    JSON.stringify(
      body,
      null,
      2
    )
  );

  try {
    const message =
      body?.entry?.[0]
        ?.changes?.[0]
        ?.value?.messages?.[0];

    if (!message) {
      return Response.json({
        received: true,
      });
    }

    const phone =
      message.from;

    const text =
      message.text?.body ?? "";

    const name =
      body?.entry?.[0]
        ?.changes?.[0]
        ?.value?.contacts?.[0]
        ?.profile?.name ??
      "Unknown";

    await db
      .insert(
        whatsappMessages
      )
      .values({
        phone,
        direction:
          "inbound",
        messageText:
          text,
      });

    const reply =
      await processIncomingMessage(
        phone,
        name,
        text
      );

    await sendWhatsappMessage(
      phone,
      reply
    );

    await db
      .insert(
        whatsappMessages
      )
      .values({
        phone,
        direction:
          "outbound",
        messageText:
          reply,
      });

    return Response.json({
      received: true,
    });
  } catch (error) {
    console.error(
      error
    );

    return Response.json(
      {
        received: false,
      },
      {
        status: 500,
      }
    );
  }
}