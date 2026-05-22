import Link from "next/link";

export default function NotFound() {
  return (
    <div className="ty-wrap">
      <div className="ty-bg" />
      <div className="ty-grid" />
      <div className="ty-inner">
        <div className="ty-eyebrow">Error 404</div>
        <h1 className="ty-head">
          This page
          <br />
          <em>wandered off.</em>
        </h1>
        <p className="ty-sub">
          The page you were looking for does not exist or has moved. Let&apos;s get you back on
          track.
        </p>
        <div className="ty-actions" style={{ marginTop: "2.2rem" }}>
          <Link className="btn-p" href="/">
            Back to home
          </Link>
          <Link className="btn-g" href="/contact">
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}
