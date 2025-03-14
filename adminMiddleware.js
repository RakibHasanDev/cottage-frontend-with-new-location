import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = req.cookies.get("session_token");

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const userRes = await fetch(
    `https://cottage-backend-voilerplate.vercel.app/api/auth/me`
  );

  const user = await userRes.json();

  if (!user || !user.isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// ✅ Apply middleware only to `/dashboard`
export const config = {
  matcher: "/dashboard/:path*",
};
