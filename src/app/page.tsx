import Link from "next/link";
import { posts, projects, site, skills } from "@/lib/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const latestPosts = posts.slice(-2).reverse();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent)]"
        />
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <p className="animate-fade-up text-sm font-medium text-accent">
            Hi, I&apos;m {site.name} 👋
          </p>
          <h1 className="animate-fade-up mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            I build modern,{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              fast
            </span>{" "}
            web experiences.
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted">
            {site.description}
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              View my work
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent/10 hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Skills preview */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">What I work with</h2>
          <Link href="/about" className="text-sm font-medium text-accent hover:underline">
            More about me →
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured projects</h2>
          <Link href="/projects" className="text-sm font-medium text-accent hover:underline">
            All projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold group-hover:text-accent">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Latest posts */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">From the blog</h2>
          <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
            All posts →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <p className="text-xs text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </p>
              <h3 className="mt-2 text-lg font-semibold group-hover:text-accent">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-transparent p-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let&apos;s build something together</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
