"use server";

import bcrypt from "bcryptjs";
import { sql } from "@/lib/neon";

export async function resetPassword(
  formData: FormData
): Promise<void> {
  const id = formData.get("id") as string;
  const password =
    formData.get("password") as string;

  const passwordHash =
    await bcrypt.hash(password, 10);

  await sql`
    UPDATE niveshya.users
    SET password_hash = ${passwordHash}
    WHERE id = ${id}
  `;

  console.log(
    "PASSWORD RESET SUCCESS"
  );
}