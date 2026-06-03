"use client";

import { useSyncExternalStore } from "react";

const KEY = "thetag_cc";
const EVENT = "thetag-cc-change";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

function getSnapshot() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return "dismissed";
  }
}

function getServerSnapshot(): string | null {
  return "dismissed";
}

function set(value: "y" | "n") {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    // ignore storage errors
  }
  window.dispatchEvent(new Event(EVENT));
}

export function CookieBanner() {
  const choice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (choice) return null;

  return (
    <div id="cookie-banner" className="visible" role="region" aria-label="Cookie consent">
      <p className="ck-txt">
        We use analytics to improve your experience. No personal data is sold.{" "}
        <a href="#">Privacy Policy</a>.
      </p>
      <div className="ck-acts">
        <button className="ck-ok" onClick={() => set("y")}>
          Accept
        </button>
        <button className="ck-no" onClick={() => set("n")}>
          Decline
        </button>
      </div>
    </div>
  );
}
