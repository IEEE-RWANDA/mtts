import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { events } from "@/data/site";

const quickLinks = [
  {
    href: "/about",
    title: "About the Chapter",
    text: "Who we are, our mission, and our place in the joint IEEE Rwanda MTTS/ComSoc/AP-S Chapter.",
  },
  {
    href: "/membership",
    title: "Membership",
    text: "Why join IEEE MTT-S, what it costs for members in Rwanda, and how to sign up in three steps.",
  },
  {
    href: "/team",
    title: "Executive Team",
    text: "The volunteers who lead the chapter's technical and student activities.",
  },
];

const news = [
  {
    src: "/images/students.jpg",
    alt: "Students working together at a computer",
    tag: "Students",
    title: "Building the next generation of RF engineers",
    text: "Mentorship, design competitions, and student-branch support at Rwandan universities.",
    href: "/membership",
  },
  {
    src: "/images/tower.jpg",
    alt: "Telecommunication towers",
    tag: "Technical",
    title: "From RF circuits to mmWave and radar",
    text: "Talks and hands-on workshops across the breadth of microwave engineering.",
    href: "/about",
  },
  {
    src: "/images/kigali.jpg",
    alt: "Kigali city skyline at sunset",
    tag: "Community",
    title: "A chapter based in Kigali, connected worldwide",
    text: "Hosted at CMU-Africa and linked to MTT-S chapters around the globe.",
    href: "/contact",
  },
];

function labelDate(iso: string) {
  const d = new Date(iso);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleDateString("en-GB", { month: "short" }),
    year: d.getFullYear(),
  };
}

export default function Home() {
  const recent = [...events]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2);

  return (
    <>
      {/* Hero banner, mtt.org slider style */}
      <div className="relative">
        <div className="relative h-[420px] md:h-[520px]">
          <Image
            src="/images/tower.jpg"
            alt="Telecommunication towers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ieee-dark/90 via-ieee-dark/70 to-ieee-dark/30" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-4 md:px-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
                IEEE Microwave Theory &amp; Technology Society
              </p>
              <h1 className="max-w-3xl font-display text-6xl leading-none tracking-wide text-white md:text-8xl">
                Rwanda Chapter
              </h1>
              <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
                Advancing RF, microwave, and wireless engineering in Rwanda,
                MHz to THz.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="https://mtt.org/membership/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-accent-bright px-6 py-3 font-display text-xl tracking-wide text-ieee-dark transition hover:brightness-110"
                >
                  Become a member
                </a>
                <Link
                  href="/events"
                  className="group font-display text-xl tracking-wide text-white"
                >
                  Upcoming events{" "}
                  <span className="inline-block text-accent-bright transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Society */}
      <Section>
        <SectionHeading
          title="The Society in Rwanda"
          subtitle="The first chapter under the newly established IEEE Rwanda Subsection, based at Carnegie Mellon University Africa in Kigali."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((q, i) => (
            <Reveal key={q.href} delay={i * 80}>
              <Link
                href={q.href}
                className="group flex h-full flex-col rounded-sm border border-rule bg-white p-7 transition-colors hover:border-accent-bright"
              >
                <h3 className="font-display text-2xl tracking-wide text-ink">
                  {q.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body-gray">
                  {q.text}
                </p>
                <span className="mt-6 font-display text-lg tracking-wide text-accent">
                  Read more{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Upcoming events: navy band, mtt.org event blocks */}
      <div className="bg-ieee-dark py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="bordered font-display text-4xl tracking-wide text-white md:text-5xl">
              Events
            </h2>
            <Link
              href="/events"
              className="group font-display text-lg tracking-wide text-white/80 hover:text-white"
            >
              View all{" "}
              <span className="inline-block text-accent-bright transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {recent.map((event) => {
              const d = labelDate(event.date);
              return (
                <div
                  key={event.title}
                  className="flex overflow-hidden rounded-sm bg-white"
                >
                  <div className="flex min-w-[5.75rem] flex-col items-center justify-center gap-1 bg-accent-bright px-3 text-ieee-dark">
                    <span className="font-display text-4xl leading-none">
                      {d.day}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {d.month} {d.year}
                    </span>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      {!event.past ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-live-green">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live-green opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live-green" />
                          </span>
                          Upcoming
                        </span>
                      ) : (
                        <span className="text-xs font-bold uppercase tracking-wider text-body-gray">
                          Past event
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-2xl leading-tight tracking-wide text-ink">
                      {event.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-body-gray">
                      <svg className="h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </p>
                    {event.image && (
                      <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-sm">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <Link
                      href="/events"
                      className="mt-4 inline-block font-display text-lg tracking-wide text-accent hover:text-ink"
                    >
                      View event →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* News / highlights, mtt.org post blocks */}
      <Section>
        <SectionHeading title="Chapter Highlights" />
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-sm border border-rule bg-white">
                <div className="relative h-48">
                  <Image
                    src={n.src}
                    alt={n.alt}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-0 top-4 bg-accent-bright px-3 py-1 text-xs font-bold uppercase tracking-wider text-ieee-dark">
                    {n.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl leading-tight tracking-wide text-ink">
                    {n.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body-gray">
                    {n.text}
                  </p>
                  <Link
                    href={n.href}
                    className="mt-5 font-display text-lg tracking-wide text-accent hover:text-ink"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA strip */}
      <div className="border-t border-rule bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-12 md:px-6">
          <div>
            <h2 className="bordered font-display text-3xl tracking-wide text-ink md:text-4xl">
              Join the chapter
            </h2>
            <p className="mt-3 max-w-xl text-sm text-body-gray md:text-base">
              Join the global community of microwave and RF engineers and help
              build its home in Rwanda.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="rounded-sm bg-accent px-6 py-3 font-display text-xl tracking-wide text-white transition hover:brightness-110"
            >
              Membership
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-ink px-6 py-3 font-display text-xl tracking-wide text-ink transition hover:bg-ink hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
