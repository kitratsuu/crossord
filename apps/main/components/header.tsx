"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { ArrowRight } from "lucide-react";

function Header() {
  return (
    <div className="fixed top-0 z-50 w-full max-w-480 h-12.5 flex justify-between items-center px-10">
      <div className="flex flex-row flex-wrap items-center gap-6 md:gap-2">
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
        </Avatar>
        <h4 className="font-bold text-xl">CROSSORD</h4>
      </div>

      <div className="flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">HOME</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>SERVICES</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[90vw] max-w-[700px] grid-cols-1 md:grid-cols-3 gap-3 p-4">
                  <ListItem
                    href="/services/web-development"
                    title="Web Development"
                  >
                    Custom websites, web applications, portals, and SaaS
                    platforms.
                  </ListItem>

                  <ListItem
                    href="/services/mobile-app-development"
                    title="Mobile App Development"
                  >
                    Native and cross-platform mobile applications for iOS and
                    Android.
                  </ListItem>

                  <ListItem href="/services/ui-ux-design" title="UI/UX Design">
                    User-centered interfaces, wireframes, prototypes, and design
                    systems.
                  </ListItem>

                  <ListItem
                    href="/services/ecommerce-development"
                    title="E-Commerce Solutions"
                  >
                    Online stores, payment integrations, inventory, and order
                    management.
                  </ListItem>

                  <ListItem
                    href="/services/custom-software"
                    title="Custom Software Development"
                  >
                    Tailored business software, ERP, CRM, and workflow
                    automation.
                  </ListItem>

                  <ListItem
                    href="/services/ai-solutions"
                    title="AI & Automation"
                  >
                    AI agents, chatbots, workflow automation, and intelligent
                    applications.
                  </ListItem>

                  <ListItem
                    href="/services/game-development"
                    title="Game Development"
                  >
                    2D, 3D, multiplayer, and interactive gaming experiences.
                  </ListItem>

                  <ListItem
                    href="/services/cloud-devops"
                    title="Cloud & DevOps"
                  >
                    VPS, AWS, Docker, CI/CD pipelines, monitoring, and
                    infrastructure.
                  </ListItem>

                  <ListItem
                    href="/services/api-development"
                    title="API Development & Integration"
                  >
                    REST APIs, third-party integrations, and microservice
                    architectures.
                  </ListItem>

                  <ListItem
                    href="/services/seo-marketing"
                    title="SEO & Digital Marketing"
                  >
                    Technical SEO, GEO optimization, content strategy, and
                    analytics.
                  </ListItem>

                  <ListItem
                    href="/services/maintenance"
                    title="Support & Maintenance"
                  >
                    Ongoing updates, performance optimization, and technical
                    support.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">ABOUT US</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/blog">BLOG</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">CONTACT US</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="">
        <Button>
          Get in Touch <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default Header;

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
