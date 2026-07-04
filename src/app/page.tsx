import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import NetworkCanvas from "@/components/NetworkCanvas";
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
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <NetworkCanvas className="opacity-50" />

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-40 md:px-6 md:pb-32 md:pt-48">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,26rem)]">
            <div>
              <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-ieee-blue">
                <span className="h-0.5 w-6 rounded-full bg-ieee-blue" aria-hidden />
                IEEE Microwave Theory &amp; Technology Society · Rwanda
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl xl:text-7xl">
                Engineering Rwanda's wireless future,{" "}
                <span className="text-ieee-blue">MHz to THz</span>.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-600">
                We bring together the engineers, researchers, and students
                advancing RF, microwave, and wireless technology in Rwanda
                through technical talks, hands-on workshops, and a global
                community of microwave professionals.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
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

            <div className="relative hidden lg:block">
              <Image
                src="/images/students.jpg"
                alt="Students working together at a computer"
                width={640}
                height={427}
                priority
                className="rounded-3xl object-cover shadow-xl shadow-slate-900/10"
              />
              <Image
                src="/images/kigali.jpg"
                alt="Kigali city skyline at sunset"
                width={320}
                height={200}
                className="absolute -bottom-10 -left-12 w-52 -rotate-3 rounded-2xl border-4 border-white object-cover shadow-xl shadow-slate-900/20"
              />
            </div>
          </div>

          {/* Stat strip bridging into the light section */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
            {[
              { value: 3, suffix: "", label: "IEEE societies, one chapter" },
              { value: 2026, suffix: "", label: "Chapter established" },
              { value: 400, suffix: "K+", label: "IEEE members worldwide" },
              { value: 160, suffix: "+", label: "Countries in the network" },
            ].map((s) => (
              <div key={s.label} className="bg-white p-6">
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
      </div>

      {/* ── Partner marquee ──────────────────────────────────────────── */}
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

      {/* ── What we do — bento grid ──────────────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Built for Rwanda's RF and microwave community"
            subtitle="Part of the joint IEEE Rwanda MTTS/ComSoc/AP-S Chapter under the IEEE Rwanda Subsection, based at Carnegie Mellon University Africa."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-2xl p-8">
              <Image
                src="/images/tower.jpg"
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ieee-dark/75" />
              <div className="relative flex h-full flex-col justify-end">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                  Technical program
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Talks &amp; workshops on RF circuits, mmWave, radar, and
                  wireless power
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80">
                  Distinguished microwave lecturers, hands-on sessions, and
                  joint technical events with IEEE chapters around the world.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full min-h-[180px] flex-col justify-end rounded-2xl border border-slate-200 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5">
              <p className="font-display text-3xl font-bold text-ink">
                Students first
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Mentorship, career guidance, and student-branch support at
                Rwandan universities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex h-full min-h-[180px] flex-col justify-end rounded-2xl border border-slate-200 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5">
              <p className="font-display text-3xl font-bold text-ink">
                Industry × academia
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Bridging operators, regulators, startups, and universities to
                grow the ecosystem.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Events ───────────────────────────────────────────────────── */}
      <Section className="border-t border-slate-200 bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="Events"
              title="Recent & upcoming"
            />
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
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {recent.map((event, i) => (
            <Link
              key={event.title}
              href="/events"
              className={`group flex flex-col gap-4 p-6 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center md:p-8 ${
                i > 0 ? "border-t border-slate-200" : ""
              }`}
            >
              <div className="flex w-24 shrink-0 flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                  {formatDate(event.date)}
                </span>
                {!event.past && (
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-live-green">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live-green opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-live-green" />
                    </span>
                    Upcoming
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{event.location}</p>
              </div>
              <span className="hidden text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-ieee-blue sm:block">
                →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ieee-blue px-8 py-14 md:px-14 md:py-16">
            <div className="dot-grid absolute inset-0 opacity-25" />
            <div className="relative">
              <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                <span className="h-0.5 w-6 rounded-full bg-white/60" aria-hidden />
                Join us
              </p>
              <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                Be part of the network.
              </h2>
              <p className="mt-4 max-w-xl text-white/85">
                Join the global community of microwave and RF engineers and
                help build its home in Rwanda.
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
        </Reveal>
      </Section>
    </>
  );
}
