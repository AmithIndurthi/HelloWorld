import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and articles on web development, learning, and building things.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-6 text-lg text-muted">
          Notes from my journey learning and building on the web.
        </p>
      </header>

      <div className="mt-12 divide-y divide-border">
        {sorted.map((post) => (
          <article key={post.slug} className="py-8 first:pt-0">
            <p className="text-xs text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
