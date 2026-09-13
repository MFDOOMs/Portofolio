import { cn } from "@/lib/cn";

const tones = {
  /** Raised fill — the default panel, sits above the page stock. */
  plate: "bg-plate text-ink",
  /** Same stock as the page; use when only the border should read. */
  paper: "bg-paper text-ink",
  /** Inked panel — reserved for the single most important block on a page. */
  ink: "bg-ink text-paper",
} as const;

type PanelTone = keyof typeof tones;

type PanelProps = React.ComponentProps<"div"> & {
  tone?: PanelTone;
  /** Applies the standard panel inset. Turn off for edge-to-edge content. */
  padded?: boolean;
};

/**
 * A comic panel: square corners, heavy ink border, no shadow of its own.
 * Panels are meant to differ in size across a page — importance is carried by
 * how much room a panel takes, so avoid laying them out as a uniform grid.
 */
export function Panel({
  tone = "plate",
  padded = true,
  className,
  ...props
}: PanelProps) {
  return (
    <div
      className={cn(
        "border-ink border-2",
        tones[tone],
        padded && "p-panel",
        className,
      )}
      {...props}
    />
  );
}
