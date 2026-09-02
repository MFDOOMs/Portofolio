import { cn } from "@/lib/cn";

const variants = {
  /** Primary action — one per view. */
  solid: "border-2 border-ink bg-ink text-paper shadow-hard-sm",
  /** Secondary action — same weight of border, no fill. */
  outline: "border-2 border-ink bg-transparent text-ink shadow-hard-sm",
  /** Tertiary — reads as text, keeps a real hit area. */
  quiet:
    "border-2 border-transparent text-ink underline decoration-2 underline-offset-4 hover:decoration-brass",
} as const;

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
} as const;

/**
 * Press behaviour is a physical model, not decoration: at rest the control
 * casts a small printed shadow, hover lifts it away from the page, and press
 * pushes it flat into the spot the shadow occupied.
 */
const pressable =
  "hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard " +
  "active:translate-x-[1px] active:translate-y-[1px] active:shadow-none";

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(
    "inline-flex items-center justify-center font-semibold transition",
    sizes[size],
    variants[variant],
    variant !== "quiet" && pressable,
    className,
  );
}

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "solid",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

type ButtonLinkProps = React.ComponentProps<"a"> & {
  variant?: Variant;
  size?: Size;
};

/**
 * Anchor styled as a control. Use for navigation — including in-page hash
 * links and external links — so the element matches what it actually does.
 */
export function ButtonLink({
  variant = "solid",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={buttonClasses(variant, size, className)} {...props} />;
}
