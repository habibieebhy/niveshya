"use server";

import { db } from "@/db";
import { leadNotes } from "@/db/schema";
import { createNoteSchema } from "@/db/zod";

export async function createNote(
  formData: FormData
): Promise<void> {
  const validated =
    createNoteSchema.parse({
      leadId:
        formData.get("leadId"),
      note:
        formData.get("note"),
    });

  if (
    !validated.note.trim()
  ) {
    return;
  }

  await db.insert(
    leadNotes
  ).values({
    leadId:
      validated.leadId,
    note:
      validated.note,
  });
}