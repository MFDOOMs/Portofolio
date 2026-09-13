import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { cn } from "@/lib/cn";
import { leadership, type Role } from "@/lib/leadership";

// Rendered on the server only, so the fixed locale and UTC zone make the output
// the same on every build regardless of the machine's settings.
const shortMonth = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});
const longMonth = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function toDate(isoMonth: string) {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1));
}

// ISO year-months sort as plain strings, so the smallest is the earliest.
const firstStart = leadership.roles
  .map((role) => role.start)
  .reduce((earliest, start) => (start < earliest ? start : earliest));

/**
 * Leadership: roles newest first, the current one across the full width so
 * the progression from staff to mentor to head reads from the layout. The
 * side panel carries the context every role shares, so no card repeats it.
 */
export function Leadership() {
  return (
    <Section id="leadership" title="Leadership">
      <div className="gap-gutter grid lg:grid-cols-3">
        <ol className="gap-gutter grid md:grid-cols-2 lg:col-span-2">
          {leadership.roles.map((role) => (
            <li key={role.slug} className={cn(!role.end && "md:col-span-2")}>
              <RoleCard role={role} />
            </li>
          ))}
        </ol>

        <aside
          aria-labelledby="leadership-context-heading"
          className="lg:self-start"
        >
          <Panel>
            <h3
              id="leadership-context-heading"
              className="font-display border-ink mb-4 border-b-2 pb-2 text-xl"
            >
              At HIMATIF
            </h3>
            <dl className="divide-ink divide-y-2">
              <div className="pb-3">
                <dt className="text-brass-deep text-xs font-semibold uppercase">
                  Organization
                </dt>
                <dd className="mt-1">{leadership.organization}</dd>
              </div>
              <div className="py-3">
                <dt className="text-brass-deep text-xs font-semibold uppercase">
                  Program
                </dt>
                <dd className="mt-1">{leadership.program}</dd>
              </div>
              <div className="pt-3">
                <dt className="text-brass-deep text-xs font-semibold uppercase">
                  Involved since
                </dt>
                <dd className="mt-1">
                  <time dateTime={firstStart}>
                    {longMonth.format(toDate(firstStart))}
                  </time>
                </dd>
              </div>
            </dl>

            <h3 className="text-brass-deep mt-6 mb-2 text-xs font-semibold uppercase">
              Soft skills
            </h3>
            <TagList items={leadership.softSkills} />
          </Panel>
        </aside>
      </div>
    </Section>
  );
}

function RoleCard({ role }: { role: Role }) {
  const current = !role.end;
  const headingId = `role-${role.slug}`;

  return (
    <Panel className={cn("h-full", current && "shadow-hard")}>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        {current ? (
          <span className="bg-ink text-paper px-2 py-0.5 text-xs font-semibold uppercase">
            Current
          </span>
        ) : null}
        <span>
          <time dateTime={role.start}>
            {shortMonth.format(toDate(role.start))}
          </time>
          {" – "}
          {role.end ? (
            <time dateTime={role.end}>
              {shortMonth.format(toDate(role.end))}
            </time>
          ) : (
            "Present"
          )}
          {` · ${role.org}`}
        </span>
      </p>

      <h3
        id={headingId}
        className={cn("font-display mt-4", current ? "text-4xl" : "text-2xl")}
      >
        {role.title}
      </h3>

      <ul
        aria-labelledby={headingId}
        className="marker:text-brass mt-4 grid max-w-[62ch] list-[square] gap-2 pl-5"
      >
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </Panel>
  );
}
