import {
    Globe, Smartphone, LayoutTemplate, ShoppingCart, Settings,
    Lightbulb, Gamepad2, Cloud, Plug, TrendingUp, Wrench,
} from "lucide-react";

export const services = [
    {
        slug: "web-development",
        icon: Globe,
        title: "Web Development",
        shortDescription: "Custom websites, web applications, portals, and SaaS platforms.",
        description:
            "We design and build fast, scalable web applications using modern frameworks like Next.js and React, tailored to how your business actually operates.",
        features: [
            "Custom web application development",
            "SaaS platform architecture",
            "Performance & SEO optimization",
            "API integrations",
        ],
    },
    {
        slug: "mobile-app-development",
        icon: Smartphone,
        title: "Mobile App Development",
        shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
        description:
            "From concept to app store, we build mobile experiences that feel native, perform well, and scale with your user base.",
        features: [
            "iOS & Android native development",
            "Cross-platform (React Native)",
            "App Store & Play Store deployment",
            "Push notifications & offline support",
        ],
    },
    {
        slug: "ui-ux-design",
        icon: LayoutTemplate,
        title: "UI/UX Design",
        shortDescription: "User-centered interfaces, wireframes, prototypes, and design systems.",
        description:
            "Good design is invisible until it's missing. We craft interfaces that are intuitive, accessible, and consistent across your product.",
        features: [
            "User research & wireframing",
            "Interactive prototypes",
            "Design systems & component libraries",
            "Usability testing",
        ],
    },
    {
        slug: "ecommerce-development",
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        shortDescription: "Online stores, payment integrations, inventory, and order management.",
        description:
            "We build e-commerce platforms that handle real traffic and real transactions, with payment, inventory, and fulfillment wired in correctly from day one.",
        features: [
            "Custom storefronts",
            "Payment gateway integration",
            "Inventory & order management",
            "Multi-vendor marketplaces",
        ],
    },
    {
        slug: "custom-software",
        icon: Settings,
        title: "Custom Software Development",
        shortDescription: "Tailored business software, ERP, CRM, and workflow automation.",
        description:
            "Off-the-shelf software forces you to adapt to it. We build software that adapts to your workflow instead.",
        features: [
            "ERP & CRM systems",
            "Internal tooling & dashboards",
            "Workflow automation",
            "Legacy system modernization",
        ],
    },
    {
        slug: "ai-solutions",
        icon: Lightbulb,
        title: "AI & Automation",
        shortDescription: "AI agents, chatbots, workflow automation, and intelligent applications.",
        description:
            "We integrate AI where it actually moves the needle — automating repetitive work and building intelligent features into your product.",
        features: [
            "AI agents & chatbots",
            "LLM integration",
            "Process automation",
            "Predictive analytics",
        ],
    },
    {
        slug: "game-development",
        icon: Gamepad2,
        title: "Game Development",
        shortDescription: "2D, 3D, multiplayer, and interactive gaming experiences.",
        description:
            "From prototype to launch, we build games that run smoothly across platforms with clean, maintainable code.",
        features: [
            "2D & 3D game development",
            "Multiplayer & networking",
            "Cross-platform builds",
            "Game engine optimization",
        ],
    },
    {
        slug: "cloud-devops",
        icon: Cloud,
        title: "Cloud & DevOps",
        shortDescription: "VPS, AWS, Docker, CI/CD pipelines, monitoring, and infrastructure.",
        description:
            "We set up infrastructure that deploys reliably and scales without drama — CI/CD, containerization, and monitoring included.",
        features: [
            "CI/CD pipeline setup",
            "Docker & container orchestration",
            "Cloud infrastructure (AWS/VPS)",
            "Monitoring & alerting",
        ],
    },
    {
        slug: "api-development",
        icon: Plug,
        title: "API Development & Integration",
        shortDescription: "REST APIs, third-party integrations, and microservice architectures.",
        description:
            "We build APIs that are well-documented, secure, and easy for other teams to integrate with — and connect the third-party services you already rely on.",
        features: [
            "REST & GraphQL API design",
            "Third-party integrations",
            "Microservice architecture",
            "API security & rate limiting",
        ],
    },
    {
        slug: "seo-marketing",
        icon: TrendingUp,
        title: "SEO & Digital Marketing",
        shortDescription: "Technical SEO, GEO optimization, content strategy, and analytics.",
        description:
            "Traffic doesn't matter if it doesn't convert. We handle the technical SEO foundation and the strategy behind it.",
        features: [
            "Technical SEO audits",
            "GEO (AI search) optimization",
            "Content strategy",
            "Analytics & conversion tracking",
        ],
    },
    {
        slug: "maintenance",
        icon: Wrench,
        title: "Support & Maintenance",
        shortDescription: "Ongoing updates, performance optimization, and technical support.",
        description:
            "Software needs upkeep. We provide ongoing support so your product stays fast, secure, and up to date.",
        features: [
            "Ongoing bug fixes & updates",
            "Performance monitoring",
            "Security patching",
            "Priority technical support",
        ],
    },
];

export type Service = (typeof services)[number];