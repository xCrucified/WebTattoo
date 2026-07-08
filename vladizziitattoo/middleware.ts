import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('admin-auth');
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login');

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!isAuthenticated && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    if (isAuthenticated && isLoginPage) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};