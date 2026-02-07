import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Check if it's the j1partners subdomain
  if (hostname.startsWith('j1partners.')) {
    return NextResponse.rewrite(new URL('/j1-partners', request.url))
  }

  return NextResponse.next()
}
