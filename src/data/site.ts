import eventsData from "./events.json";
import teamData from "./team.json";
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

export const events: EventItem[] = eventsData as EventItem[];

// TODO: replace with the actual executive committee once officers are
// confirmed. No official officer list was published as of July 2026.
export const team: TeamMember[] = teamData as TeamMember[];
