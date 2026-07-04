import type { ReactNode } from "react";
import NetworkCanvas from "@/components/NetworkCanvas";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${
        dark ? "text-accent-bright" : "text-ieee-blue"
      }`}
    >
      <span
        className={`h-0.5 w-6 rounded-full ${
          dark ? "bg-accent-bright" : "bg-ieee-blue"
        }`}
        aria-hidden
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Dark page header used on all inner pages: dot-grid texture, glow blob,
// subtle network canvas. Padding-top clears the fixed navbar.
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-white pb-20 pt-36 md:pb-24 md:pt-44">
      <div className="dot-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <NetworkCanvas className="opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
