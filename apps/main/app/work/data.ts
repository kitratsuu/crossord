import { CalendarDays, Monitor, Play, Workflow } from "lucide-react";

export type Project = {
    slug: string;
    icon: typeof Monitor;
    label: string;
    title: string;
    categories: string[];
    problem: string;
    built: string[];
    tech: string[];
    outcome: string;
    offer: string;
    services: { label: string; href: string }[];
};

// Client projects are described without client names, logos or screenshots.
// Only add those with the client's written permission.
export const projects: Project[] = [
    {
        slug: "screen-sharing-broadcast",
        icon: Monitor,
        label: "Own product",
        title: "Local screen-sharing & multi-broadcast system",
        categories: ["Custom Software", "Real-time"],
        problem:
            "Teams running internal calls needed to share screens and broadcast to several rooms or people at once on the local network — without cloud meeting tools, their seat limits or a dependence on internet bandwidth.",
        built: [
            "Low-latency screen sharing over the local network",
            "Multi-broadcast: one presenter streaming to many viewers at the same time",
            "Call management to start sessions, choose the presenter and see who's connected",
            "Runs entirely on-premise, so data never leaves the building",
        ],
        tech: ["Real-time streaming", "Local network", "On-premise"],
        outcome:
            "Smooth, private screen sharing that keeps working when the internet is slow or down, with no per-seat meeting subscriptions.",
        offer: "Internal communication tools, live dashboards, video and streaming features, and on-premise software.",
        services: [{ label: "Custom Software", href: "/services/custom-software" }],
    },
    {
        slug: "hotel-booking-wix",
        icon: CalendarDays,
        label: "Delivered by our team",
        title: "Direct hotel booking system on Wix",
        categories: ["Web Development", "Custom Software"],
        problem:
            "A hospitality business wanted guests to book rooms directly on its own website instead of paying commission to booking portals — but Wix's built-in booking tools didn't fit how it sold rooms.",
        built: [
            "Live availability by room type and date, so a room can't be double-booked",
            "A booking flow from date search to confirmation",
            "Automatic confirmation emails to the guest and the property",
            "An admin view where staff manage bookings without touching code",
        ],
        tech: ["Wix", "Velo (custom code)", "Wix Data"],
        outcome:
            "The business kept its existing Wix site and editing workflow, gained booking logic off-the-shelf apps couldn't handle, and keeps the commission it used to pay portals.",
        offer: "Direct-booking systems for hotels, homestays, clinics, salons or any business that sells time slots.",
        services: [
            { label: "Web Development", href: "/services/web-development" },
            { label: "Custom Software", href: "/services/custom-software" },
        ],
    },
    {
        slug: "lumaprints-order-automation",
        icon: Workflow,
        label: "Delivered by our team",
        title: "Automatic print-on-demand ordering with Lumaprints",
        categories: ["Automation & Integrations", "E-Commerce"],
        problem:
            "An online art-print store sold canvases and prints fulfilled by Lumaprints, a print-on-demand lab. Every order had to be re-entered by hand — slow, error-prone and delayed whenever no one was at the desk.",
        built: [
            "New paid orders are picked up from the store automatically",
            "Each product and size is mapped to the matching Lumaprints product and artwork",
            "Orders and shipping details are submitted through the Lumaprints API",
            "Unmatched or failed orders are flagged for review instead of silently dropping",
        ],
        tech: ["Lumaprints API", "Webhooks", "E-commerce integration"],
        outcome:
            "Orders go to production within minutes, around the clock, with no copy-paste mistakes in addresses or sizes.",
        offer: "Connecting your store to suppliers, print labs, warehouses, CRMs or accounting tools so orders and data move on their own.",
        services: [
            { label: "API Development & Integration", href: "/services/api-development" },
            { label: "E-Commerce", href: "/services/ecommerce-development" },
        ],
    },
    {
        slug: "course-selling-platform",
        icon: Play,
        label: "Delivered by our team",
        title: "Online course-selling platform",
        categories: ["Web Development", "E-Commerce"],
        problem:
            "An educator wanted to sell courses from their own website instead of giving a large cut to course marketplaces, and needed to add new courses without calling a developer each time.",
        built: [
            "An owner dashboard to upload course content, organise lessons and set prices",
            "A course catalogue with online checkout",
            "Student accounts where paid content unlocks only for buyers",
        ],
        tech: ["Course management", "Online payments", "Student accounts"],
        outcome:
            "The owner keeps full control of pricing, students and revenue, and can launch a new course the same day it's recorded.",
        offer: "Course platforms, membership sites and paid-content portals for trainers, coaches and institutes.",
        services: [
            { label: "Web Development", href: "/services/web-development" },
            { label: "E-Commerce", href: "/services/ecommerce-development" },
        ],
    },
];
