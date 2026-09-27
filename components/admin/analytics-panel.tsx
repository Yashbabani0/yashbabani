import { useState } from "react";
import { traffic, sources, popularPages } from "./demo-data";

export default function AnalyticsPanel() {
  const [period, setPeriod] = useState("6");
  const visible = traffic.slice(-Number(period));
  function download() {
    const blob = new Blob(
      [
        "Month,Demo traffic index\n" +
          visible.map((item) => `${item.month},${item.value}`).join("\n"),
      ],
      { type: "text/csv;charset=utf-8" },
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "demo-traffic-report.csv";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <div className="flex gap-3">
          <select
            aria-label="Report period"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-lg border bg-transparent p-2"
          >
            <option value="6">Last 6 months</option>
            <option value="3">Last 3 months</option>
          </select>
          <button onClick={download} className="rounded-lg border px-3 py-2">
            Export CSV
          </button>
        </div>
      </div>
      <section className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
        <h2 className="font-semibold">Traffic index · sample report</h2>
        <div className="mt-6 flex h-64 items-end gap-4">
          {visible.map((item) => (
            <div
              key={item.month}
              className="flex h-full flex-1 flex-col justify-end gap-2 text-center"
            >
              <span className="text-sm">{item.value}</span>
              <div
                style={{ height: `${item.value * 2}px` }}
                className="rounded-t-lg bg-black dark:bg-white"
              />
              <span className="text-sm text-neutral-500">{item.month}</span>
            </div>
          ))}
        </div>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Traffic sources",
            rows: sources.map((item) => [item.source, item.value]),
          },
          {
            title: "Popular pages",
            rows: popularPages.map((item) => [item.page, item.views]),
          },
        ].map((group) => (
          <section
            key={group.title}
            className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900"
          >
            <h2 className="font-semibold">{group.title}</h2>
            <dl className="mt-4 space-y-4">
              {group.rows.map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <dt>{label}</dt>
                  <dd className="text-neutral-500">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
