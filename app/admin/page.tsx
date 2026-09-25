import { UserButton } from "@clerk/nextjs";
import { requireAdmin } from "@/lib/auth/admin";

export default async function AdminPage() {
  await requireAdmin();
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-semibold">Admin</h1>
        <UserButton />
      </div>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Your private administration area.
      </p>
    </main>
  );
}
