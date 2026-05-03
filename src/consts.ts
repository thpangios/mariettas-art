// Centralised placeholder copy. Replace when real details arrive.
export const SITE = {
  artistName: "Marietta", // e.g. "Manuela Rossi"
  artistShort: "Marietta",
  tagline: "Paintings in acrylic — figure, light, silhouette.",
  description:
    "Original acrylic paintings by Marietta. Figurative works exploring light, silhouette, and quiet narrative. Browse the collection and inquire about available originals.",
  location: "Studio — City, Country",
  email: "hello@example.com",
  instagram: "https://instagram.com/",
  url: "https://example.com",
};

// Top-level "rooms" — shown in the home directory hero and the nav.
export const ROOMS: { href: string; label: string; index: string }[] = [
  { href: "/canvas/", label: "Canvas", index: "01" },
  { href: "/paper-drawings/", label: "Paper Drawings", index: "02" },
  { href: "/about/", label: "About", index: "03" },
  { href: "/contact/", label: "Contact", index: "04" },
];

// Backwards-compatible alias for components that import NAV.
export const NAV = ROOMS;
