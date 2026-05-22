const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://th3tag.com");

export const site = {
  name: "TheTAG",
  legalName: "TheTAG Ventures & Partners",
  tagline: "Heart + Mind + Technology.",
  description:
    "TheTAG helps leaders modernize enterprise technology, shape AI strategy, and build systems people trust — with one integrated framework: Heart, Mind, and Technology.",
  url: siteUrl,
  email: "partners@th3tag.com",
  phone: "+1 408 657 9877",
  phoneHref: "tel:+14086579877",
  address: "574 Rita Blanca Dr, Webster TX 77598",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/framework", label: "Framework" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

// Routes treated as part of the "Services" nav group for active highlighting.
export const servicePaths = [
  "/technology-advisory",
  "/strategic-ventures",
  "/design-studio",
];

export const companyLinks = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/framework", label: "Framework" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/contact", label: "Contact" },
];

export const practiceLinks = [
  { href: "/technology-advisory", label: "Technology Advisory" },
  { href: "/strategic-ventures", label: "Strategic Ventures" },
  { href: "/design-studio", label: "Design Studio" },
];
