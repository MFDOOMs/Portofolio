import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/projects";

const featured = projects.filter((project) => project.featured);
const others = projects.filter((project) => !project.featured);

/**
 * Projects: the featured project across the full width, then the rest in an
 * unequal two-column grid, so importance reads from size before any text.
 *
 * The grid's columns alternate wide and narrow on their own, so adding a
 * project to `lib/projects.ts` needs no layout change here.
 */
export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="gap-gutter grid">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        <div className="gap-gutter grid lg:grid-cols-[3fr_2fr]">
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
