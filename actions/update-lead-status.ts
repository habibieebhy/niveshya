"use server";

import { sql } from "@/lib/neon";

export async function updateLeadStatus(
  formData: FormData
): Promise<void> {
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;

  await sql`
    UPDATE niveshya.leads
    SET status = ${status}
    WHERE id = ${id}
  `;
}