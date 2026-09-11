import { site } from "@/lib/site";

const API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

export type Repo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  /** ISO timestamp of the latest push. */
  pushedAt: string;
};

export type GitHubProfile = {
  login: string;
  url: string;
  /** ISO timestamp the account was created. */
  createdAt: string;
};

export type GitHubData =
  | { status: "ok"; profile: GitHubProfile; repos: readonly Repo[] }
  | { status: "error" };

/** The subset of the API's fields this module reads. */
type ApiUser = { login: string; html_url: string; created_at: string };
type ApiRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  private: boolean;
};

function requestHeaders(): HeadersInit {
  // Server-only: without a NEXT_PUBLIC_ prefix, Next.js never inlines this
  // into browser JavaScript. Optional; it only raises GitHub's rate limit.
  const token = process.env.GITHUB_TOKEN;

  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": `${site.githubUsername}-portfolio`,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API}${path}`, {
    headers: requestHeaders(),
    // Stated explicitly: a request carrying an Authorization header is not
    // cached unless it opts in.
    cache: "force-cache",
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${path} responded ${response.status}`);
  }

  return (await response.json()) as T;
}

/**
 * Public profile and repositories for the GitHub section, fetched on the
 * server.
 *
 * Responses are cached for an hour: the page is prerendered with them and
 * rebuilt in the background at most once an hour, so visitors never wait on
 * GitHub and traffic never spends its rate limit. Only public, non-fork
 * repositories are kept, and only the fields the page shows.
 *
 * Never throws. A GitHub outage, rate limit, or malformed response resolves to
 * `{ status: "error" }` so the section can say so instead of breaking the page.
 */
export async function getGitHubData(): Promise<GitHubData> {
  const user = site.githubUsername;

  try {
    const [profile, repos] = await Promise.all([
      getJson<ApiUser>(`/users/${user}`),
      getJson<ApiRepo[]>(
        `/users/${user}/repos?type=owner&sort=pushed&per_page=100`,
      ),
    ]);

    return {
      status: "ok",
      profile: {
        login: profile.login,
        url: profile.html_url,
        createdAt: profile.created_at,
      },
      repos: repos
        .filter((repo) => !repo.private && !repo.fork)
        .map((repo) => ({
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          language: repo.language,
          pushedAt: repo.pushed_at,
        })),
    };
  } catch (error) {
    console.error("GitHub section is showing its fallback:", error);
    return { status: "error" };
  }
}
