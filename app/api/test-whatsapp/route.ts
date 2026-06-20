import { sendWhatsappMessage }
from "@/lib/whatsapp/send-message";

export async function GET() {
  const result =
    await sendWhatsappMessage(
      "919957486346",
      "Hello from Niveshya 🚀"
    );

  return Response.json(result);
}