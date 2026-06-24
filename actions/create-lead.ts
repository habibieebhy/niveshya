"use server";

import { db } from "@/db";
import { leads } from "@/db/schema";
import { createLeadSchema } from "@/db/zod";

export async function createLead(
  formData: FormData
): Promise<void> {
  // console.log(
  //   "🚀 SERVER ACTION HIT"
  // );

  try {
    const validated =
      createLeadSchema.parse({
        businessName:
          formData.get(
            "businessName"
          ),
        contactPerson:
          formData.get(
            "contactPerson"
          ),
        phone:
          formData.get("phone"),
        email:
          formData.get("email"),
        service:
          formData.get("service"),
        message:
          formData.get("message"),
      });

    console.log(validated);

    await db.insert(leads).values({
      businessName:
        validated.businessName,
      contactPerson:
        validated.contactPerson,
      phone:
        validated.phone,
      email:
        validated.email,
      service:
        validated.service,
      message:
        validated.message,
    });

    console.log(
      "✅ Lead Created Successfully"
    );
  } catch (error) {
    console.error(
      "❌ Create Lead Error:"
    );

    console.error(error);
  }
}