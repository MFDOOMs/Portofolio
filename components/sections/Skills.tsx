import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { cn } from "@/lib/cn";
import { skills, type SkillGroup } from "@/lib/skills";

/**
 * Skills: what Tristan works with, grouped by what it is for.
 *
 * There are no proficiency bars or ratings. A self-assigned percentage cannot
 * be checked by the reader, so the section lists tools and leaves the evidence
 * to the projects.
 *
 * Panels alternate narrow and wide across the two rows, so the grid reads as
 * one composed page rather than four identical cards.
 */
export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="gap-gutter grid md:grid-cols-2 lg:grid-cols-3">
        <SkillPanel group={skills.languages} />
        <SkillPanel group={skills.machineLearning} className="lg:col-span-2" />
        <SkillPanel group={skills.tools} className="lg:col-span-2" />
        <SkillPanel group={skills.foundations} />
      </div>
    </Section>
  );
}

function SkillPanel({
  group,
  className,
}: {
  group: SkillGroup;
  className?: string;
}) {
  return (
    <Panel className={cn("flex flex-col", className)}>
      <h3 className="font-display border-ink mb-4 border-b-2 pb-2 text-xl">
        {group.title}
      </h3>
      <TagList items={group.items} />
    </Panel>
  );
}
