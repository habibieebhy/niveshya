"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { users } from "@/db/schema";
import { createSession } from "@/db/session";

export async function login(
  formData: FormData
): Promise<void> {
  console.log(
    "================ LOGIN START ================"
  );

  const email =
    formData.get("email") as string;

  const password =
    formData.get("password") as string;

  console.log(
    "EMAIL:",
    email
  );

  const user = await db
    .select()
    .from(users)
    .where(
      eq(users.email, email)
    )
    .limit(1)
    .then(
      (rows) => rows[0]
    );

  console.log(
    "USER FOUND:",
    !!user
  );

  if (!user) {
    console.log(
      "USER NOT FOUND"
    );
    return;
  }

  const validPassword =
    await bcrypt.compare(
      password,
      user.passwordHash
    );

  console.log(
    "PASSWORD VALID:",
    validPassword
  );

  if (!validPassword) {
    console.log(
      "INVALID PASSWORD"
    );
    return;
  }

  console.log(
    "AUTH SECRET EXISTS:",
    !!process.env.AUTH_SECRET
  );

  console.log(
    "AUTH SECRET LENGTH:",
    process.env.AUTH_SECRET?.length
  );

  const token =
    await createSession({
      id: user.id,
      email: user.email,
      role: user.role,
    });

  console.log(
    "TOKEN CREATED:",
    !!token
  );

  console.log(
    "TOKEN LENGTH:",
    token.length
  );

  console.log(
    "TOKEN PREFIX:",
    token.slice(0, 30)
  );

  const cookieStore =
    await cookies();

  cookieStore.set(
    "session",
    token,
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV ===
        "production",
      sameSite: "lax",
      path: "/",
      maxAge:
        60 * 60 * 24 * 7,
    }
  );

  console.log(
    "COOKIE SET: session"
  );

  console.log(
    "REDIRECTING TO /admin"
  );

  console.log(
    "================ LOGIN END ================"
  );

  redirect("/admin");
}