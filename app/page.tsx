import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

const typeScale = [
  { name: "text-5xl", note: "Name, once per page", className: "text-5xl" },
  { name: "text-4xl", note: "Page-level statement", className: "text-4xl" },
  { name: "text-3xl", note: "Section headings", className: "text-3xl" },
  { name: "text-2xl", note: "Panel headings", className: "text-2xl" },
  { name: "text-xl", note: "Lead paragraphs", className: "text-xl" },
];

const roles = [
  { name: "ink", use: "Text, borders, halftone dots", swatch: "bg-ink" },
  { name: "paper", use: "Page stock", swatch: "bg-paper" },
  { name: "plate", use: "Raised panel fill", swatch: "bg-plate" },
  { name: "brass", use: "Accents, large text, borders", swatch: "bg-brass" },
  { name: "brass-deep", use: "Accents at body size", swatch: "bg-brass-deep" },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Display type against the halftone field — the one loud moment. */}
      <div className="halftone-coarse border-ink border-b-2">
        <Container className="py-section">
          <h1 className="font-display text-5xl">{site.name}</h1>
          <p className="mt-gutter max-w-[62ch] text-xl">
            Design system preview. The hero and navigation replace this page in
            Phase 3 — nothing here is finished copy.
          </p>
        </Container>
      </div>

      <Section id="type" title="Type">
        <p className="mb-gutter max-w-[62ch] text-base">
          Anton sets display sizes and nothing else. Archivo sets every line
          meant to be read, capped near 62 characters.
        </p>
        <dl className="divide-ink border-ink divide-y-2 border-y-2">
          {typeScale.map((step) => (
            <div
              key={step.name}
              className="flex flex-col gap-2 py-4 md:flex-row md:items-baseline md:gap-8"
            >
              <dt className="text-brass-deep w-40 shrink-0 text-sm">
                {step.name}
                <span className="text-ink block">{step.note}</span>
              </dt>
              <dd className={`font-display ${step.className}`}>
                Doomsday operation
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="color" title="Color">
        <ul className="gap-gutter grid sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <li key={role.name}>
              <Panel padded={false}>
                <div
                  className={`border-ink h-20 border-b-2 ${role.swatch}`}
                  aria-hidden
                />
                <div className="p-4">
                  <p className="font-display text-xl">{role.name}</p>
                  <p className="text-sm">{role.use}</p>
                </div>
              </Panel>
            </li>
          ))}
        </ul>
      </Section>

      {/* Panels differ in size on purpose: a comic page, not a card grid. */}
      <Section id="panels" title="Panels">
        <div className="gap-gutter grid lg:grid-cols-3">
          <Panel tone="ink" className="lg:col-span-2">
            <h3 className="font-display text-2xl">Inked panel</h3>
            <p className="mt-2 max-w-[62ch] text-base">
              Reserved for the single most important block in a view. Taking two
              columns is the point — panel size carries importance.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-display text-2xl">Plate</h3>
            <p className="mt-2 text-base">The default fill.</p>
          </Panel>
          <Panel tone="paper" className="halftone">
            <h3 className="font-display text-2xl">Paper</h3>
            <p className="mt-2 text-base">
              Page stock, so only the border reads. Shown here with the halftone
              field applied.
            </p>
          </Panel>
          <Panel className="lg:col-span-2">
            <h3 className="font-display text-2xl">Gutters</h3>
            <p className="mt-2 max-w-[62ch] text-base">
              One spacing value separates panels and sets the page margin, so
              panels align with the edge of the page.
            </p>
          </Panel>
        </div>
      </Section>

      <Section id="controls" title="Controls">
        <p className="mb-gutter max-w-[62ch] text-base">
          At rest a control casts a printed shadow. Hover lifts it off the page;
          pressing pushes it flat into the shadow&rsquo;s place.
        </p>
        <div className="gap-gutter flex flex-wrap items-center">
          <ButtonLink href={site.githubUrl} rel="noreferrer noopener">
            Visit GitHub profile
          </ButtonLink>
          <Button variant="outline">Secondary action</Button>
          <Button variant="quiet">Tertiary action</Button>
          <Button size="sm" variant="outline">
            Small
          </Button>
        </div>
      </Section>
    </main>
  );
}
