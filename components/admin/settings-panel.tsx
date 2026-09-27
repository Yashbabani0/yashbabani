import { useState } from "react";
import type { AdminSettings } from "./types";

export default function SettingsPanel({
  settings,
  onSave,
}: {
  settings: AdminSettings;
  onSave: (settings: AdminSettings) => void;
}) {
  const [draft, setDraft] = useState(settings);
  return (
    <form
      className="max-w-2xl space-y-5 rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900"
      onSubmit={(event) => {
        event.preventDefault();
        if (draft.siteName.trim())
          onSave({ ...draft, siteName: draft.siteName.trim() });
      }}
    >
      <h1 className="text-2xl font-semibold">Settings</h1>
      {(
        [
          ["siteName", "Site name"],
          ["description", "Site description"],
          ["email", "Contact email"],
        ] as const
      ).map(([key, label]) => (
        <label key={key} className="block text-sm">
          {label}
          <input
            required
            type={key === "email" ? "email" : "text"}
            value={draft[key]}
            onChange={(event) =>
              setDraft({ ...draft, [key]: event.target.value })
            }
            className="mt-2 w-full rounded-lg border border-black/15 bg-transparent px-3 py-2 dark:border-white/15"
          />
        </label>
      ))}
      <button className="rounded-lg bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
        Save settings
      </button>
    </form>
  );
}
