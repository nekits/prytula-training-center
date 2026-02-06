import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/', '/(uk|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
