import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("Middleware triggered for:", req.nextUrl.pathname);
    // Add any additional middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        console.log("Middleware authorized check:", {
          hasToken: !!token,
          path: req.nextUrl.pathname,
          tokenData: token ? { email: token.email, provider: token.provider } : null
        });

        // Allow access to auth pages
        if (req.nextUrl.pathname.startsWith('/signin') ||
            req.nextUrl.pathname.startsWith('/signup') ||
            req.nextUrl.pathname.startsWith('/api/auth')) {
          return true;
        }

        // Require authentication for protected routes
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