import { cn } from "@/lib/cn";

type TagListProps = React.ComponentProps<"ul"> & {
  items: readonly string[];
};

/**
 * A row of labels stuck onto a panel: square, ink-bordered, on paper fill so
 * each one reads against the raised plate behind it. Wraps rather than
 * scrolls, since every label is meant to be seen.
 */
export function TagList({ items, className, ...props }: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} {...props}>
      {items.map((item) => (
        <li
          key={item}
          className="border-ink bg-paper border-2 px-2.5 py-1 text-sm font-semibold"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
