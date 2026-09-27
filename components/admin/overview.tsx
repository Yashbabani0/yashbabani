import {
  ArrowDownRight,
  ArrowUpRight,
  Box,
  Download,
  FileText,
  Gamepad2,
  Globe2,
  MousePointerClick,
  Package,
  Plus,
} from "lucide-react";
import { stats, traffic, sources, popularPages } from "./demo-data";
import type { AdminRecord, ContentType, Section } from "./types";
export default function Overview({
  records,
  activity,
  onCreate,
  onNavigate,
}: {
  records: AdminRecord[];
  activity: string[];
  onCreate: (type: ContentType) => void;
  onNavigate: (section: Section) => void;
}) {
  const content = records
    .slice(0, 4)
    .map((item) => ({
      ...item,
      updated: item.updated,
      views: item.views.toLocaleString(),
    }));
  const assets = records
    .filter((item) => item.type === "Asset")
    .map((item) => ({ ...item, name: item.title }));
  return (
    <main className="space-y-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-neutral-500">Portfolio performance</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Dashboard overview
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <QuickAction
              icon={FileText}
              label="New blog"
              onClick={() => onCreate("Blog")}
            />
            <QuickAction
              icon={Box}
              label="New project"
              onClick={() => onCreate("Project")}
            />
            <QuickAction
              icon={Gamepad2}
              label="New game"
              onClick={() => onCreate("Game")}
            />
            <QuickAction
              icon={Package}
              label="New asset"
              onClick={() => onCreate("Asset")}
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
                    <Icon size={17} />
                  </div>

                  <span
                    className={`flex items-center gap-1 text-xs ${
                      stat.positive ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {stat.positive ? (
                      <ArrowUpRight size={13} />
                    ) : (
                      <ArrowDownRight size={13} />
                    )}
                    {stat.change}
                  </span>
                </div>

                <p className="mt-5 text-2xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <section className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-neutral-900 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">Traffic</h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Visitors over the last 6 months
                </p>
              </div>

              <button
                onClick={() => onNavigate("Analytics")}
                className="text-sm text-neutral-500 hover:text-black dark:hover:text-white"
              >
                View report
              </button>
            </div>

            <div className="mt-8 flex h-64 items-end gap-3 sm:gap-6">
              {traffic.map((item) => (
                <div
                  key={item.month}
                  className="flex flex-1 flex-col items-center gap-3"
                >
                  <div className="flex h-52 w-full items-end rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
                    <div
                      style={{ height: `${item.value}%` }}
                      className="w-full rounded-md bg-black dark:bg-white"
                    />
                  </div>

                  <span className="text-xs text-neutral-500">{item.month}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-neutral-900 sm:p-6">
            <div>
              <h2 className="font-semibold">Traffic sources</h2>
              <p className="mt-1 text-sm text-neutral-500">
                Where visitors come from
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {sources.map((source) => (
                <div key={source.source}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{source.source}</span>
                    <span className="text-neutral-500">{source.value}</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <div
                      className="h-full rounded-full bg-black dark:bg-white"
                      style={{ width: source.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <section className="overflow-hidden rounded-2xl border border-black/5 bg-white dark:border-white/10 dark:bg-neutral-900">
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-5 dark:border-white/10 sm:px-6">
              <div>
                <h2 className="font-semibold">Content</h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Recently updated content
                </p>
              </div>

              <button
                onClick={() => onNavigate("Content")}
                className="text-sm text-neutral-500 hover:text-black dark:hover:text-white"
              >
                Manage all
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead>
                  <tr className="border-b border-black/5 text-xs uppercase tracking-wider text-neutral-500 dark:border-white/10">
                    <th className="px-6 py-4 font-medium">Title</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Views</th>
                    <th className="px-6 py-4 font-medium">Updated</th>
                  </tr>
                </thead>

                <tbody>
                  {content.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-black/5 last:border-0 dark:border-white/10"
                    >
                      <td className="px-6 py-4 text-sm font-medium">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-500">
                        {item.type}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-500">
                        {item.views}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-500">
                        {item.updated}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-neutral-900 sm:p-6">
            <div>
              <h2 className="font-semibold">Popular pages</h2>
              <p className="mt-1 text-sm text-neutral-500">
                Most visited portfolio pages
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {popularPages.map((item) => (
                <div key={item.page}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-mono">{item.page}</span>
                    <span className="text-neutral-500">{item.views}</span>
                  </div>

                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className="h-full rounded-full bg-black dark:bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 overflow-hidden rounded-2xl border border-black/5 bg-white dark:border-white/10 dark:bg-neutral-900">
          <div className="flex flex-col gap-4 border-b border-black/5 px-5 py-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="font-semibold">Game assets</h2>
              <p className="mt-1 text-sm text-neutral-500">
                Downloads, file sizes, and publication status
              </p>
            </div>

            <button
              onClick={() => onCreate("Asset")}
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              <Plus size={15} />
              Add asset
            </button>
          </div>

          <div className="grid divide-y divide-black/5 dark:divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            <MetricSmall
              icon={Package}
              label="Total Assets"
              value={String(assets.length)}
            />
            <MetricSmall
              icon={Download}
              label="Total Downloads"
              value={assets
                .reduce((sum, asset) => sum + asset.downloads, 0)
                .toLocaleString()}
            />
            <MetricSmall
              icon={MousePointerClick}
              label="Download Rate"
              value="18.2%"
            />
            <MetricSmall icon={Globe2} label="Countries" value="37" />
          </div>

          <div className="overflow-x-auto border-t border-black/5 dark:border-white/10">
            <table className="w-full min-w-[750px] text-left">
              <thead>
                <tr className="border-b border-black/5 text-xs uppercase tracking-wider text-neutral-500 dark:border-white/10">
                  <th className="px-6 py-4 font-medium">Asset</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Downloads</th>
                  <th className="px-6 py-4 font-medium">File Size</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {assets.map((asset) => (
                  <tr
                    key={asset.id}
                    className="border-b border-black/5 last:border-0 dark:border-white/10"
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      {asset.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-500">
                      {asset.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-500">
                      {asset.downloads}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-500">
                      {asset.size}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={asset.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="font-semibold">Devices</h2>
            <p className="mt-1 text-sm text-neutral-500">
              Visitor device distribution
            </p>

            <div className="mt-6 space-y-4">
              <SimpleMetric label="Desktop" value="71%" />
              <SimpleMetric label="Mobile" value="25%" />
              <SimpleMetric label="Tablet" value="4%" />
            </div>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="font-semibold">Content summary</h2>
            <p className="mt-1 text-sm text-neutral-500">
              Published portfolio content
            </p>

            <div className="mt-6 space-y-4">
              <SimpleMetric
                label="Blog posts"
                value={String(
                  records.filter(
                    (item) =>
                      item.type === "Blog" && item.status === "Published",
                  ).length,
                )}
              />
              <SimpleMetric
                label="Projects"
                value={String(
                  records.filter(
                    (item) =>
                      item.type === "Project" && item.status === "Published",
                  ).length,
                )}
              />
              <SimpleMetric
                label="Games"
                value={String(
                  records.filter(
                    (item) =>
                      item.type === "Game" && item.status === "Published",
                  ).length,
                )}
              />
              <SimpleMetric
                label="Assets"
                value={String(
                  records.filter(
                    (item) =>
                      item.type === "Asset" && item.status === "Published",
                  ).length,
                )}
              />
            </div>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="font-semibold">Recent activity</h2>
            <p className="mt-1 text-sm text-neutral-500">
              Latest admin changes
            </p>

            <div className="mt-6 space-y-5">
              {activity.length ? (
                activity
                  .slice(0, 5)
                  .map((entry, index) => (
                    <ActivityRow
                      key={index}
                      title={entry}
                      detail="This session"
                      time="Now"
                    />
                  ))
              ) : (
                <p className="text-sm text-neutral-500">
                  No changes in this session yet.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
function QuickAction({
  icon: Icon,
  label,
  onClick,
}: {
  icon: typeof FileText;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm transition-colors hover:bg-neutral-100 dark:border-white/10 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      <Icon size={15} />
      {label}
    </button>
  );
}

function StatusBadge({ status }: { status: string }) {
  const published = status === "Published";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        published
          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800"
      }`}
    >
      {status}
    </span>
  );
}

function MetricSmall({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Package;
  label: string;
  value: string;
}) {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 text-neutral-500">
        <Icon size={15} />
        <span className="text-xs uppercase tracking-wider">{label}</span>
      </div>
      <p className="mt-3 text-xl font-semibold">{value}</p>
    </div>
  );
}

function SimpleMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-neutral-500">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function ActivityRow({
  title,
  detail,
  time,
}: {
  title: string;
  detail: string;
  time: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 size-2 shrink-0 rounded-full bg-black dark:bg-white" />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="truncate text-xs text-neutral-500">{detail}</p>
      </div>

      <span className="text-xs text-neutral-400">{time}</span>
    </div>
  );
}
