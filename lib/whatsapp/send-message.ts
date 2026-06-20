export async function sendWhatsappMessage(
  to: string,
  message: string
) {
  console.log(
    "TOKEN EXISTS:",
    !!process.env.WHATSAPP_ACCESS_TOKEN
  );

  console.log(
    "TOKEN PREFIX:",
    process.env.WHATSAPP_ACCESS_TOKEN?.slice(
      0,
      15
    )
  );

  console.log(
    "PHONE NUMBER ID:",
    process.env.WHATSAPP_PHONE_NUMBER_ID
  );

  const response = await fetch(
    `https://graph.facebook.com/v23.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: {
          body: message,
        },
      }),
    }
  );

  console.log(
    "STATUS:",
    response.status
  );

  const data =
    await response.json();

  console.log(
    "WHATSAPP SEND:",
    JSON.stringify(
      data,
      null,
      2
    )
  );

  return data;
}