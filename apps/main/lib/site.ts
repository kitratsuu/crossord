export const siteConfig = {
  name: "Crossord",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://crossord.com").replace(/\/$/, ""),
  description:
    "Crossord is a digital technology partner building high-performance websites, mobile apps, custom software, automation and AI-powered products.",
  email: "info@crossord.com",
  ogImage: "/opengraph-image",
};
