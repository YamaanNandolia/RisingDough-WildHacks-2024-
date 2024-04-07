import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // uncomment when we want to enable real authentication
  
  // const currentUser = request.cookies.get('currentUser')?.value
 
  // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return Response.redirect(new URL('/dashboard', request.url))
  // }
 
  // if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/login', request.url))
  // }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}