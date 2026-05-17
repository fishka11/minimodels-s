import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.pathname;

  // Chronimy tylko endpoint cleanup
  if (url.startsWith("/api/cleanup")) {
    const secret = req.headers.get("x-cleanup-secret");

    if (!secret || secret !== process.env.CLEANUP_SECRET) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }
  }

  return NextResponse.next();
}

// Middleware działa tylko na tym jednym endpointzie
export const config = {
  matcher: ["/api/cleanup/:path*"],
};
