import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { events, type EventItem } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events of the IEEE MTT-S Rwanda Chapter: workshops, technical talks, and networking.",
};

function EventRow({ event, first }: { event: EventItem; first: boolean }) {
  const d = new Date(event.date);
  return (
    <div
      className={`group flex flex-col gap-5 p-6 transition-colors hover:bg-slate-50 sm:flex-row md:p-8 ${
        first ? "" : "border-t border-rule"
      }`}
    >
      <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-sm bg-accent-bright text-ieee-dark">
        <span className="font-display text-2xl font-bold leading-none">
          {d.getDate()}
        </span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-ieee-dark/80">
          {d.toLocaleDateString("en-GB", { month: "short" })} {d.getFullYear()}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
            {event.title}
          </h3>
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
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-400">
          {event.location}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-body-gray">
          {event.description}
        </p>
        {event.image && (
          <div className="relative mt-4 aspect-[16/9] max-w-md overflow-hidden rounded-sm">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 28rem"
              className="object-cover"
            />
          </div>
        )}
        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-sm bg-accent px-4 py-2 font-display text-lg tracking-wide text-white transition hover:brightness-110"
          >
            Register →
          </a>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const upcoming = events
    .filter((e) => !e.past)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => e.past)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Talks, workshops & sessions"
        subtitle="Open to members, students, and the wider tech community, in Kigali and online."
      />

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Calendar" title="Upcoming" />
        </Reveal>
        {upcoming.length > 0 ? (
          <div className="overflow-hidden rounded-sm border border-rule bg-white">
            {upcoming.map((event, i) => (
              <EventRow key={event.title} event={event} first={i === 0} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-dashed border-rule bg-surface p-10 text-center">
            <p className="font-display font-semibold text-ink">
              No upcoming events scheduled yet
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              New events are announced on our{" "}
              <a
                href="https://www.linkedin.com/showcase/ch08150"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ieee-blue hover:underline"
              >
                LinkedIn page
              </a>. Follow
              us to be the first to know.
            </p>
          </div>
        )}
      </Section>

      {past.length > 0 && (
        <Section className="border-t border-rule bg-surface">
          <Reveal>
            <SectionHeading eyebrow="Archive" title="Past events" />
          </Reveal>
          <div className="overflow-hidden rounded-sm border border-rule bg-white">
            {past.map((event, i) => (
              <EventRow key={event.title} event={event} first={i === 0} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
