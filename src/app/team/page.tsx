import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "Executive Team",
  description:
    "Meet the executive committee of the IEEE MTT-S Rwanda Chapter.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Executive committee"
        subtitle="The volunteers who lead the chapter's activities."
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the chapter"
            subtitle="Chapter officers are IEEE MTT-S members serving Rwanda&apos;s microwave and RF community."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.role} delay={i * 80}>
              <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5">
                {member.photo ? (
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-ieee-blue">
                    <div className="dot-grid absolute inset-0 opacity-30" />
                    <span className="relative font-display text-4xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-display font-semibold tracking-tight text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-widest text-ieee-blue">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    {member.affiliation}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-ieee-blue hover:underline"
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-surface">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ieee-blue px-8 py-14 text-center md:px-14">
            <div className="dot-grid absolute inset-0 opacity-25" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Want to volunteer?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                The chapter is run by volunteers. If you&apos;d like to help
                organize events, mentor students, or contribute your
                expertise, we&apos;d love to hear from you.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-lg bg-white px-6 py-3.5 font-semibold text-ieee-blue transition hover:bg-slate-100"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
