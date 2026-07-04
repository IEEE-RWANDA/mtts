import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Why and how to join the IEEE Microwave Theory and Technology Society and the Rwanda Chapter.",
};

const benefits = [
  {
    title: "Publications & research",
    description:
      "IEEE Transactions on Microwave Theory and Techniques, IEEE Microwave Magazine, and discounted access to IEEE Xplore.",
  },
  {
    title: "Conferences & training",
    description:
      "Member rates for the International Microwave Symposium (IMS) and other MTT-S conferences, plus free and discounted webinars.",
  },
  {
    title: "Local community",
    description:
      "Chapter events in Rwanda: technical talks, workshops, and networking with industry and academia.",
  },
  {
    title: "Career development",
    description:
      "Mentorship, MTT-S fellowships and awards, volunteer leadership, and a global professional network.",
  },
];

const steps = [
  {
    step: "01",
    title: "Join IEEE",
    description:
      "Create an IEEE account and choose a membership grade. Student rates are heavily discounted, with reduced pricing for members in Rwanda.",
  },
  {
    step: "02",
    title: "Add MTT-S",
    description:
      "During signup or from your IEEE account, add the Microwave Theory and Technology Society to your membership.",
  },
  {
    step: "03",
    title: "Connect locally",
    description:
      "You're automatically part of the Rwanda Chapter based on your location. Reach out and come to an event.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Join the network"
        subtitle="A global community of microwave and RF professionals, and its home in Rwanda."
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Why join"
            title="Membership benefits"
            subtitle="IEEE MTT-S membership is an investment in your technical career."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5">
                <span className="font-mono text-xs text-slate-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-slate-200 bg-surface">
        <Reveal>
          <SectionHeading
            eyebrow="How to join"
            title="Three simple steps"
          />
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="bg-white p-8">
              <span className="font-mono text-sm text-ieee-blue">
                {s.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.ieee.org/membership/join"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
          >
            Join IEEE →
          </a>
          <a
            href="https://mtt.org/membership/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-6 py-3.5 font-semibold text-ink transition hover:border-slate-400 hover:bg-white"
          >
            IEEE MTT-S membership
          </a>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-surface md:grid md:grid-cols-[1fr_18rem]">
            <div className="border-l-4 border-accent p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                Students: ask about student membership
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                IEEE student membership is significantly discounted, and MTT-S
                offers additional student resources, design competitions, and
                travel grants. If you&apos;re at a Rwandan university, get in touch. We
                can help you and your student branch get started.
              </p>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="/images/students.jpg"
                alt="Students working together at a computer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
