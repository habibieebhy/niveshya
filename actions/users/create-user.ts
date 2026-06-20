"use server";

import bcrypt from "bcryptjs";

import { db } from "@/db";
import { users } from "@/db/schema";
import { createUserWithPasswordSchema } from "@/db/zod";

export async function createUser(
  formData: FormData
): Promise<void> {
  const name =
    formData.get("name") as string;

  const email =
    formData.get("email") as string;

  const password =
    formData.get("password") as string;

  const role =
    formData.get("role") as string;

  const validated =
    createUserWithPasswordSchema.parse({
      name,
      email,
      role,
      password,
    });

  const passwordHash =
    await bcrypt.hash(
      validated.password,
      10
    );
  await db.insert(users).values({
    name: validated.name,
    email: validated.email,
    role: validated.role,
    passwordHash,
  });
}