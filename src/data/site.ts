// Central content file for the IEEE MTT-S Rwanda Chapter website.
// Chapter members: update events, team, and contact info here — no need to
// touch the page components.

export type EventItem = {
  title: string;
  date: string; // ISO date, e.g. "2026-08-15"
  location: string;
  description: string;
  registrationUrl?: string;
  past?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  affiliation: string;
  photo?: string; // path under /public, e.g. "/team/jane.jpg"
  linkedin?: string;
};

export const site = {
  name: "IEEE MTT-S Rwanda Chapter",
  // The chapter is formally the joint "IEEE Rwanda MTTS/COMSOC/AP-S Chapter"
  // under the IEEE Rwanda Subsection, based at CMU-Africa, Kigali.
  fullName: "IEEE Rwanda MTTS/ComSoc/AP-S Chapter",
  email: "mtts.rwanda@ieee.org", // TODO: confirm official chapter email
  city: "Kigali, Rwanda",
  host: "Carnegie Mellon University Africa, Kigali",
  social: {
    linkedin: "https://www.linkedin.com/showcase/ch08150",
    twitter: "", // TODO: add handle if one exists
    instagram: "",
  },
};

export const events: EventItem[] = [
  {
    title: "IEEE Rwanda Subsection Launch & Societies Engagement Forum",
    date: "2026-07-17",
    location: "Kigali, Rwanda",
    description:
      "Official launch of the IEEE Rwanda Subsection, the first IEEE geographic unit in Rwanda, supported by IEEE Smart Cities, the IEEE Africa Council, and IEEE Region 8, with engagement sessions for IEEE societies including MTT-S.",
  },
  {
    title: "Joint Technical Session with the IEEE ComSoc Kerala Chapter",
    date: "2026-06-30",
    location: "Online (Google Meet)",
    description:
      "Joint session hosted by our chapter under ComSoc's Twin Chapter Program. Talks: “The Future of Spectrum Sovereignty” by Dr. Edwin Mugume (CMU-Africa) and “Digital Battlefield: Radar Communication and Sensor Fusion in Contemporary Fighter Aircrafts” by Krishna Priya Boban (IEEE ComSoc Kerala).",
    past: true,
  },
  // TODO: add upcoming events as they are scheduled.
];

// TODO: replace with the actual executive committee once officers are
// confirmed. No official officer list was published as of July 2026.
export const team: TeamMember[] = [
  {
    name: "Chapter Chair",
    role: "Chair",
    affiliation: "To be announced",
  },
  {
    name: "Vice Chair",
    role: "Vice Chair",
    affiliation: "To be announced",
  },
  {
    name: "Secretary",
    role: "Secretary",
    affiliation: "To be announced",
  },
  {
    name: "Treasurer",
    role: "Treasurer",
    affiliation: "To be announced",
  },
];
