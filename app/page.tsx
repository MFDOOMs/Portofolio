import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {site.name}
      </h1>
      <p className="text-base opacity-70">
        Portfolio in development — sections are being added incrementally.
      </p>
      <a
        className="text-sm underline underline-offset-4 hover:opacity-70"
        href={site.githubUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        github.com/{site.githubUsername}
      </a>
    </main>
  );
}
