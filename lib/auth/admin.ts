import "server-only";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";
import { adminAccessStatus } from "./admin-policy";

/** Call before every admin page, Server Action, or database operation. */
export async function requireAdmin() {
  const session = await auth();
  if (!session.userId)
    return session.redirectToSignIn({ returnBackUrl: "/admin" });
  if (
    adminAccessStatus(session.userId, process.env.CLERK_ADMIN_USER_ID) !== 200
  )
    notFound();
  return { userId: session.userId };
}
