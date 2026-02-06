import { Icons } from "@/components/icons";
import { HomeIcon, FolderKanban, NotebookIcon, Radio } from "lucide-react";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { ClaudeAI } from "@/components/ui/svgs/claudeai";
import { Gemini } from "@/components/ui/svgs/gemini";
import { ChatGPT } from "@/components/ui/svgs/chatgpt";
import { Antigravity } from "@/components/ui/svgs/antigravity";
import { Cursor } from "@/components/ui/svgs/cursor";
import { Lovable } from "@/components/ui/svgs/lovable";
import { Grok } from "@/components/ui/svgs/grok";
import { GoogleAIStudio } from "@/components/ui/svgs/googleaistudio";
import { NotebookLM } from "@/components/ui/svgs/notebooklm";
import { Notion } from "@/components/ui/svgs/notion";
import { Discord } from "@/components/ui/svgs/discord";
import { Telegram } from "@/components/ui/svgs/telegram";
import { Github } from "@/components/ui/svgs/github";
import { Vercel } from "@/components/ui/svgs/vercel";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Redis } from "@/components/ui/svgs/redis";
import { Spotify } from "@/components/ui/svgs/spotify";
import { AppleMusic } from "@/components/ui/svgs/applemusic";

export const DATA = {
  name: "Bhaskar Saikia",
  initials: "BS",
  url: "https://bhaskarsaikia.in",
  location: "Golaghat, Assam, India",
  locationLink: "https://www.google.com/maps/place/golaghat",
  description:
    "Learning, experimenting, and shipping AI projects",
  summary:
    "I'm a 12th-grade student interested in AI, automation, and web development. I've built several working projects using Python, JavaScript, and AI APIs to solve real problems for myself and people around me.",
  avatarUrl: "/me.jpeg",
  keywords: [
    // Personal branding
    "bhaskar saikia",
    "bhaskar saikia ai",
    "bhaskar saikia portfolio",
    "bhaskarsaikia.in",
    "bhaskar saikia website",
    "bhaskar saikia github",
    "bhaskar saikia projects",
    "bhaskar saikia blog",
    "bhaskar saikia tech",
    "bhaskar saikia tech blog",
    "bhaskar saikia innovations",
    "bhaskar saikia skills",
    "bhaskar saikia personal website",
    "bhaskar saikia automation",
    "bhaskar saikia droplight",
    "nynx temp mail bhaskar",
    "online dev tools bhaskar",
    "ai tools by bhaskar",

    // Projects
    "droplight landing page",
    "nynx temp mail",
    "temporary email generator",
    "dev tools online",
    "cc generator tool",
    "fake identity generator",
    "ip lookup tool",
    "dns lookup online",
    "whois lookup tool",
    "password generator online",
    "qr code generator free",
    "json formatter online",
    "temporary mail privacy tool",
    "disposable email 24 hours",
    "free developer tools online",
    "instant private emails free",
    "protect privacy disposable mail",
    "web based developer utilities",
    "free online tools developers",

    // AI & Development
    "ai projects by bhaskar saikia",
    "young ai developer india",
    "12th grade ai developer",
    "teen ai programmer",
    "ai automation projects",
    "python ai projects",
    "javascript ai projects",
    "ai api projects",
    "generative ai projects india",
    "indian teen ai developer",
    "ai enthusiast india",
    "ai experiments 2025",
    "ai learning journey",
    "young web developer india",
    "full stack ai developer",
    "python automation scripts",
    "student ai portfolio",
    "ai side projects india",
    "next.js ai projects",
    "react ai application",
    "artificial intelligence student india",
    "teenage ai innovator",
    "ai project ideas for students",
    "how to build ai projects",
    "indian ai developer portfolio",
    "automation enthusiast",
    "ai + web development",
    "generative ai experiments",
    "langchain projects india",
    "llm projects student",
    "openai api projects",
    "young entrepreneur ai india",
    "high school ai developer",
    "class 12 ai passion",
    "ai and machine learning student",
    "indian student ai showcase",
    "future ai developer india",
    "creative ai projects",
    "automation with python india",
    "build ai tools 2025",
    "teen coder india",
    "ai portfolio india",
    "student developer portfolio",
    "ai beginner projects advanced",
    "young indian programmer",
    "ai project showcase",
    "learning ai as student",
    "ai development journey",
    "indian gen z ai developer",
    "practical ai projects",
    "real world ai automation",
    "ai side hustle student",
    "python javascript ai",
    "ai web apps india",
    "emerging ai talent india",
    "12th standard ai projects",
    "ai projects student 2026",
    "automation tools python",
    "javascript react ai",
    "real world student projects",
    "teen programmer india ai",
    "learning ai automation web",
    "shipping ai projects student",
    "ai enthusiast student india",
    "young ai web developer",

    // Technologies
    "react typescript projects",
    "tailwindcss shadcn ui",
    "magic ui aceternity ui",
    "cloudflare r2 vercel",
    "supabase redis fastapi",
    "python fastapi backend",
    "modern landing page typescript",
    "premium ui components landing",
    "python node.js react",
    "ai models platforms student",
    "ai coding tools 2026",

    // AI Tools & Platforms
    "claude gemini chatgpt grok",
    "google ai studio notebooklm",
    "cursor ai coding tool",
    "antigravity lovable dev",
    "vercel supabase hosting",
    "github notion discord telegram",
    "spotify apple music student",
    "indian teen developer portfolio",
  ] as const,
  skills: {
    languagesBackend: {
      title: "Languages & Backend",
      items: [
        { name: "Python", icon: Python },
        { name: "Node.js", icon: Nodejs },
      ],
    },
    frontendUI: {
      title: "Frontend & UI",
      items: [
        { name: "React", icon: ReactDark },
        { name: "Next.js", icon: NextjsIconDark },
      ],
    },
    aiModels: {
      title: "AI Models & Platforms",
      items: [
        { name: "Claude", icon: ClaudeAI },
        { name: "Gemini", icon: Gemini },
        { name: "ChatGPT", icon: ChatGPT },
        { name: "Grok", icon: Grok },
        { name: "Google AI Studio", icon: GoogleAIStudio },
        { name: "NotebookLM", icon: NotebookLM },
      ],
    },
    aiCodingTools: {
      title: "AI Coding Tools",
      items: [
        { name: "Cursor", icon: Cursor },
        { name: "Antigravity", icon: Antigravity },
        { name: "Lovable", icon: Lovable },
      ],
    },
    hostingInfra: {
      title: "Hosting & Infra",
      items: [
        { name: "Vercel", icon: Vercel },
        { name: "Supabase", icon: Supabase },
        { name: "Redis", icon: Redis },
      ],
    },
    workflow: {
      title: "Workflow",
      items: [
        { name: "GitHub", icon: Github },
        { name: "Notion", icon: Notion },
        { name: "Discord", icon: Discord },
        { name: "Telegram", icon: Telegram },
      ],
    },
    musicFocus: {
      title: "Music",
      items: [
        { name: "Spotify", icon: Spotify },
        { name: "Apple Music", icon: AppleMusic },
      ],
    },
  },
  workflow: {
    steps: [
      { title: "Idea", subtitle: "Problem Discovery" },
      { title: "Research", subtitle: "Learning & Planning" },
      { title: "Build", subtitle: "AI + Code" },
      { title: "Test", subtitle: "Refine & Iterate" },
      { title: "Ship", subtitle: "Deploy & Share" },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, iconName: "HomeIcon", label: "Home" },
    { href: "/projects", icon: FolderKanban, iconName: "FolderKanban", label: "Projects" },
    { href: "/presence", icon: Radio, iconName: "Radio", label: "Presence" },
    { href: "/blog", icon: NotebookIcon, iconName: "NotebookIcon", label: "Blog" },
  ],
  contact: {
    email: "hi@bhaskarsaikia.in",
    tel: "Null",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bhaskarsaikia-17/",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bhaskarsaikia17",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/BhaskarSaikia69",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:hi@bhaskarsaikia.in",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
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
        }
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
        }
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
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
