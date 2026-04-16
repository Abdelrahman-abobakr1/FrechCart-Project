import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith('/signin') ||
            req.nextUrl.pathname.startsWith('/signup') ||
            req.nextUrl.pathname.startsWith('/api/auth')) {
          return true;
        }

        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/cart/:path*",
    "/checkout/:path*",
    "/orders/:path*",
    "/account/:path*",
    "/wishlist/:path*",
  ],
};