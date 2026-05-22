import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Get in touch</h1>
        <p className="mt-6 text-lg text-muted">
          Have a question, an opportunity, or just want to say hello? Fill out the form below or
          email me directly at{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-accent hover:underline">
            {site.email}
          </a>
          .
        </p>
      </header>

      <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <ContactForm />
      </div>
    </div>
  );
}
