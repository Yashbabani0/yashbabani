"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  LayoutDashboard,
  BarChart3,
  FileText,
  Box,
  Gamepad2,
  Package,
  Settings,
  Library,
} from "lucide-react";
import Overview from "./overview";
import ContentTable from "./content-table";
import ContentEditor from "./content-editor";
import SettingsPanel from "./settings-panel";
import AnalyticsPanel from "./analytics-panel";
import { initialRecords } from "./seed";
import {
  sections,
  type Section,
  type AdminRecord,
  type ContentType,
} from "./types";

const icons = [
  LayoutDashboard,
  BarChart3,
  Library,
  FileText,
  Box,
  Gamepad2,
  Package,
  Settings,
];
const sectionType: Partial<Record<Section, ContentType>> = {
  Blogs: "Blog",
  Projects: "Project",
  Games: "Game",
  Assets: "Asset",
};

export default function AdminDashboard() {
  const [active, setActive] = useState<Section>("Overview");
  const [records, setRecords] = useState(initialRecords);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [editor, setEditor] = useState<AdminRecord | null>(null);
  const [activity, setActivity] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [settings, setSettings] = useState({
    siteName: "YASH.",
    description: "Portfolio Admin",
    email: "yashbabani09@gmail.com",
  });
  const [undo, setUndo] = useState<AdminRecord | null>(null);
  const [resetPending, setResetPending] = useState(false);

  function navigate(section: Section) {
    setActive(section);
    setQuery("");
    setStatus("All");
  }
  function report(message: string) {
    setNotice(message);
    setActivity((items) => [message, ...items].slice(0, 20));
  }
  function create(type: ContentType = sectionType[active] ?? "Blog") {
    setEditor({
      id: "",
      title: "",
      type,
      description: "",
      category: "",
      status: "Draft",
      views: 0,
      downloads: 0,
      size: "—",
      updated: "Just now",
    });
  }
  function save(record: AdminRecord) {
    const exists = !!record.id;
    const saved = { ...record, id: record.id || crypto.randomUUID() };
    setRecords((items) =>
      exists
        ? items.map((item) => (item.id === saved.id ? saved : item))
        : [saved, ...items],
    );
    report(`${exists ? "Updated" : "Created"} ${saved.title}`);
    setEditor(null);
    navigate("Content");
  }
  const filtered = records.filter(
    (item) =>
      (!sectionType[active] || item.type === sectionType[active]) &&
      (status === "All" || item.status === status) &&
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const catalog = active === "Content" || !!sectionType[active];

  return (
    <div className="min-h-[calc(100dvh-4rem)] bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto grid max-w-[1800px] lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden self-start border-r border-black/5 bg-white p-4 lg:sticky lg:top-16 lg:block lg:min-h-[calc(100dvh-4rem)] dark:border-white/10 dark:bg-neutral-950">
          <p className="px-3 text-lg font-semibold">{settings.siteName}</p>
          <p className="px-3 text-xs text-neutral-500">
            {settings.description}
          </p>
          <nav aria-label="Admin sections" className="mt-8 space-y-1">
            {sections.map((section, i) => {
              const Icon = icons[i];
              return (
                <button
                  key={section}
                  onClick={() => navigate(section)}
                  aria-current={active === section ? "page" : undefined}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm ${active === section ? "bg-black text-white dark:bg-white dark:text-black" : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900"}`}
                >
                  <Icon size={18} />
                  {section}
                </button>
              );
            })}
          </nav>
        </aside>
        <div className="min-w-0">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-white px-4 py-4 dark:border-white/10 dark:bg-neutral-950 sm:px-8">
            <div>
              <p className="font-semibold">{active}</p>
              <p className="text-xs text-neutral-500">
                Manage your portfolio and content.
              </p>
            </div>
            <button
              onClick={() => create()}
              className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black"
            >
              <Plus size={16} />
              Create
            </button>
            <label className="w-full text-sm lg:hidden">
              Admin section
              <select
                aria-label="Admin section"
                className="mt-2 w-full rounded-lg border bg-transparent p-2"
                value={active}
                onChange={(e) => navigate(e.target.value as Section)}
              >
                {sections.map((section) => (
                  <option key={section}>{section}</option>
                ))}
              </select>
            </label>
          </header>
          <div className="space-y-6 p-4 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm">
              <p>
                Demo workspace · sample analytics · changes reset on refresh.
              </p>
              <button
                className="underline underline-offset-4"
                onClick={() => {
                  if (!resetPending) {
                    setResetPending(true);
                    return;
                  }
                  setRecords(initialRecords);
                  setActivity([]);
                  setUndo(null);
                  setSettings({
                    siteName: "YASH.",
                    description: "Portfolio Admin",
                    email: "yashbabani09@gmail.com",
                  });
                  setResetPending(false);
                  navigate("Overview");
                  setNotice("Demo data reset.");
                }}
              >
                {resetPending ? "Confirm reset" : "Reset demo"}
              </button>
              {resetPending && (
                <button onClick={() => setResetPending(false)}>
                  Cancel reset
                </button>
              )}
            </div>
            <div
              role="status"
              aria-live="polite"
              className="text-sm text-emerald-700 dark:text-emerald-400"
            >
              {notice}
              {undo && (
                <button
                  className="ml-3 underline"
                  onClick={() => {
                    setRecords((items) => [undo, ...items]);
                    report(`Restored ${undo.title}`);
                    setUndo(null);
                  }}
                >
                  Undo delete
                </button>
              )}
            </div>
            {active === "Overview" && (
              <Overview
                records={records}
                activity={activity}
                onCreate={create}
                onNavigate={navigate}
              />
            )}
            {active === "Analytics" && <AnalyticsPanel />}
            {active === "Settings" && (
              <SettingsPanel
                settings={settings}
                onSave={(value) => {
                  setSettings(value);
                  report("Saved workspace settings");
                }}
              />
            )}
            {catalog && (
              <section className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-semibold">{active}</h1>
                    <p className="mt-1 text-sm text-neutral-500">
                      {filtered.length} items
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap gap-3 sm:w-auto">
                    <label className="relative flex-1">
                      <Search
                        size={16}
                        className="absolute left-3 top-3 text-neutral-500"
                      />
                      <input
                        aria-label="Search content"
                        placeholder="Search content..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full rounded-lg border border-black/15 bg-transparent py-2 pl-9 pr-3 dark:border-white/15"
                      />
                    </label>
                    <select
                      aria-label="Filter status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="rounded-lg border border-black/15 bg-transparent px-3 py-2 dark:border-white/15"
                    >
                      <option value="All">All statuses</option>
                      <option>Published</option>
                      <option>Draft</option>
                    </select>
                  </div>
                </div>
                <ContentTable
                  records={filtered}
                  onEdit={setEditor}
                  onDelete={(record) => {
                    setRecords((items) =>
                      items.filter((item) => item.id !== record.id),
                    );
                    setUndo(record);
                    report(`Deleted ${record.title}`);
                  }}
                  onToggle={(record) => {
                    const next =
                      record.status === "Draft" ? "Published" : "Draft";
                    setRecords((items) =>
                      items.map((item) =>
                        item.id === record.id
                          ? { ...item, status: next, updated: "Just now" }
                          : item,
                      ),
                    );
                    report(
                      `${next === "Published" ? "Published" : "Unpublished"} ${record.title}`,
                    );
                  }}
                />
              </section>
            )}
          </div>
        </div>
      </div>
      {editor && (
        <ContentEditor
          key={editor.id || "new"}
          record={editor}
          onClose={() => setEditor(null)}
          onSave={save}
        />
      )}
    </div>
  );
}
