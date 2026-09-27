"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { contentTypes, type AdminRecord } from "./types";

export default function ContentEditor({
  record,
  onSave,
  onClose,
}: {
  record: AdminRecord;
  onSave: (record: AdminRecord) => void;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState(record);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    return () => element.close();
  }, []);
  function submit(event: FormEvent) {
    event.preventDefault();
    if (
      !draft.title.trim() ||
      !draft.description.trim() ||
      !draft.category.trim()
    ) {
      setError("Enter a title, description, and category.");
      return;
    }
    onSave({
      ...draft,
      title: draft.title.trim(),
      description: draft.description.trim(),
      category: draft.category.trim(),
      updated: "Just now",
    });
  }
  const input =
    "mt-2 w-full rounded-lg border border-black/15 bg-transparent px-3 py-2 dark:border-white/15";
  return (
    <dialog
      ref={dialog}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="editor-title"
      className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-2xl bg-white p-6 text-neutral-950 shadow-xl backdrop:bg-black/50 dark:bg-neutral-900 dark:text-white"
    >
      <div className="flex items-center justify-between">
        <h2 id="editor-title" className="text-xl font-semibold">
          {record.id ? "Edit content" : "Create content"}
        </h2>
        <button onClick={onClose} aria-label="Close editor" className="p-2">
          <X size={20} />
        </button>
      </div>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block text-sm">
          Title
          <input
            autoFocus
            required
            maxLength={160}
            className={input}
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="text-sm">
            Type
            <select
              className={input}
              value={draft.type}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  type: e.target.value as AdminRecord["type"],
                })
              }
            >
              {contentTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            Status
            <select
              className={input}
              value={draft.status}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  status: e.target.value as AdminRecord["status"],
                })
              }
            >
              <option>Draft</option>
              <option>Published</option>
            </select>
          </label>
        </div>
        <label className="block text-sm">
          Category
          <input
            required
            className={input}
            value={draft.category}
            onChange={(e) => setDraft({ ...draft, category: e.target.value })}
          />
        </label>
        <label className="block text-sm">
          Description
          <textarea
            required
            rows={5}
            className={input}
            value={draft.description}
            onChange={(e) =>
              setDraft({ ...draft, description: e.target.value })
            }
          />
        </label>
        {draft.type === "Asset" && (
          <label className="block text-sm">
            File size
            <input
              className={input}
              placeholder="e.g. 24 MB"
              value={draft.size === "—" ? "" : draft.size}
              onChange={(e) => setDraft({ ...draft, size: e.target.value })}
            />
          </label>
        )}
        {error && (
          <p role="alert" className="text-sm text-red-500">
            {error}
          </p>
        )}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
          >
            Save content
          </button>
        </div>
      </form>
    </dialog>
  );
}
