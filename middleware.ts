import { NextResponse, type  NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('request:',request)
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        '/((?!api|login|_next/static/|favicon.ico).*)',
    ],
}