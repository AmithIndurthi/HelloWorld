"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = { ok: true, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="cf-submit" type="submit" disabled={pending}>
      {pending ? "Sending…" : "Send Message →"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form className="contact-form" action={formAction} noValidate>
      <p style={{ display: "none" }}>
        <label>
          Bot field: <input name="bot-field" />
        </label>
      </p>
      <div className="cf-head">
        <div className="cf-title">Send us a message</div>
        <p className="cf-sub">
          Read personally by a founding principal. 48-hour response with an honest assessment of
          fit.
        </p>
      </div>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="fname">First Name *</label>
          <input type="text" id="fname" name="first_name" placeholder="First name" required />
          {state.errors?.first_name && <span className="cf-error">{state.errors.first_name}</span>}
        </div>
        <div className="cf-field">
          <label htmlFor="lname">Last Name *</label>
          <input type="text" id="lname" name="last_name" placeholder="Last name" required />
          {state.errors?.last_name && <span className="cf-error">{state.errors.last_name}</span>}
        </div>
      </div>
      <div className="cf-row">
        <div className="cf-field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" placeholder="name@organization.com" required />
          {state.errors?.email && <span className="cf-error">{state.errors.email}</span>}
        </div>
        <div className="cf-field">
          <label htmlFor="org">Organization</label>
          <input type="text" id="org" name="organization" placeholder="Organization name" />
        </div>
      </div>
      <div className="cf-field">
        <label htmlFor="practice">Practice Area of Interest</label>
        <select id="practice" name="practice_area" defaultValue="">
          <option value="">Select one (optional)</option>
          <option value="technology-advisory">Technology Advisory &amp; Consulting</option>
          <option value="strategic-ventures">Strategic Ventures &amp; Partnerships</option>
          <option value="design-studio">Design Studio</option>
          <option value="multiple">Multiple / Not sure yet</option>
          <option value="founding-partner">Founding-Partner Engagement (reduced rate)</option>
          <option value="companion-notify">Notify me about the Well-being Companion</option>
        </select>
      </div>
      <div className="cf-field">
        <label htmlFor="message">What are you working on? *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about the challenge, goal, or opportunity. No need to have everything figured out."
          required
        />
        {state.errors?.message && <span className="cf-error">{state.errors.message}</span>}
      </div>
      <SubmitButton />
      <p className="cf-note">
        We respond to every message within 48 hours. Your information is never shared.
      </p>
    </form>
  );
}
