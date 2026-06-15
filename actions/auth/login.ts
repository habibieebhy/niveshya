"use server";

import { sql } from "@/lib/neon";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/auth/session";

export async function login(
  formData: FormData
): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const users = await sql`
    SELECT *
    FROM niveshya.users
    WHERE email = ${email}
    LIMIT 1
  `;

  const user = users[0];

  if (!user) {
    console.log("USER NOT FOUND");
    return;
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!validPassword) {
    console.log("INVALID PASSWORD");
    return;
  }

  const token = await createSession({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  const cookieStore = await cookies();

  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  console.log("LOGIN SUCCESS");

  redirect("/admin");
}