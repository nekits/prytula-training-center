import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createIntlMiddleware(routing);

const PASSWORD = process.env.PREVIEW_PASSWORD;

function createPasswordPage(): NextResponse {
  const html = `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Навчальний центр — Доступ</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      color: #1a1a1a;
    }
    .container {
      background: white;
      border-radius: 16px;
      padding: 48px 40px;
      max-width: 400px;
      width: 100%;
      margin: 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      text-align: center;
    }
    h1 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
      color: #666;
      margin-bottom: 24px;
    }
    input {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      font-size: 16px;
      outline: none;
      transition: border-color 0.2s;
      margin-bottom: 12px;
    }
    input:focus { border-color: #4e51ff; }
    button {
      width: 100%;
      padding: 12px;
      background: #4e51ff;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover { background: #3d40cc; }
    .error {
      color: #e53e3e;
      font-size: 13px;
      margin-top: 12px;
      display: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Навчальний центр</h1>
    <p>Сайт знаходиться в режимі попереднього перегляду</p>
    <form method="POST" action="/__preview_auth">
      <input type="password" name="password" placeholder="Пароль" autofocus required />
      <button type="submit">Увійти</button>
    </form>
    <p class="error" id="error">Невірний пароль</p>
  </div>
  <script>
    if (window.location.search.includes('error=1')) {
      document.getElementById('error').style.display = 'block';
    }
  </script>
</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle password submission
  if (pathname === '/__preview_auth' && request.method === 'POST') {
    const formData = await request.formData();
    const password = formData.get('password');

    if (password === PASSWORD) {
      const url = request.nextUrl.clone();
      url.pathname = '/';
      url.search = '';
      const response = NextResponse.redirect(url);
      response.cookies.set('preview_access', 'granted', {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      return response;
    } else {
      const url = request.nextUrl.clone();
      url.pathname = '/';
      url.search = '?error=1';
      return NextResponse.redirect(url);
    }
  }

  // If password protection is enabled, check cookie
  if (PASSWORD) {
    const hasAccess = request.cookies.get('preview_access')?.value === 'granted';
    if (!hasAccess) {
      return createPasswordPage();
    }
  }

  // Normal i18n middleware
  const response = intlMiddleware(request);
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  matcher: ['/', '/__preview_auth', '/(uk|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
