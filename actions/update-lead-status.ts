"use server";

import { eq } from "drizzle-orm";

import { db } from "@/db";
import { leads } from "@/db/schema";
import { updateLeadStatusSchema } from "@/db/zod";

export async function updateLeadStatus(
  formData: FormData
): Promise<void> {
  const validated =
    updateLeadStatusSchema.parse({
      id: formData.get("id"),
      status: formData.get("status"),
    });

  await db
    .update(leads)
    .set({
      status: validated.status,
    })
    .where(
      eq(
        leads.id,
        validated.id
      )
    );
}