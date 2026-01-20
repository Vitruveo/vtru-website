import { type NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.vitruveo.ai";
const REDIRECT_HOSTS = [
  "vitruveo.net",
  "www.vitruveo.net",
  "vitruveo.xyz",
  "www.vitruveo.xyz",
  "vitruveo.ai", // non-www to www
];

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") || "";

  // Redirect non-canonical domains to canonical
  if (REDIRECT_HOSTS.includes(host)) {
    const url = new URL(`https://${CANONICAL_HOST}${pathname}${search}`);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
