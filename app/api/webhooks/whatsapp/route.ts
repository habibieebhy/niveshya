import { NextRequest } from "next/server";

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
  const body = await request.json();

  console.log(
    "WHATSAPP WEBHOOK:",
    JSON.stringify(body, null, 2)
  );

  return Response.json({
    received: true,
  });
}