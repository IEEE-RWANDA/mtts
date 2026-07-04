import Link from "next/link";

const chapterLinks = [
  { href: "/about", label: "About the Chapter" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Executive Team" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

const ieeeLinks = [
  { href: "https://www.ieee.org", label: "IEEE.org" },
  { href: "https://mtt.org", label: "IEEE Microwave Theory & Technology Society" },
  { href: "https://ieeexplore.ieee.org", label: "IEEE Xplore" },
  { href: "https://www.ieee.org/membership/join", label: "Join IEEE" },
];

const legalLinks = [
  {
    href: "https://www.ieee.org/security-privacy.html",
    label: "IEEE Privacy Policy",
  },
  {
    href: "https://www.ieee.org/accessibility-statement.html",
    label: "Accessibility",
  },
  {
    href: "https://www.ieee.org/about/corporate/governance/p9-26.html",
    label: "Nondiscrimination Policy",
  },
  {
    href: "https://www.ieee.org/about/ethics/index.html",
    label: "IEEE Ethics Reporting",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-ieee-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mtts-logo-white.svg"
            alt="IEEE Microwave Theory &amp; Technology Society"
            className="mb-4 h-14 w-auto"
          />
          <p className="text-sm leading-relaxed text-white/70">
            Advancing RF, microwave, and wireless engineering in Rwanda. Part
            of the joint IEEE Rwanda MTTS/ComSoc/AP-S Chapter.
          </p>
          <a
            href="https://www.linkedin.com/showcase/ch08150"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent-bright"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
            </svg>
            Follow us on LinkedIn
          </a>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl tracking-wide text-white">
            Chapter
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {chapterLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-accent-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl tracking-wide text-white">
            IEEE Resources
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            {ieeeLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-bright"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl tracking-wide text-white">
            Get in Touch
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Carnegie Mellon University Africa</li>
            <li>Kigali, Rwanda</li>
            <li>
              <a
                href="mailto:mtts.rwanda@ieee.org"
                className="transition-colors hover:text-accent-bright"
              >
                mtts.rwanda@ieee.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-5 md:px-6">
          <ul className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-white/60 sm:justify-start">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} IEEE Rwanda MTTS/ComSoc/AP-S
              Chapter. All rights reserved.
            </p>
            <p>IEEE Rwanda Subsection · Region 8</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
