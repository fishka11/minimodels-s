import { NextResponse } from "next/server";

const CLEANUP_SECRET = process.env.CLEANUP_SECRET;

export function middleware(req) {
  const url = req.nextUrl.pathname;

  if (url.startsWith("/api/cleanup")) {
    const secret = req.headers.get("x-cleanup-secret");

    if (!secret || secret !== CLEANUP_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/cleanup/:path*"],
};
