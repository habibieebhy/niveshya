"use server";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";
import { resetPasswordSchema } from "@/db/zod";

export async function resetPassword(
  formData: FormData
): Promise<void> {
  const validated =
    resetPasswordSchema.parse({
      id: formData.get("id"),
      password: formData.get("password"),
    });

  const passwordHash =
    await bcrypt.hash(
      validated.password,
      10
    );

  await db
    .update(users)
    .set({
      passwordHash,
    })
    .where(
      eq(
        users.id,
        validated.id
      )
    );

  console.log(
    "PASSWORD RESET SUCCESS"
  );
}