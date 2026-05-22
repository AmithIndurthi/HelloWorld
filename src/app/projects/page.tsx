import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed and built on the web.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Projects</h1>
        <p className="mt-6 text-lg text-muted">
          A selection of things I&apos;ve built while learning and experimenting. Each one taught me
          something new.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const isExternal = project.href.startsWith("http");
          const isPlaceholder = project.href === "#";

          const card = (
            <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold group-hover:text-accent">{project.title}</h2>
                {project.featured && (
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-3 flex-1 text-sm text-muted">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {!isPlaceholder && (
                <span className="mt-5 text-sm font-medium text-accent">
                  {isExternal ? "Visit project ↗" : "View →"}
                </span>
              )}
            </article>
          );

          if (isPlaceholder) {
            return <div key={project.slug}>{card}</div>;
          }

          return isExternal ? (
            <a key={project.slug} href={project.href} target="_blank" rel="noopener noreferrer">
              {card}
            </a>
          ) : (
            <Link key={project.slug} href={project.href}>
              {card}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
