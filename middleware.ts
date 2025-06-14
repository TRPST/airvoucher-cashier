import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple middleware for security and common headers
export function middleware(request: NextRequest) {
  // We'll use this middleware for future auth/security needs
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
} 