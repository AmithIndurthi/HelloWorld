import type { Metadata } from "next";
import Link from "next/link";
import { site, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${site.name}, a ${site.role.toLowerCase()} passionate about the modern web.`,
};

const timeline = [
  {
    year: "2026",
    title: "Building on the modern web",
    body: "Diving into Next.js, React, and TypeScript — shipping projects and writing about what I learn.",
  },
  {
    year: "2025",
    title: "Found my footing with JavaScript",
    body: "Moved beyond static pages into interactive apps, APIs, and the wider front-end ecosystem.",
  },
  {
    year: "2024",
    title: "First lines of HTML & CSS",
    body: "Built my first web page and got hooked on turning ideas into things people can actually use.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About me</h1>
        <p className="mt-6 text-lg text-muted">
          I&apos;m {site.name}, a {site.role.toLowerCase()} who loves the craft of building for the
          web. I care about clean code, thoughtful design, and shipping things that feel fast and
          effortless to use.
        </p>
        <p className="mt-4 text-lg text-muted">
          I&apos;m always learning — whether it&apos;s a new framework, a CSS technique, or a better
          way to structure a project. This site is part portfolio, part learning journal.
        </p>
      </header>

      {/* Skills with progress bars */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted">{skill.level}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">My journey</h2>
        <ol className="mt-8 space-y-8 border-l border-border pl-6">
          {timeline.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
              <p className="text-sm font-semibold text-accent">{item.year}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="text-xl font-bold tracking-tight">Want to work together?</h2>
        <p className="mt-2 text-muted">I&apos;m open to new opportunities and collaborations.</p>
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Contact me
        </Link>
      </section>
    </div>
  );
}
