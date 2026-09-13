import { ButtonLink } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { TagList } from "@/components/ui/TagList";
import { getGitHubData, type GitHubProfile, type Repo } from "@/lib/github";
import { site } from "@/lib/site";

const newTab = { target: "_blank", rel: "noreferrer noopener" } as const;

// Rendered on the server only; the fixed locale and UTC zone keep the output
// the same on every build.
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

/**
 * GitHub: every public repository, read from the GitHub API on the server.
 *
 * Stars and follower counts are left out on purpose. They measure audience,
 * not work, and the section is here to show the work.
 *
 * There is deliberately no <Suspense> boundary. The data is cached and the
 * page prerendered, so no visitor ever waits on it; a boundary would only make
 * the prerender ship a placeholder in place and move the real list behind a
 * script, where anything that doesn't run JavaScript never sees it.
 */
export function GitHub() {
  return (
    <Section id="github" title="GitHub">
      <GitHubContent />
    </Section>
  );
}

async function GitHubContent() {
  const data = await getGitHubData();

  if (data.status === "error") {
    return (
      <Notice title="GitHub isn’t responding">
        The repository list couldn’t be loaded from GitHub just now. The profile
        itself has everything in the meantime.
      </Notice>
    );
  }

  if (data.repos.length === 0) {
    return (
      <Notice title="No public repositories yet">
        New public repositories will appear here on their own.
      </Notice>
    );
  }

  return (
    <div className="gap-gutter grid lg:grid-cols-3">
      <span id="github-new-tab" hidden>
        Opens in a new tab
      </span>
      <ul className="gap-gutter grid sm:grid-cols-2 lg:col-span-2">
        {data.repos.map((repo) => (
          <li key={repo.name}>
            <RepoCard repo={repo} />
          </li>
        ))}
      </ul>

      <aside aria-labelledby="github-profile-heading" className="lg:self-start">
        <ProfilePanel profile={data.profile} repos={data.repos} />
      </aside>
    </div>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Panel className="flex h-full flex-col">
      {/* Repository names are long unbroken strings; let them wrap anywhere. */}
      {/* The new-tab notice is a description, not part of the link text, so
          the heading reads as just the repository name in a screen reader's
          list of headings. */}
      <h3 className="font-display text-xl [overflow-wrap:anywhere]">
        <a
          href={repo.url}
          aria-describedby="github-new-tab"
          className="decoration-brass decoration-2 underline-offset-4 hover:underline"
          {...newTab}
        >
          {repo.name}
        </a>
      </h3>

      {repo.description ? <p className="mt-2">{repo.description}</p> : null}

      <p className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4 text-sm">
        {repo.language ? (
          <span className="font-semibold">{repo.language}</span>
        ) : null}
        <span>
          Updated{" "}
          <time dateTime={repo.pushedAt}>
            {shortMonth.format(new Date(repo.pushedAt))}
          </time>
        </span>
      </p>
    </Panel>
  );
}

/** Languages across the repositories, most used first. */
function languagesByUse(repos: readonly Repo[]) {
  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (repo.language) {
      counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
  }
  return [...counts]
    .sort(([a, countA], [b, countB]) => countB - countA || a.localeCompare(b))
    .map(([language]) => language);
}

function ProfilePanel({
  profile,
  repos,
}: {
  profile: GitHubProfile;
  repos: readonly Repo[];
}) {
  const languages = languagesByUse(repos);

  return (
    <Panel>
      <h3
        id="github-profile-heading"
        className="font-display border-ink mb-4 border-b-2 pb-2 text-xl"
      >
        @{profile.login}
      </h3>
      <dl className="divide-ink divide-y-2">
        <div className="pb-3">
          <dt className="text-brass-deep text-xs font-semibold uppercase">
            Public repositories
          </dt>
          <dd className="mt-1">{repos.length}</dd>
        </div>
        <div className="pt-3">
          <dt className="text-brass-deep text-xs font-semibold uppercase">
            On GitHub since
          </dt>
          <dd className="mt-1">
            <time dateTime={profile.createdAt}>
              {longMonth.format(new Date(profile.createdAt))}
            </time>
          </dd>
        </div>
      </dl>

      {languages.length > 0 ? (
        <>
          <h4 className="text-brass-deep mt-6 mb-2 text-xs font-semibold uppercase">
            Languages
          </h4>
          <TagList items={languages} />
        </>
      ) : null}

      <ButtonLink
        href={profile.url}
        variant="outline"
        size="sm"
        className="mt-6"
        {...newTab}
      >
        View profile
        <span className="sr-only"> on GitHub (opens in a new tab)</span>
      </ButtonLink>

      <p className="mt-4 text-xs">
        Read from the GitHub API and refreshed at most once an hour.
      </p>
    </Panel>
  );
}

/** The failure and empty states: say what happened, keep a way forward. */
function Notice({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Panel className="max-w-[62ch]">
      <h3 className="font-display text-2xl">{title}</h3>
      <p className="mt-2">{children}</p>
      <ButtonLink
        href={site.githubUrl}
        variant="outline"
        size="sm"
        className="mt-4"
        {...newTab}
      >
        View GitHub profile
        <span className="sr-only"> (opens in a new tab)</span>
      </ButtonLink>
    </Panel>
  );
}
