import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const token = await getToken({ req: request, secret: "Social_Login_Development_Secret_123!_Change_For_Production" });
  const isAuth: boolean = pathName === "/signin" ||pathName ===  "/signup";

  if (isAuth) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/signin", request.url));
}
export const config = {
  matcher: ["/cart", "/brands", "/shop", "/signin", "/signup"],
};
