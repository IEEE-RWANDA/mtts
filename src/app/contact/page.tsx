import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the IEEE MTT-S Rwanda Chapter.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Questions about membership, events, or partnerships? We'd love to hear from you."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Reach out" title="Contact details" />
            <ul className="space-y-6">
              <li>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block font-display text-xl font-semibold tracking-tight text-ink transition-colors hover:text-ieee-blue"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  Location
                </span>
                <span className="mt-1 block font-display text-xl font-semibold tracking-tight text-ink">
                  {site.host}
                </span>
                <span className="text-slate-500">{site.city}</span>
              </li>
              <li>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  Social
                </span>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-ieee-blue hover:underline"
                >
                  IEEE Rwanda MTTS/ComSoc/AP-S Chapter →
                </a>
              </li>
            </ul>
            <p className="mt-10 text-sm text-slate-500">
              For IEEE membership account issues, contact IEEE directly via{" "}
              <a
                href="https://www.ieee.org/about/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ieee-blue hover:underline"
              >
                ieee.org
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Partnerships"
              title="Work with the chapter"
            />
            <p className="leading-relaxed text-slate-600">
              We partner with universities, telecom operators, regulators, and
              tech companies on events, training, and outreach. If your
              organization would like to host a talk, sponsor a workshop, or
              collaborate on a program, email us. We typically respond within
              a few days.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-surface p-7">
              <h3 className="font-display font-semibold tracking-tight text-ink">
                Speaking opportunities
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Are you a researcher or practitioner in communications who
                wants to present to the community? We welcome proposals for
                technical talks and tutorials.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
