import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest
) {
  return Response.json({
    verifyToken:
      process.env.WHATSAPP_VERIFY_TOKEN ?? "NULL",
  });
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