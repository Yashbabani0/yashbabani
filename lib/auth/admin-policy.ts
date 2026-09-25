export function adminAccessStatus(
  userId: string | null,
  ownerId: string | undefined,
) {
  if (!userId) return 401;
  if (!ownerId?.trim() || userId !== ownerId.trim()) return 403;
  return 200;
}
