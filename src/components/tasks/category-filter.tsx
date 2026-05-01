"use client";

import { CATEGORY_OPTIONS } from "@/lib/categories";

type Props = {
  normalizedCategory: string;
  className?: string;
};

export function CategoryFilter({ normalizedCategory, className }: Props) {
  return (
    <div className={className}>
      <select
        name="category"
        defaultValue={normalizedCategory}
        onChange={(e) => {
          const value = e.target.value;
          const url = new URL(window.location.href);
          if (value === "all") {
            url.searchParams.delete("category");
          } else {
            url.searchParams.set("category", value);
          }
          window.location.href = url.toString();
        }}
        className="h-11 w-full rounded-xl border border-border bg-white/80 px-3 text-sm text-foreground"
      >
        <option value="all">All categories</option>
        {CATEGORY_OPTIONS.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
