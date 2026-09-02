import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { about } from "@/lib/about";

/**
 * About: the prose introduction and the reference details beside it.
 *
 * The two blocks are deliberately unequal — the panel of facts is a sidebar
 * to the reading column, not a second column of equal weight, which is how a
 * comic page carries a caption box next to a wide frame.
 */
export function About() {
  return (
    <Section id="about" title="About">
      <div className="gap-gutter grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-gutter max-w-[62ch] text-lg last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <Panel>
          <h3 className="font-display border-ink mb-4 border-b-2 pb-2 text-xl">
            At a glance
          </h3>
          <dl className="divide-ink divide-y-2">
            {about.facts.map((fact) => (
              <div key={fact.label} className="py-3 first:pt-0 last:pb-0">
                <dt className="text-brass-deep text-xs font-semibold uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Panel>
      </div>
    </Section>
  );
}
