import { clerkMiddleware } from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware((auth, req) => {
  publicRoutes: ['/', '/api/webhooks/clerk',]
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"] 
}, { debug: true })
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};