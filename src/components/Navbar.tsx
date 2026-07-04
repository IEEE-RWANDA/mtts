"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top utility menu, mtt.org style */}
      <div className="hidden border-b border-rule md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-6 border-x border-rule px-6 py-2 text-xs font-medium text-body-gray">
          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            IEEE.org
          </a>
          <a
            href="https://mtt.org"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            MTT.org
          </a>
          <a
            href="https://ieeexplore.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            IEEE Xplore
          </a>
          <a
            href="https://www.linkedin.com/showcase/ch08150"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Main menu */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-x border-rule px-4 py-2.5 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mtts-logo.svg"
            alt="IEEE Microwave Theory &amp; Technology Society"
            className="h-10 w-auto"
          />
          <span className="h-8 w-px bg-rule" aria-hidden />
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-wide text-ink">
              Rwanda
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-body-gray">
              Chapter
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    active
                      ? "text-accent"
                      : "text-ink hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://mtt.org/membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-accent px-5 py-2.5 font-display text-lg tracking-wide text-white transition hover:brightness-110"
            >
              Join MTT-S
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-ink hover:bg-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-rule bg-white px-4 pb-5 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-3 text-sm font-semibold text-ink hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://mtt.org/membership/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-sm bg-accent px-4 py-3 text-center font-display text-lg tracking-wide text-white"
            >
              Join MTT-S
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
