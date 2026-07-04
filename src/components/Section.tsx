import type { ReactNode } from "react";

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
    <section id={id} className={`py-16 md:py-20 ${className}`}>
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
      className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-white/70" : "text-body-gray"
      }`}
    >
      {children}
    </p>
  );
}

// mtt.org's signature heading: Bebas Neue with a 6px bright-blue left border.
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
    <div className="mb-10">
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`bordered font-display text-4xl tracking-wide md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base ${
            dark ? "text-white/80" : "text-body-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Page header in mtt.org's style: light gray band, breadcrumb, Bebas title.
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
    <div className="border-b border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 md:px-6 md:pb-14 md:pt-16">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-body-gray">
            Home <span className="text-accent-bright">/</span> {eyebrow}
          </p>
        )}
        <h1 className="bordered font-display text-5xl tracking-wide text-ink md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-body-gray md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
