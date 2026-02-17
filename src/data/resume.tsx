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
import { SEO_KEYWORDS } from "./seo-keywords";
import { PROJECTS } from "./projects";
import { WORK } from "./work";

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
  avatarUrl: "/bhaskar.jpg",
  keywords: SEO_KEYWORDS,
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

  work: WORK,
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
  projects: PROJECTS,
} as const;
