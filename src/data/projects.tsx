import { Icons } from "@/components/icons";

export const PROJECTS = [
    {
        title: "Lyrae",
        href: "https://lyrae.in",
        dates: "Feb 2026 - Present",
        active: true,
        showOnHomePage: true,
        showOnProjectsPage: true,
        description:
            "Lyrae helps you never miss a subscription renewal again. Track all your recurring payments in one simple place, get reminded before you're charged, and stay on top of your spending with smart email reminders and a unified dashboard.",
        technologies: [
            "React",
            "Next.js",
            "Typescript",
            "TailwindCSS",
            "Magic UI",
            "Shadcn UI",
            "Resend API",
            "Vercel",
        ],
        links: [
            {
                type: "Website",
                href: "https://lyrae.in",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video: "https://pub-bc8ac1fbdd9845d5816f234209228487.r2.dev/lyrae.mp4",
    },
    {
        title: "Droplight",
        href: "https://droplight.in",
        dates: "Feb 2026 - Present",
        active: true,
        showOnHomePage: true,
        showOnProjectsPage: true,
        description:
            "A stunning, modern landing page designed to captivate visitors with seamless animations, beautiful UI components, and a premium design aesthetic. Built with cutting-edge technologies for optimal performance and visual impact.",
        technologies: [
            "Next.js",
            "Typescript",
            "TailwindCSS",
            "Shadcn UI",
            "Magic UI",
            "Aceternity UI",
            "Cloudflare R2",
            "Vercel",
        ],
        links: [
            {
                type: "Website",
                href: "https://droplight.in",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video:
            "https://pub-bc8ac1fbdd9845d5816f234209228487.r2.dev/droplight.mp4",
    },
    {
        title: "Temporary Mail",
        href: "https://mail.nynx.in",
        dates: "Dec 2025 - Present",
        active: true,
        showOnHomePage: true,
        showOnProjectsPage: true,
        description:
            "Nynx Temp Mail - Advanced free instant private emails. Protect your privacy with disposable temporary email addresses that expire in 24 hours.",
        technologies: [
            "React",
            "Typescript",
            "Supabase",
            "TailwindCSS",
            "Shadcn UI",
            "Python",
            "FastAPI",
            "Redis",
            "Vercel",
        ],
        links: [
            {
                type: "Website",
                href: "https://mail.nynx.in",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video:
            "https://pub-bc8ac1fbdd9845d5816f234209228487.r2.dev/TempMail.mp4",
    },
    {
        title: "Flex",
        href: "https://flex.nynx.in",
        dates: "Dec 2025 - Present",
        active: true,
        showOnHomePage: false,
        showOnProjectsPage: true,
        description:
            "Flex is a free file sharing platform, Upload files securely and generate shareable links. No signup required. Fast, private.",
        technologies: [
            "React",
            "Typescript",
            "Supabase",
            "TailwindCSS",
            "Shadcn UI",
            "Python",
            "FastAPI",
            "Tebi.io",
            "Vercel",
        ],
        links: [
            {
                type: "Website",
                href: "https://flex.nynx.in",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video: "https://pub-bc8ac1fbdd9845d5816f234209228487.r2.dev/Flex-Files.mp4",
    },
    {
        title: "Dev Tools",
        href: "https://tools.nynx.in",
        dates: "Dec 2024 - Present",
        active: true,
        showOnHomePage: false,
        showOnProjectsPage: true,
        description:
            "Web Based 14+ free online developer tools: CC generator, fake identity, IP lookup, DNS lookup, WHOIS, password generator, QR code, JSON formatter, and more.",
        technologies: [
            "React",
            "Typescript",
            "TailwindCSS",
            "Shadcn UI",
            "Vercel",
        ],
        links: [
            {
                type: "Website",
                href: "https://tools.nynx.in",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video: "https://pub-bc8ac1fbdd9845d5816f234209228487.r2.dev/DevTools.mp4",
    },
    {
        title: "Licenium - License Management Dashboard",
        href: "https://licenium.bhaskar.pro",
        dates: "Jan 2026 - Present",
        active: true,
        showOnHomePage: true,
        showOnProjectsPage: true,
        description:
            "A full stack software license management dashboard with apps, licenses, analytics, audit logs features.",
        technologies: [
            "React",
            "Typescript",
            "Redis",
            "TailwindCSS",
            "Shadcn UI",
            "Python",
            "Flask",
            "Vercel",
        ],
        links: [
            {
                type: "Website",
                href: "https://licenium.bhaskar.pro",
                icon: <Icons.globe className="size-3" />,
            },
            {
                type: "Buy Now",
                href: "https://sparkboosts.mysellauth.com/product/licenium-license-management-dashboard",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "",
        video:
            "https://pub-bc8ac1fbdd9845d5816f234209228487.r2.dev/Licenium.mp4",
    },
] as const;
