import type { AdminRecord } from "./types";

export default function ContentTable({
  records,
  onEdit,
  onDelete,
  onToggle,
}: {
  records: AdminRecord[];
  onEdit: (record: AdminRecord) => void;
  onDelete: (record: AdminRecord) => void;
  onToggle: (record: AdminRecord) => void;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-neutral-900">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="border-b border-black/10 text-neutral-500 dark:border-white/10">
          <tr>
            {[
              "Title",
              "Type / category",
              "Status",
              "Views / downloads",
              "Actions",
            ].map((label) => (
              <th key={label} className="px-5 py-4 font-medium">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((item) => (
            <tr
              key={item.id}
              className="border-b border-black/5 last:border-0 dark:border-white/10"
            >
              <td className="max-w-xs px-5 py-4">
                <button
                  onClick={() => onEdit(item)}
                  className="text-left font-medium hover:underline"
                >
                  {item.title}
                </button>
                <p className="mt-1 text-xs text-neutral-500">{item.updated}</p>
              </td>
              <td className="px-5 py-4">
                {item.type}
                <p className="text-xs text-neutral-500">{item.category}</p>
              </td>
              <td className="px-5 py-4">
                <span
                  className={`rounded-full px-2 py-1 text-xs ${item.status === "Published" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800"}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-5 py-4">
                {(item.type === "Asset"
                  ? item.downloads
                  : item.views
                ).toLocaleString()}
                {item.type === "Asset" && (
                  <p className="text-xs text-neutral-500">{item.size}</p>
                )}
              </td>
              <td className="px-5 py-4">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => onEdit(item)}
                    aria-label={`Edit ${item.title}`}
                    className="hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onToggle(item)}
                    className="hover:underline"
                  >
                    {item.status === "Draft" ? "Publish" : "Unpublish"}
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    aria-label={`Delete ${item.title}`}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!records.length && (
        <p className="p-12 text-center text-neutral-500">
          No content matches these filters.
        </p>
      )}
    </div>
  );
}
