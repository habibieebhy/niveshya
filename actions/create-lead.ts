"use server";

import { sql } from "@/lib/neon";

export async function createLead(formData: FormData): Promise<void> {
  console.log("🚀 SERVER ACTION HIT");

  try {
    const businessName = formData.get("businessName") as string;
    const contactPerson = formData.get("contactPerson") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    console.log({
      businessName,
      contactPerson,
      phone,
      email,
      service,
      message,
    });

    await sql`
      INSERT INTO niveshya.leads (
        business_name,
        contact_person,
        phone,
        email,
        service,
        message
      )
      VALUES (
        ${businessName},
        ${contactPerson},
        ${phone},
        ${email},
        ${service},
        ${message}
      )
    `;

    console.log("✅ Lead Created Successfully");
  } catch (error) {
    console.error("❌ Create Lead Error:");
    console.error(error);
  }
}