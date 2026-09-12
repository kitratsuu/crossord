"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import { Button } from "@workspace/ui/components/button";

const services = [
  {
    href: "/services/web-development",
    title: "Web Development",
    description: "Websites, portals, SaaS platforms and web applications.",
  },
  {
    href: "/services/mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform iOS and Android applications.",
  },
  {
    href: "/services/ui-ux-design",
    title: "UI/UX Design",
    description: "Interfaces, wireframes, prototypes and design systems.",
  },
  {
    href: "/services/ecommerce-development",
    title: "E-Commerce Solutions",
    description: "Online stores, payments, inventory and order management.",
  },
  {
    href: "/services/custom-software",
    title: "Custom Software",
    description: "ERP, CRM and tailored business software.",
  },
  {
    href: "/services/ai-solutions",
    title: "AI & Automation",
    description: "AI agents, automation and intelligent applications.",
  },
  {
    href: "/services/game-development",
    title: "Game Development",
    description: "2D, 3D, multiplayer and interactive experiences.",
  },
  {
    href: "/services/cloud-devops",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure, Docker, CI/CD and monitoring.",
  },
  {
    href: "/services/api-development",
    title: "API Development & Integration",
    description: "REST APIs, integrations and microservices.",
  },
  {
    href: "/services/seo-marketing",
    title: "SEO & Digital Marketing",
    description: "SEO, GEO, content strategy and analytics.",
  },
  {
    href: "/services/maintenance",
    title: "Support & Maintenance",
    description: "Updates, optimization and technical support.",
  },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <>
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-[100]">
        <div className="mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div
            className="
              relative mx-auto flex h-14 max-w-7xl items-center justify-between
              border border-white/10
              bg-[#0A0E1B]/95
              px-4
              shadow-[0_10px_40px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
              sm:px-5
            "
          >
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={closeMobileMenu}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-black shadow-[0_0_20px_rgba(91,82,255,0.2)]">
                <span className="text-sm font-bold text-white">C</span>
              </div>

              <span className="text-sm font-bold tracking-[0.16em] text-white">
                CROSSORD
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-1 md:flex">
              <NavLink href="/">HOME</NavLink>

              {/* SERVICES */}
              <div ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className={`
                    flex h-10 items-center gap-1.5 px-4
                    text-xs font-semibold
                    transition-colors
                    ${
                      servicesOpen
                        ? "bg-white/10 text-white"
                        : "text-white/65 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  SERVICES
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DESKTOP DROPDOWN */}
                {servicesOpen && (
                  <div
                    className="
                      absolute left-1/2 top-[calc(100%+10px)]
                      w-[760px]
                      -translate-x-1/2
                      border border-white/10
                      bg-[#0D111F]
                      p-5
                      shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                    "
                  >
                    <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="
                            group flex gap-3 rounded-lg p-3
                            transition-colors
                            hover:bg-white/[0.06]
                          "
                        >
                          <div
                            className="
                              mt-0.5 flex h-7 w-7 shrink-0
                              items-center justify-center
                              border border-primary/30
                              bg-primary/[0.08]
                              text-primary
                              transition-colors
                              group-hover:bg-primary
                              group-hover:text-white
                            "
                          >
                            <ChevronRight className="h-3.5 w-3.5" />
                          </div>

                          <div className="min-w-0">
                            <p className="mb-1 text-xs font-semibold text-white">
                              {service.title}
                            </p>

                            <p className="text-[11px] leading-relaxed text-white/40 transition-colors group-hover:text-white/60">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink href="/about">ABOUT US</NavLink>
              <NavLink href="/blog">BLOG</NavLink>
              <NavLink href="/contact">CONTACT</NavLink>
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <Button asChild className="h-10 gap-2 px-4 text-xs">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="
                flex h-10 w-10 items-center justify-center
                border border-white/10
                bg-white/[0.04]
                text-white
                transition-colors
                hover:bg-white/[0.08]
                md:hidden
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[90] bg-[#080C17] md:hidden">
          {/* top spacing for header */}
          <div className="h-[88px]" />

          {/* SCROLLABLE CONTENT */}
          <div className="h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain px-5 pb-8">
            <div className="mx-auto max-w-lg">
              {/* HOME */}
              <MobileLink href="/" onClick={closeMobileMenu} title="Home" />

              {/* SERVICES */}
              <div className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="
                    flex w-full items-center justify-between
                    py-5
                    text-left
                    text-sm font-semibold
                    text-white
                  "
                >
                  <span>Services</span>

                  <ChevronDown
                    className={`h-4 w-4 text-white/50 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="pb-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        className="
                          group block
                          border-t border-white/[0.06]
                          px-2 py-4
                        "
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                            <ChevronRight className="h-3.5 w-3.5" />
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-white">
                              {service.title}
                            </p>

                            <p className="mt-1 text-xs leading-relaxed text-white/40">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <MobileLink
                href="/about"
                onClick={closeMobileMenu}
                title="About Us"
              />

              <MobileLink href="/blog" onClick={closeMobileMenu} title="Blog" />

              <MobileLink
                href="/contact"
                onClick={closeMobileMenu}
                title="Contact"
              />

              <div className="pt-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full justify-center gap-2"
                >
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        flex h-10 items-center px-4
        text-xs font-semibold
        text-white/65
        transition-colors
        hover:bg-white/5
        hover:text-white
      "
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  title,
  onClick,
}: {
  href: string;
  title: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        flex items-center justify-between
        border-b border-white/10
        py-5
        text-sm font-semibold
        text-white
      "
    >
      {title}

      <ArrowRight className="h-4 w-4 text-white/40" />
    </Link>
  );
}
