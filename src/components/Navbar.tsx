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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mtts-logo.svg"
            alt="IEEE Microwave Theory &amp; Technology Society"
            className="h-14 w-auto"
          />
          <span className="h-10 w-px bg-slate-300" aria-hidden />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-ieee-blue">
              Rwanda
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Chapter
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                    active
                      ? "text-ieee-blue"
                      : "text-slate-600 hover:bg-slate-100 hover:text-ink"
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
              className="ml-3 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Join MTT-S
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
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
        <ul className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-3 text-sm text-slate-700 hover:bg-slate-100"
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
              className="mt-3 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Join MTT-S
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
