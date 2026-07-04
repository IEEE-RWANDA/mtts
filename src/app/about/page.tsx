import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the IEEE Microwave Theory and Technology Society Rwanda Chapter: our mission, structure, and technical scope.",
};

const topics = [
  "RF & Microwave Circuits",
  "mmWave & THz Systems",
  "Radar & Sensing",
  "Wireless Power Transfer",
  "Microwave Photonics",
  "RFICs & MMICs",
  "Filters & Passive Components",
  "EM Measurement & Test",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Who we are"
        subtitle="The first chapter under the newly established IEEE Rwanda Subsection, advancing communications engineering from Kigali."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Mission" title="What drives us" />
            <div className="space-y-4 leading-relaxed text-body-gray">
              <p>
                The IEEE MTT-S Rwanda Chapter promotes the advancement of
                microwave theory, radio-frequency engineering, and wireless
                technology in Rwanda. We serve members through
                technical activities, professional development, and community
                outreach, and we connect Rwandan engineers, researchers, and
                students to MTT-S&apos;s global network of microwave and RF
                professionals.
              </p>
              <p>
                We operate as part of the joint{" "}
                <strong className="text-ink">
                  IEEE Rwanda MTTS/ComSoc/AP-S Chapter
                </strong>
                , which spans the Microwave Theory &amp; Technology,
                Communications, and Antennas &amp; Propagation societies. It is
                the first chapter under the newly established IEEE Rwanda
                Subsection, based at Carnegie Mellon University Africa in
                Kigali.
              </p>
              <p>
                As Rwanda pursues its vision of becoming a regional ICT hub,
                the chapter works to ensure local talent has access to
                world-class technical knowledge, mentorship, and opportunities
                in RF, microwave, and wireless engineering.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading eyebrow="Structure" title="Part of IEEE" />
            <p className="leading-relaxed text-body-gray">
              The chapter operates under the IEEE Rwanda Subsection, the first
              IEEE geographic unit in Rwanda, launched in Kigali in July 2026
              within{" "}
              <a
                href="https://www.ieeer8.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ieee-blue hover:underline"
              >
                IEEE Region 8
              </a>
              . It is affiliated with the{" "}
              <a
                href="https://mtt.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ieee-blue hover:underline"
              >
                IEEE Microwave Theory &amp; Technology Society
              </a>
              , the IEEE society dedicated to microwave theory and
              technology since 1952.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Technical seminars, workshops, and distinguished lecturer talks",
                "Support for student branches and young professionals",
                "Collaboration with industry, academia, and government",
                "Access to MTT-S publications, conferences, and training",
                "International partnerships through the joint chapter, including joint sessions with chapters worldwide",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-body-gray">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ieee-blue/10 font-mono text-[10px] font-bold text-ieee-blue">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src="/images/kigali.jpg"
              alt="Kigali city skyline at sunset"
              width={1600}
              height={900}
              className="h-72 w-full object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white">
              <span className="h-0.5 w-6 rounded-full bg-white/70" aria-hidden />
              Kigali · Home of the chapter
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <Reveal>
          <SectionHeading
            eyebrow="Focus areas"
            title="Technical scope"
            subtitle="Our activities span the breadth of modern communications technology."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, i) => (
            <Reveal key={topic} delay={i * 60}>
              <div className="group rounded-sm border border-rule bg-white p-6 transition duration-300 hover:border-accent-bright">
                <span className="font-mono text-xs text-slate-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display font-semibold tracking-tight text-ink">
                  {topic}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
