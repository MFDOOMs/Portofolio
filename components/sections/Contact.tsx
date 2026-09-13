import { ButtonLink } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { Panel } from "@/components/ui/Panel";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

const newTab = { target: "_blank", rel: "noreferrer noopener" } as const;

/** The profile handle at the end of the LinkedIn URL, shown as link text. */
const linkedinHandle = new URL(site.linkedinUrl).pathname
  .split("/")
  .filter(Boolean)
  .at(-1);

/**
 * Contact: the email address at display size, because it is what a visitor
 * scrolls to the bottom of the page to find, with the other channels beside it.
 *
 * The address is plain, selectable text rather than a link, so it can be
 * copied by hand; sending and copying each have their own button. Only
 * channels Tristan has provided are listed, and the phone number on his CV is
 * deliberately left off the public page.
 */
export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="gap-gutter grid lg:grid-cols-3">
        <Panel className="shadow-hard lg:col-span-2">
          <p className="max-w-[62ch] text-lg">
            Email me directly, or find me on LinkedIn and GitHub.
          </p>
          <p className="font-display mt-4 text-3xl [overflow-wrap:anywhere] sm:text-4xl">
            {site.email}
          </p>
          <div className="mt-panel flex flex-wrap items-center gap-3">
            <ButtonLink href={`mailto:${site.email}`}>Send an email</ButtonLink>
            <CopyButton
              value={site.email}
              label="Copy address"
              copiedMessage="Email address copied to the clipboard."
            />
          </div>
        </Panel>

        <Panel className="lg:self-start">
          <h3 className="font-display border-ink mb-4 border-b-2 pb-2 text-xl">
            Elsewhere
          </h3>
          <dl className="divide-ink divide-y-2">
            <div className="pb-3">
              <dt className="text-brass-deep text-xs font-semibold uppercase">
                LinkedIn
              </dt>
              <dd className="mt-1">
                <a
                  href={site.linkedinUrl}
                  className="decoration-brass [overflow-wrap:anywhere] underline decoration-2 underline-offset-4"
                  {...newTab}
                >
                  {linkedinHandle}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div className="py-3">
              <dt className="text-brass-deep text-xs font-semibold uppercase">
                GitHub
              </dt>
              <dd className="mt-1">
                <a
                  href={site.githubUrl}
                  className="decoration-brass underline decoration-2 underline-offset-4"
                  {...newTab}
                >
                  @{site.githubUsername}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
            <div className="py-3">
              <dt className="text-brass-deep text-xs font-semibold uppercase">
                Based in
              </dt>
              <dd className="mt-1">{site.location}</dd>
            </div>
            <div className="pt-3">
              <dt className="text-brass-deep text-xs font-semibold uppercase">
                Time zone
              </dt>
              <dd className="mt-1">WIB (UTC+7)</dd>
            </div>
          </dl>
        </Panel>
      </div>
    </Section>
  );
}
