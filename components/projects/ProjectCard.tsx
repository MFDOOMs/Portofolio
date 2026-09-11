import { ButtonLink } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { TagList } from "@/components/ui/TagList";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/projects";

const newTab = { target: "_blank", rel: "noreferrer noopener" } as const;

/**
 * One project, read top to bottom in the order a reviewer asks: what is it,
 * what did he do, what did it achieve, where are its limits, what is it built
 * with, and where is the code.
 *
 * A featured project spans the full width, so its story and its evidence sit
 * side by side; every other project stacks them, and its links settle to the
 * bottom so buttons line up across a row of cards.
 */
export function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured ?? false;
  const headingId = `project-${project.slug}`;

  return (
    <Panel className={cn(featured && "shadow-hard")}>
      <article
        aria-labelledby={headingId}
        className={cn(
          "gap-panel",
          featured ? "grid lg:grid-cols-[3fr_2fr]" : "flex h-full flex-col",
        )}
      >
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="bg-ink text-paper px-2 py-0.5 text-xs font-semibold uppercase">
              {project.category}
            </span>
            <span>
              {project.context} · {project.year}
            </span>
          </p>

          <h3
            id={headingId}
            className={cn(
              "font-display mt-4",
              featured ? "text-4xl" : "text-2xl",
            )}
          >
            {project.title}
          </h3>

          <p
            className={cn(
              "mt-3 max-w-[62ch]",
              featured ? "text-lg" : "text-base",
            )}
          >
            {project.summary}
          </p>

          {project.role ? (
            <p className="mt-3 max-w-[62ch]">
              <span className="text-brass-deep font-semibold">My part: </span>
              {project.role}
            </p>
          ) : null}

          <ul className="marker:text-brass mt-4 grid max-w-[62ch] list-[square] gap-2 pl-5">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className={cn("flex flex-col gap-5", !featured && "mt-auto")}>
          {project.caveat ? (
            <Panel tone="ink">
              <h4 className="font-display text-xl">What it can’t do</h4>
              <p className="mt-2">{project.caveat}</p>
            </Panel>
          ) : null}

          <div>
            <h4 className="text-brass-deep mb-2 text-xs font-semibold uppercase">
              Built with
            </h4>
            <TagList items={project.tech} />
          </div>

          <div className="flex flex-wrap gap-3">
            {project.demoUrl ? (
              <ButtonLink href={project.demoUrl} size="sm" {...newTab}>
                Live demo
                <span className="sr-only">
                  : {project.title} (opens in a new tab)
                </span>
              </ButtonLink>
            ) : null}
            {project.repos.map((repo) => (
              <ButtonLink
                key={repo.href}
                href={repo.href}
                variant="outline"
                size="sm"
                {...newTab}
              >
                {repo.label}
                <span className="sr-only">
                  : {project.title} (opens in a new tab)
                </span>
              </ButtonLink>
            ))}
          </div>
        </div>
      </article>
    </Panel>
  );
}
