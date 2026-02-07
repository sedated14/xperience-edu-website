import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Check if it's the j1partners subdomain
  if (hostname.includes('j1partners.')) {
    // Rewrite to /j1-partners page
    return NextResponse.rewrite(new URL('/j1-partners', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.).*)',
  ],
}
