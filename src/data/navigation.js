import { services, sealedUnitTypes } from "@/data/services";

// Drives the header mega-menu and mobile accordion. Grouping products by
// category (rather than one flat "Services" list) mirrors how a large
// trade site organises deep product ranges, scaled to what we actually sell.
const byCategory = (category) =>
  services.filter((service) => service.category === category);

export const navigation = [
  { href: "/", label: "Home" },
  {
    label: "Windows",
    href: "/services",
    items: byCategory("windows").map((s) => ({
      href: `/services/${s.slug}`,
      label: s.name,
      description: s.tagline,
    })),
  },
  {
    label: "Doors",
    href: "/services",
    items: byCategory("doors").map((s) => ({
      href: `/services/${s.slug}`,
      label: s.name,
      description: s.tagline,
    })),
  },
  {
    label: "Sealed Units",
    href: "/services/sealed-units",
    featured: {
      href: "/services/sealed-units",
      label: "All Sealed Units",
      description: "Manufacturing overview & glass types",
    },
    items: sealedUnitTypes.map((t) => ({
      href: `/services/sealed-units/${t.slug}`,
      label: t.name,
      description: t.tagline,
    })),
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
