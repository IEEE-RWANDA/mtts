import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import WaveCanvas from "@/components/WaveCanvas";
import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import { events } from "@/data/site";

const partners = [
  "IEEE",
  "IEEE MTT-S",
  "IEEE Region 8",
  "IEEE Rwanda Subsection",
  "CMU-Africa",
  "International Microwave Symposium",
  "IEEE ComSoc",
  "IEEE AP-S",
];

const focus = [
  {
    n: "01",
    title: "Technical program",
    text: "Talks and workshops on RF and microwave circuits, mmWave and THz systems, radar, and wireless power, with distinguished microwave lecturers and joint sessions with IEEE chapters worldwide.",
  },
  {
    n: "02",
    title: "Students first",
    text: "Mentorship, career guidance, and student-branch support at Rwandan universities, opening doors to MTT-S scholarships, design competitions, and travel grants.",
  },
  {
    n: "03",
    title: "Industry and academia",
    text: "Bridging operators, regulators, startups, and universities to grow Rwanda's RF and microwave engineering ecosystem.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Home() {
  const recent = [...events]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  return (
    <>
      {/* Hero: full-width headline over a sine-wave backdrop, photo strip below */}
      <div className="relative overflow-hidden border-b border-slate-200 bg-white">
        <WaveCanvas className="absolute inset-x-0 top-24 h-[420px] w-full" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-44 md:px-6 md:pt-52">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-ieee-blue">
            <span className="h-0.5 w-6 rounded-full bg-ieee-blue" aria-hidden />
            IEEE Microwave Theory &amp; Technology Society · Rwanda
          </p>
          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-7xl">
            Engineering Rwanda&apos;s wireless future,{" "}
            <span className="text-ieee-blue">MHz to THz</span>.
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              We bring together the engineers, researchers, and students
              advancing RF, microwave, and wireless technology in Rwanda
              through technical talks, hands-on workshops, and a global
              community of microwave professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://mtt.org/membership/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-accent px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
              >
                Become a member
              </a>
              <Link
                href="/events"
                className="group rounded-lg border border-slate-300 px-6 py-3.5 font-semibold text-ink transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore events{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Staggered photo strip */}
          <div className="mt-16 grid grid-cols-3 gap-4 md:gap-6">
            <Image
              src="/images/students.jpg"
              alt="Students working together at a computer"
              width={640}
              height={427}
              priority
              className="h-40 w-full rounded-2xl object-cover md:h-64"
            />
            <Image
              src="/images/tower.jpg"
              alt="Telecommunication towers"
              width={640}
              height={427}
              priority
              className="h-40 w-full translate-y-6 rounded-2xl object-cover md:h-64"
            />
            <Image
              src="/images/kigali.jpg"
              alt="Kigali city skyline at sunset"
              width={640}
              height={427}
              priority
              className="h-40 w-full rounded-2xl object-cover md:h-64"
            />
          </div>
        </div>
      </div>

      {/* Stats: flat full-width band, no cards */}
      <div className="border-b border-slate-200 bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-200 px-4 md:grid-cols-4 md:px-6">
          {[
            { value: 3, suffix: "", label: "IEEE societies, one chapter" },
            { value: 2026, suffix: "", label: "Chapter established" },
            { value: 400, suffix: "K+", label: "IEEE members worldwide" },
            { value: 160, suffix: "+", label: "Countries in the network" },
          ].map((s) => (
            <div key={s.label} className="px-6 py-10 first:pl-0 last:pr-0">
              <p className="font-display text-3xl font-bold text-ieee-blue md:text-4xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1.5 text-xs uppercase tracking-widest text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner marquee */}
      <div className="border-b border-slate-200 bg-white py-8">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center"
              >
                {partners.map((p) => (
                  <li
                    key={p}
                    className="mx-8 whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-slate-400"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* What we do: sticky heading + numbered editorial rows */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="What we do"
              title="Built for Rwanda's RF and microwave community"
              subtitle="Part of the joint IEEE Rwanda MTTS/ComSoc/AP-S Chapter under the IEEE Rwanda Subsection, based at Carnegie Mellon University Africa."
            />
          </div>
          <div>
            {focus.map((f, i) => (
              <Reveal key={f.n} delay={i * 80}>
                <div
                  className={`grid gap-4 py-10 md:grid-cols-[5rem_1fr] ${
                    i > 0 ? "border-t border-slate-200" : "lg:pt-2"
                  }`}
                >
                  <span className="font-mono text-sm text-ieee-blue">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-slate-600">
                      {f.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Events: card grid */}
      <Section className="border-t border-slate-200 bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading eyebrow="Events" title="Recent & upcoming" />
          </Reveal>
          <Link
            href="/events"
            className="group mb-14 text-sm font-semibold text-ink hover:text-ieee-blue"
          >
            All events{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {recent.map((event, i) => (
            <Reveal key={event.title} delay={i * 80}>
              <Link
                href="/events"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                    {formatDate(event.date)}
                  </span>
                  {!event.past && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-live-green/10 px-2.5 py-0.5 text-xs font-semibold text-live-green">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live-green opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live-green" />
                      </span>
                      Upcoming
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{event.location}</p>
                <span className="mt-6 text-sm font-semibold text-ieee-blue">
                  Details{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA: full-bleed photo band */}
      <div className="relative overflow-hidden">
        <Image src="/images/tower.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-ieee-dark/85" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-28">
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
            <span className="h-0.5 w-6 rounded-full bg-white/60" aria-hidden />
            Join us
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            Be part of the wave.
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            Join the global community of microwave and RF engineers and help
            build its home in Rwanda.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="rounded-lg bg-white px-6 py-3.5 font-semibold text-ieee-blue transition hover:bg-slate-100"
            >
              Membership benefits
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
