import { NextRequest, NextResponse } from "next/server";

export async function middleware(
  request: NextRequest
) {
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
    return NextResponse.redirect(
      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};