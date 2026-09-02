import { cn } from "@/lib/cn";

/**
 * Page-width constraint. Horizontal padding equals the panel gutter so panels
 * inside a container line up with the page margin.
 */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-gutter mx-auto w-full max-w-6xl", className)}
      {...props}
    />
  );
}
