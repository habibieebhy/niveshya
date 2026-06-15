"use server";

import bcrypt from "bcryptjs";
import { sql } from "@/lib/neon";

export async function createUser(
  formData: FormData
): Promise<void> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  const passwordHash =
    await bcrypt.hash(password, 10);

  await sql`
    INSERT INTO niveshya.users (
      name,
      email,
      password_hash,
      role
    )
    VALUES (
      ${name},
      ${email},
      ${passwordHash},
      ${role}
    )
  `;
}