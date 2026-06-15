"use server";

import { sql } from "@/lib/neon";

export async function createNote(
  formData: FormData
): Promise<void> {
  const leadId = formData.get("leadId") as string;
  const note = formData.get("note") as string;

  if (!note?.trim()) return;

  await sql`
    INSERT INTO niveshya.lead_notes (
      lead_id,
      note
    )
    VALUES (
      ${leadId},
      ${note}
    )
  `;
}