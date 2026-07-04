# IEEE MTT-S Rwanda Chapter Website

Official website of the IEEE Microwave Theory and Technology Society (MTT-S)
Rwanda Chapter, part of the joint **IEEE Rwanda MTTS/ComSoc/AP-S Chapter**
under the IEEE Rwanda Subsection (IEEE Region 8), based at Carnegie Mellon
University Africa, Kigali.

Built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS](https://tailwindcss.com), using IEEE brand colors with the
official MTT-S blue (`#00609C`) as the accent, Space Grotesk display type,
Inter body text, and JetBrains Mono labels. The logo and favicon are the
official MTT-S brand files from [mtt.org/logos](https://mtt.org/logos/).

## Pages

- `/` — Home: hero, focus areas, upcoming events, membership CTA
- `/about` — Mission, chapter structure, technical scope
- `/events` — Upcoming and past events
- `/team` — Executive committee
- `/membership` — Benefits and how to join IEEE + MTT-S
- `/contact` — Contact details and partnership info

## Updating content

Most content lives in one file: [`src/data/site.ts`](src/data/site.ts).
Edit it to add events, update the executive committee, or change contact
details. Officer photos go in `public/team/`.

Items marked `TODO` in that file (official chapter email, social handles,
officer names) still need to be confirmed by the chapter.

Photos in `public/images/` are Unsplash placeholders (free license, no
attribution required). Replace them with real chapter photos as soon as
event photography exists, keeping the same filenames.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deployment

The site is designed to deploy on [Vercel](https://vercel.com): import the
GitHub repository, accept the default Next.js settings, and every push to
`main` deploys automatically.
