import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionProps = React.ComponentProps<"section"> & {
  /** Rendered as the section heading and linked to the section for a11y. */
  title?: string;
};

/**
 * Vertical rhythm for a page section, plus the heading treatment.
 *
 * The heading sits directly on the stock with a rule beneath it — no eyebrow
 * label above it, and no panel around it, so panels stay reserved for content.
 */
export function Section({
  id,
  title,
  className,
  children,
  ...props
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn("py-section", className)}
      {...props}
    >
      <Container>
        {title ? (
          <h2
            id={headingId}
            className="font-display mb-gutter border-ink border-b-2 pb-3 text-3xl"
          >
            {title}
          </h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
