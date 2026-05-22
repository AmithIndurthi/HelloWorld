export const site = {
  name: "Amith Indurthi",
  role: "Web Developer",
  tagline: "I build modern, fast, and accessible web experiences.",
  description:
    "Personal site of Amith Indurthi — a developer learning and building on the modern web with Next.js, React, and TypeScript.",
  url: "https://helloworld.example.com",
  email: "amithkumar.i@gmail.com",
  social: {
    github: "https://github.com/amithindurthi",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type Skill = { name: string; level: number };

export const skills: Skill[] = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript / TypeScript", level: 80 },
  { name: "React", level: 78 },
  { name: "Next.js", level: 72 },
  { name: "Node.js", level: 65 },
  { name: "Tailwind CSS", level: 82 },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Personal Portfolio",
    summary:
      "This very site — a multi-page Next.js app with dark mode, server actions, and a fully responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "/",
    featured: true,
  },
  {
    slug: "task-tracker",
    title: "Task Tracker",
    summary:
      "A small productivity app for organizing daily tasks with filtering, persistence, and keyboard shortcuts.",
    tags: ["React", "LocalStorage"],
    href: "#",
    featured: true,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary:
      "A clean dashboard that fetches forecasts from a public API and visualizes them with charts.",
    tags: ["JavaScript", "REST API", "Charts"],
    href: "#",
    featured: true,
  },
  {
    slug: "markdown-notes",
    title: "Markdown Notes",
    summary:
      "A distraction-free note-taking app with live Markdown preview and full-text search.",
    tags: ["React", "Markdown"],
    href: "#",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "why-i-started-learning-web-dev",
    title: "Why I Started Learning Web Development",
    date: "2026-04-02",
    readingTime: "3 min read",
    excerpt:
      "The web is the most accessible platform ever built. Here is what pulled me in and how I am approaching the journey.",
    content: [
      "I have always been fascinated by how a few lines of text can turn into something millions of people can use from anywhere in the world. That is the magic of the web.",
      "When I started, the sheer number of tools and frameworks felt overwhelming. My advice to anyone in the same spot: pick one path and go deep before going wide. The fundamentals — HTML, CSS, and JavaScript — transfer everywhere.",
      "This blog is my space to document what I learn, the mistakes I make, and the small wins along the way. Writing things down forces clarity, and hopefully it helps someone else too.",
    ],
  },
  {
    slug: "understanding-the-next-js-app-router",
    title: "Understanding the Next.js App Router",
    date: "2026-04-20",
    readingTime: "5 min read",
    excerpt:
      "Server components, layouts, and file-based routing changed how I think about building pages. A beginner-friendly tour.",
    content: [
      "The App Router introduces a mental model where the file system is your routing table. A folder becomes a route segment, and a page.tsx file makes that segment publicly accessible.",
      "What surprised me most was that components render on the server by default. You only opt into client-side interactivity with the 'use client' directive when you actually need state or browser APIs.",
      "Layouts are the other big idea. A layout wraps the pages beneath it and preserves state across navigations, which is perfect for shared navigation bars and footers like the ones on this site.",
    ],
  },
  {
    slug: "shipping-my-first-deployment",
    title: "Shipping My First Deployment",
    date: "2026-05-10",
    readingTime: "4 min read",
    excerpt:
      "Going from localhost to a live URL is a rush. Here is the deployment workflow that finally clicked for me.",
    content: [
      "For the longest time, deployment felt like a black box. The thing that helped was treating it as just another part of the build: write code, commit, push, deploy.",
      "Modern platforms make this almost trivial — connect a Git repository, and every push to the main branch ships to production automatically. Preview deployments for branches are a game changer for reviewing work.",
      "The lesson: deploy early and often. A live site you can share is infinitely more motivating than a perfect one that never leaves your machine.",
    ],
  },
];
