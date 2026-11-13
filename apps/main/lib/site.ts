export const siteConfig = {
  name: "Crossord",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://crossord.com").replace(/\/$/, ""),
  description:
    "Crossord is a digital technology partner building high-performance websites, mobile apps, custom software, automation and AI-powered products.",
  email: "info@crossord.com",
  ogImage: "/opengraph-image",
};

export const contact = {
  phone: "+91 9872444928",
  phoneHref: "tel:+919872444928",
  whatsappHref: "https://wa.me/919872444928",
};
