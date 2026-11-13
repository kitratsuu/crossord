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
        overview: [
            "Your website is often the first conversation a customer has with your business. We build sites and web applications that load fast, rank well, and turn visitors into enquiries, sign-ups and sales.",
            "From marketing websites to customer portals and full SaaS platforms, we handle architecture, front-end, back-end, integrations and deployment — so you work with one team from first wireframe to launch day and beyond.",
        ],
        features: [
            { title: "Marketing & corporate websites", description: "Fast, SEO-ready sites with a CMS your team can update without a developer." },
            { title: "Custom web applications", description: "Dashboards, portals and internal tools built around your real workflows." },
            { title: "SaaS platform development", description: "Multi-tenant architecture, subscriptions, roles and billing, built to scale." },
            { title: "Performance & Core Web Vitals", description: "Server rendering, image optimisation and caching for sub-second page loads." },
            { title: "Technical SEO foundations", description: "Structured data, sitemaps, metadata and clean URLs baked in from day one." },
            { title: "Integrations", description: "Payments, CRMs, analytics, email and any third-party API your business relies on." },
        ],
        outcomes: [
            "Faster pages that keep visitors engaged and rank higher on Google",
            "A codebase your team can maintain and extend",
            "More enquiries and conversions from the same traffic",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "Vercel", "AWS"],
        idealFor: ["Startups launching an MVP", "Businesses replacing an outdated website", "Teams that need a custom portal or dashboard"],
        faqs: [
            { q: "How long does it take to build a website?", a: "A focused marketing website typically takes 3–6 weeks. Custom web applications and SaaS platforms usually take 2–4 months depending on scope. We agree a timeline and milestones before work begins." },
            { q: "Will I be able to update the content myself?", a: "Yes. We can connect a headless CMS or build a simple admin area so your team can edit pages, blog posts and media without touching code." },
            { q: "Is the website SEO-friendly?", a: "Every site we build includes technical SEO foundations — metadata, structured data, sitemaps, fast load times and mobile-first layouts." },
            { q: "Do you provide hosting?", a: "We deploy to reliable platforms such as Vercel or AWS and can manage hosting for you, or hand everything over to your own accounts." },
        ],
    },
    {
        slug: "mobile-app-development",
        icon: Smartphone,
        title: "Mobile App Development",
        shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
        description:
            "From concept to app store, we build mobile experiences that feel native, perform well, and scale with your user base.",
        overview: [
            "Customers expect apps that are fast, intuitive and reliable. We design and develop mobile apps for iOS and Android that people actually keep on their phones.",
            "Whether you need a cross-platform app to reach both stores quickly or a native build for demanding performance, we take care of design, development, back-end services, testing and store submission.",
        ],
        features: [
            { title: "Cross-platform apps", description: "One React Native codebase for iOS and Android — faster to build and cheaper to maintain." },
            { title: "Native iOS & Android", description: "Swift and Kotlin builds when you need maximum performance or deep device access." },
            { title: "App back-ends & APIs", description: "Authentication, databases, file storage and real-time features to power your app." },
            { title: "Push notifications & offline mode", description: "Keep users engaged and let the app work without a connection." },
            { title: "Payments & subscriptions", description: "In-app purchases, Stripe and Razorpay integrations, done to store guidelines." },
            { title: "Store launch & releases", description: "App Store and Play Store submission, review handling and over-the-air updates." },
        ],
        outcomes: [
            "An app on both stores without building two separate products",
            "Smooth, native-feeling performance and high store ratings",
            "Analytics that show how people actually use your app",
        ],
        technologies: ["React Native", "Expo", "Swift", "Kotlin", "TypeScript", "Firebase", "Node.js", "PostgreSQL"],
        idealFor: ["Startups validating a product idea", "Businesses extending a web platform to mobile", "Companies building customer or field-team apps"],
        faqs: [
            { q: "Should I build native or cross-platform?", a: "For most products, cross-platform with React Native gives you both stores from one codebase at lower cost. We recommend native when an app relies heavily on device hardware, advanced graphics or platform-specific features." },
            { q: "How long does it take to build an app?", a: "A focused MVP usually takes 8–12 weeks. Larger apps with complex back-ends take longer. We ship in milestones so you see progress every couple of weeks." },
            { q: "Do you handle App Store and Play Store submission?", a: "Yes. We prepare store listings, handle submission and respond to review feedback until your app is live." },
            { q: "Can you take over an existing app?", a: "Yes. We start with a code and architecture review, fix critical issues, then continue development or maintenance." },
        ],
    },
    {
        slug: "ui-ux-design",
        icon: LayoutTemplate,
        title: "UI/UX Design",
        shortDescription: "User-centered interfaces, wireframes, prototypes, and design systems.",
        description:
            "Good design is invisible. We create interfaces that feel intuitive, look sharp, and guide users toward the actions that matter.",
        overview: [
            "Design decides whether people understand your product in seconds or leave in frustration. We combine user research, clear information architecture and polished visual design to create products people enjoy using.",
            "Every design is delivered as an interactive prototype and a developer-ready design system, so what gets built matches what was approved.",
        ],
        features: [
            { title: "User research & discovery", description: "Interviews, competitor analysis and journey mapping to understand your users." },
            { title: "Wireframes & information architecture", description: "Structure and flow tested before any visual polish is applied." },
            { title: "High-fidelity UI design", description: "Modern, on-brand interfaces for web, mobile and dashboards." },
            { title: "Interactive prototypes", description: "Clickable Figma prototypes for stakeholder reviews and user testing." },
            { title: "Design systems", description: "Reusable components, typography and colour tokens that keep products consistent." },
            { title: "UX audits", description: "A review of your existing product with prioritised, practical improvements." },
        ],
        outcomes: [
            "Higher conversion and lower drop-off across key journeys",
            "Faster development thanks to a shared component library",
            "A consistent, professional brand across every screen",
        ],
        technologies: ["Figma", "FigJam", "Framer", "Design tokens", "shadcn/ui", "Tailwind CSS"],
        idealFor: ["New products that need a strong first impression", "Existing products with usability issues", "Teams that need a scalable design system"],
        faqs: [
            { q: "What do I receive at the end of a design project?", a: "Figma files with all screens and states, an interactive prototype, and a documented component library ready for development." },
            { q: "Can you work with our existing brand?", a: "Yes. We extend your brand guidelines into a product design system, or help refresh them if needed." },
            { q: "Do you also build the designs?", a: "Yes — our designers and developers work as one team, which avoids the usual gaps between design and implementation." },
        ],
    },
    {
        slug: "ecommerce-development",
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        shortDescription: "Online stores, payment integrations, inventory, and order management.",
        description:
            "We build online stores that convert — with seamless checkout, inventory management, and integrations that keep operations running smoothly.",
        overview: [
            "An online store has to do two jobs: sell beautifully at the front, and run efficiently at the back. We build e-commerce experiences that load fast, build trust and make checkout effortless.",
            "We work with Shopify and headless commerce for brands that want flexibility, and build fully custom platforms when your business model needs it — marketplaces, B2B ordering, subscriptions and more.",
        ],
        features: [
            { title: "Shopify & headless commerce", description: "Custom Shopify themes or headless storefronts built with Next.js." },
            { title: "Custom e-commerce platforms", description: "Marketplaces, B2B portals and subscription commerce built from scratch." },
            { title: "Payment gateways", description: "Stripe, Razorpay, PayPal, UPI and cash-on-delivery workflows." },
            { title: "Inventory & order management", description: "Stock sync, fulfilment, shipping and returns connected to your operations." },
            { title: "Conversion optimisation", description: "Faster product pages, simpler checkout and trust signals that lift sales." },
            { title: "Product SEO", description: "Structured product data and fast pages that help products rank on Google." },
        ],
        outcomes: [
            "A store that loads fast and converts more visitors",
            "Less manual work processing orders and managing stock",
            "A platform that grows with your catalogue and traffic",
        ],
        technologies: ["Shopify", "Next.js", "Stripe", "Razorpay", "Medusa", "PostgreSQL", "Algolia"],
        idealFor: ["D2C brands launching or re-platforming", "Retailers moving online", "Businesses with B2B or marketplace models"],
        faqs: [
            { q: "Shopify or custom build — which is right for me?", a: "Shopify is ideal for most retail brands that want to launch quickly. A headless or custom build makes sense when you need unique experiences, complex pricing, marketplaces or deep integrations." },
            { q: "Can you migrate my existing store?", a: "Yes. We migrate products, customers and orders, and set up redirects so you keep your search rankings." },
            { q: "Which payment methods can you integrate?", a: "Cards, UPI, wallets, net banking, PayPal, buy-now-pay-later and cash on delivery through gateways like Stripe and Razorpay." },
        ],
    },
    {
        slug: "custom-software",
        icon: Settings,
        title: "Custom Software Development",
        shortDescription: "Tailored business software, ERP, CRM, and workflow automation.",
        description:
            "Off-the-shelf tools don't always fit. We build custom software designed around your exact processes, team, and goals.",
        overview: [
            "When spreadsheets and generic tools start slowing your team down, custom software gives you a system shaped around how your business really works.",
            "We build internal platforms, CRMs, ERPs and workflow tools that connect your data, automate repetitive tasks and give leadership clear visibility — owned by you, with no per-seat licence fees.",
        ],
        features: [
            { title: "Business process mapping", description: "We document how work flows today and design how it should flow tomorrow." },
            { title: "CRM & ERP systems", description: "Customer, sales, inventory and operations tools tailored to your team." },
            { title: "Internal tools & dashboards", description: "Admin panels and reporting dashboards with role-based access." },
            { title: "Workflow automation", description: "Approvals, notifications, document generation and scheduled jobs." },
            { title: "Legacy modernisation", description: "Move ageing systems to modern, secure and maintainable technology." },
            { title: "Data migration", description: "Bring existing data across safely with validation and zero data loss." },
        ],
        outcomes: [
            "Hours of manual work removed from every week",
            "One source of truth instead of scattered spreadsheets",
            "Software you own outright, with no licence lock-in",
        ],
        technologies: ["TypeScript", "Node.js", "Next.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
        idealFor: ["Growing teams outgrowing spreadsheets", "Businesses with unique processes", "Companies replacing legacy systems"],
        faqs: [
            { q: "Why build custom instead of buying software?", a: "Custom software fits your process instead of forcing you to change it, removes per-user licence costs, and can integrate with every tool you already use." },
            { q: "Who owns the code?", a: "You do. On completion you receive full ownership of the source code, documentation and infrastructure access." },
            { q: "Can it integrate with our existing tools?", a: "Yes — accounting software, CRMs, payment systems, email, WhatsApp and most tools with an API." },
        ],
    },
    {
        slug: "ai-solutions",
        icon: Lightbulb,
        title: "AI & Automation",
        shortDescription: "AI agents, chatbots, workflow automation, and intelligent applications.",
        description:
            "We help businesses put AI to practical use — from intelligent chatbots to automated workflows that save real hours every week.",
        overview: [
            "AI delivers value when it is connected to real business workflows. We build practical AI systems that answer customers, process documents, qualify leads and automate the repetitive work slowing your team down.",
            "We start with your highest-impact use case, prove it quickly, then scale — with the right guardrails for accuracy, privacy and cost.",
        ],
        features: [
            { title: "AI chatbots & assistants", description: "Support and sales assistants trained on your own documents and data." },
            { title: "AI agents", description: "Agents that research, update systems and complete multi-step tasks." },
            { title: "Document processing", description: "Extract data from invoices, forms and contracts automatically." },
            { title: "Workflow automation", description: "Connect your apps so data moves between them without manual entry." },
            { title: "Retrieval-augmented generation (RAG)", description: "Search and answers grounded in your company knowledge." },
            { title: "AI integration into products", description: "Add summarisation, recommendations and smart search to your app." },
        ],
        outcomes: [
            "Faster responses to customers, around the clock",
            "Hours saved every week on repetitive tasks",
            "Better decisions from data that was previously locked in documents",
        ],
        technologies: ["Claude", "OpenAI", "LangChain", "Vector databases", "Python", "n8n", "Node.js", "PostgreSQL"],
        idealFor: ["Support teams handling repetitive questions", "Operations teams processing documents", "Products adding AI features"],
        faqs: [
            { q: "Where should we start with AI?", a: "Start with a repetitive, high-volume task where accuracy can be measured — such as support queries, lead qualification or document processing. We help you identify and prove that first use case." },
            { q: "Is our data safe?", a: "We design solutions so your data is not used to train public models, apply access controls, and can deploy on infrastructure you control when required." },
            { q: "How do you prevent wrong answers?", a: "We ground responses in your own data, add validation and human review where it matters, and test against real examples before launch." },
        ],
    },
    {
        slug: "game-development",
        icon: Gamepad2,
        title: "Game Development",
        shortDescription: "2D, 3D, multiplayer, and interactive gaming experiences.",
        description:
            "We build engaging 2D and 3D games and interactive experiences across web, mobile, and desktop platforms.",
        overview: [
            "From casual mobile games to multiplayer experiences and interactive brand campaigns, we combine game design, art direction and engineering to create experiences players come back to.",
            "We handle the full pipeline — prototyping, gameplay, art integration, back-end services, monetisation and launch.",
        ],
        features: [
            { title: "2D & 3D game development", description: "Games built in Unity and other proven engines." },
            { title: "Multiplayer & real-time", description: "Matchmaking, leaderboards and real-time networking." },
            { title: "Web & mobile games", description: "Browser games and mobile titles optimised for performance." },
            { title: "Gamified experiences", description: "Interactive campaigns, learning tools and loyalty experiences." },
            { title: "Monetisation", description: "In-app purchases, ads and reward systems that respect players." },
            { title: "Live ops", description: "Updates, events and analytics after launch." },
        ],
        outcomes: [
            "A playable prototype early to validate the idea",
            "Smooth performance across target devices",
            "A game ready to launch and grow",
        ],
        technologies: ["Unity", "C#", "Three.js", "WebGL", "Phaser", "Node.js", "WebSockets"],
        idealFor: ["Indie studios and game founders", "Brands building interactive campaigns", "Education and training products"],
        faqs: [
            { q: "Which platforms do you build for?", a: "Web browsers, iOS, Android and desktop. We recommend platforms based on your audience and goals." },
            { q: "Can you start from just an idea?", a: "Yes. We help shape the concept, build a playable prototype and refine the gameplay before full production." },
        ],
    },
    {
        slug: "cloud-devops",
        icon: Cloud,
        title: "Cloud & DevOps",
        shortDescription: "VPS, AWS, Docker, CI/CD pipelines, monitoring, and infrastructure.",
        description:
            "We set up and manage reliable infrastructure so your product stays fast, secure, and available — without the operational headaches.",
        overview: [
            "Downtime, slow deployments and surprise cloud bills all cost money. We design infrastructure that is reliable, secure and right-sized for your traffic.",
            "We automate builds, testing and deployments so your team can ship updates confidently, and set up monitoring so problems are caught before customers notice.",
        ],
        features: [
            { title: "Cloud architecture", description: "AWS, GCP and VPS setups designed for reliability and cost." },
            { title: "CI/CD pipelines", description: "Automated testing and deployments on every change." },
            { title: "Containerisation", description: "Docker and container orchestration for consistent environments." },
            { title: "Monitoring & alerting", description: "Uptime, logs, error tracking and performance metrics." },
            { title: "Security hardening", description: "Firewalls, SSL, secrets management, backups and access control." },
            { title: "Cloud cost optimisation", description: "Find and remove waste in your cloud bill." },
        ],
        outcomes: [
            "Fewer outages and faster recovery",
            "Deployments in minutes instead of hours",
            "Lower, predictable infrastructure costs",
        ],
        technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Grafana"],
        idealFor: ["Products preparing for growth", "Teams with manual deployments", "Businesses with rising cloud bills"],
        faqs: [
            { q: "Can you migrate us to the cloud?", a: "Yes. We plan and execute migrations from shared hosting, on-premise servers or other providers with minimal downtime." },
            { q: "Do you offer ongoing infrastructure management?", a: "Yes — monitoring, updates, backups and incident response as part of a monthly support plan." },
        ],
    },
    {
        slug: "api-development",
        icon: Plug,
        title: "API Development & Integration",
        shortDescription: "REST APIs, third-party integrations, and microservice architectures.",
        description:
            "We design clean, well-documented APIs and connect the tools your business relies on so data flows where it needs to.",
        overview: [
            "Modern businesses run on many tools — and they only work well when they talk to each other. We build secure, well-documented APIs and integrations that connect your systems reliably.",
            "Whether you are exposing your platform to partners, connecting a CRM to your website, or breaking a monolith into services, we design for security, performance and long-term maintainability.",
        ],
        features: [
            { title: "REST & GraphQL APIs", description: "Versioned, documented APIs with authentication and rate limiting." },
            { title: "Third-party integrations", description: "Payments, CRMs, ERPs, accounting, messaging and shipping providers." },
            { title: "Webhooks & real-time sync", description: "Event-driven data flows that keep systems in sync." },
            { title: "Microservices", description: "Split large systems into independently deployable services." },
            { title: "API documentation", description: "OpenAPI specs and developer docs your partners can use." },
            { title: "API security", description: "OAuth, API keys, validation and audit logging." },
        ],
        outcomes: [
            "No more copying data between systems by hand",
            "A platform partners can integrate with easily",
            "Secure, reliable data exchange",
        ],
        technologies: ["Node.js", "TypeScript", "GraphQL", "OpenAPI", "PostgreSQL", "Redis", "RabbitMQ", "OAuth 2.0"],
        idealFor: ["SaaS products opening up to partners", "Businesses connecting many tools", "Teams modernising a monolith"],
        faqs: [
            { q: "Can you integrate with a tool that has poor documentation?", a: "Usually, yes. We investigate the available API, test thoroughly and build in error handling and retries for reliability." },
            { q: "Do you document the APIs you build?", a: "Always. You get an OpenAPI specification and readable documentation." },
        ],
    },
    {
        slug: "seo-marketing",
        icon: TrendingUp,
        title: "SEO & Digital Marketing",
        shortDescription: "Technical SEO, GEO optimization, content strategy, and analytics.",
        description:
            "We help businesses get found — through technical SEO, content strategy, and data-driven marketing that drives real growth.",
        overview: [
            "Great products still need to be found. We improve your visibility on Google and in AI-powered search through technical SEO, useful content and clear measurement.",
            "Because we are engineers as well as marketers, we fix the technical issues other agencies only report — site speed, indexing, structured data and site architecture.",
        ],
        features: [
            { title: "Technical SEO audits", description: "Crawlability, indexing, speed and structured data issues found and fixed." },
            { title: "On-page optimisation", description: "Titles, headings, internal linking and content structure." },
            { title: "Content strategy", description: "Keyword research and content plans built around what your customers search." },
            { title: "Generative engine optimisation (GEO)", description: "Help your brand appear in AI answers from ChatGPT, Gemini and others." },
            { title: "Local SEO", description: "Google Business Profile and local search visibility." },
            { title: "Analytics & reporting", description: "Search Console, GA4 and dashboards that track real results." },
        ],
        outcomes: [
            "More organic traffic from people ready to buy",
            "Clear reporting on what is working",
            "A technically healthy site that search engines trust",
        ],
        technologies: ["Google Search Console", "Google Analytics 4", "Ahrefs", "Semrush", "Schema.org", "Looker Studio"],
        idealFor: ["Businesses with low organic traffic", "New websites building authority", "Companies relying too heavily on paid ads"],
        faqs: [
            { q: "How long does SEO take to show results?", a: "Technical fixes can show impact within weeks, while content and authority growth typically builds over 3–6 months." },
            { q: "What is GEO?", a: "Generative engine optimisation helps your content get cited by AI assistants and AI search results, using clear structure, authoritative content and structured data." },
            { q: "Do you guarantee first-page rankings?", a: "No honest agency can guarantee rankings. We commit to best-practice work, transparent reporting and steady, measurable improvement." },
        ],
    },
    {
        slug: "maintenance",
        icon: Wrench,
        title: "Support & Maintenance",
        shortDescription: "Ongoing updates, performance optimization, and technical support.",
        description:
            "Software needs upkeep. We provide ongoing support so your product stays fast, secure, and up to date.",
        overview: [
            "Launch is the beginning, not the end. Dependencies age, security issues appear and users ask for improvements. Our support plans keep your product healthy so you can focus on your business.",
            "We support products we built and products built by others — starting with a health check so we know exactly what we are taking on.",
        ],
        features: [
            { title: "Bug fixes & updates", description: "Issues resolved quickly with clear communication." },
            { title: "Security patching", description: "Dependency and framework updates to close vulnerabilities." },
            { title: "Performance monitoring", description: "Uptime, speed and error tracking with proactive fixes." },
            { title: "Backups & recovery", description: "Regular backups and tested recovery procedures." },
            { title: "Feature enhancements", description: "Small improvements and new features delivered each month." },
            { title: "Priority support", description: "Agreed response times for critical issues." },
        ],
        outcomes: [
            "A secure, up-to-date product",
            "Fewer surprises and faster fixes",
            "A dependable technical partner on call",
        ],
        technologies: ["Sentry", "UptimeRobot", "GitHub", "Docker", "AWS", "Vercel"],
        idealFor: ["Businesses without an in-house dev team", "Products built by a previous agency", "Teams that need extra capacity"],
        faqs: [
            { q: "Can you maintain a product built by another team?", a: "Yes. We start with a code and infrastructure review, then take over maintenance with a clear plan." },
            { q: "How do support plans work?", a: "Plans include a monthly allocation of hours, monitoring and agreed response times. We tailor the plan to your product and needs." },
        ],
    },
];

export const processSteps = [
    { title: "Discover", description: "We learn your goals, users and constraints, and agree scope, timeline and success metrics." },
    { title: "Design", description: "Wireframes, architecture and prototypes so you see the solution before it is built." },
    { title: "Build", description: "Development in short milestones with regular demos and transparent progress." },
    { title: "Launch & grow", description: "Testing, deployment and ongoing support to keep improving after go-live." },
];

export type Service = (typeof services)[number];
