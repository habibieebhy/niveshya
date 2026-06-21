import { NextRequest, NextResponse } from "next/server";

export async function middleware(
  request: NextRequest
) {
  console.log(
    "========== MIDDLEWARE =========="
  );

  console.log(
    "PATH:",
    request.nextUrl.pathname
  );

  console.log(
    "SESSION COOKIE:",
    request.cookies.get("session")
  );

  const session =
    request.cookies.get("session");

  const pathname =
    request.nextUrl.pathname;

  const isAdminRoute =
    pathname.startsWith("/admin");

  const isLoginPage =
    pathname === "/admin/login";

  if (
    isAdminRoute &&
    !isLoginPage &&
    !session
  ) {
    console.log(
      "REDIRECTING TO LOGIN"
    );

    return NextResponse.redirect(
      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  console.log(
    "ALLOWING REQUEST"
  );

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};