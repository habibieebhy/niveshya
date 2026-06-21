"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  console.log(
    "=========== LOGOUT START ==========="
  );

  const cookieStore =
    await cookies();

  console.log(
    "COOKIE BEFORE DELETE:",
    cookieStore.get("session")
  );

  cookieStore.delete(
    "session"
  );

  console.log(
    "COOKIE DELETE CALLED"
  );

  console.log(
    "COOKIE AFTER DELETE:",
    cookieStore.get("session")
  );

  console.log(
    "REDIRECTING TO /admin/login"
  );

  console.log(
    "=========== LOGOUT END ==========="
  );

  redirect(
    "/admin/login"
  );
}