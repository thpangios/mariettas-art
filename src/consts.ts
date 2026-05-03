import settings from "./data/settings.json";

export const SITE = settings;

// Top-level "rooms" — shown in the home directory hero and the nav.
export const ROOMS: { href: string; label: string; index: string }[] = [
  { href: "/canvas/", label: "Canvas", index: "01" },
  { href: "/paper-drawings/", label: "Paper Drawings", index: "02" },
  { href: "/about/", label: "About", index: "03" },
  { href: "/contact/", label: "Contact", index: "04" },
];

// Backwards-compatible alias for components that import NAV.
export const NAV = ROOMS;
