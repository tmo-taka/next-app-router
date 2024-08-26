import { NextResponse, type  NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('SESSION');
    if(cookie?.value === process.env.TOKEN) {
        return NextResponse.next()
    }

    // tokenがない場合
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        '/((?!api|login|_next/static/|favicon.ico).*)',
    ],
}