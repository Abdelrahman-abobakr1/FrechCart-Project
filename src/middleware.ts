import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const path = req.nextUrl.pathname;
      
      if (path.startsWith('/signin') || 
          path.startsWith('/signup') || 
          path.startsWith('/api/auth') ||
          path === '/') {
        return true;
      }
      
      return token !== null;
    },
  },
});

export const config = {
  matcher: [
    "/cart/:path*",
    "/checkout/:path*",
    "/orders/:path*",
    "/account/:path*",
    "/wishlist/:path*",
  ],
};