import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { adminAccessStatus } from "@/lib/auth/admin-policy";

export default clerkMiddleware(async (auth, request) => {
  const path = request.nextUrl.pathname;
  const adminPage = path === "/admin" || path.startsWith("/admin/");
  if (!adminPage) return;
  const session = await auth();
  const status = adminAccessStatus(
    session.userId,
    process.env.CLERK_ADMIN_USER_ID,
  );
  if (status === 200) return;
  if (status === 401)
    return session.redirectToSignIn({ returnBackUrl: request.url });
  return new NextResponse("Forbidden", {
    status: 403,
    headers: { "Cache-Control": "no-store" },
  });
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
