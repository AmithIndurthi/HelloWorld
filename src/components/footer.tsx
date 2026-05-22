import Link from "next/link";
import { companyLinks, practiceLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="fi">
        <div>
          <Link className="fb" href="/">
            TheTAG
          </Link>
          <p className="ft">
            TheTAG Ventures &amp; Partners.
            <br />
            Heart&nbsp;+&nbsp;Mind&nbsp;+&nbsp;Technology.
          </p>
        </div>
        <div>
          <div className="fh">Company</div>
          <ul className="fl">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="fh">Practices</div>
          <ul className="fl">
            {practiceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="fh">Contact Us</div>
          <div className="fc-item">
            <span>Call</span>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
          <div className="fc-item">
            <span>Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="fc-item">
            <span>Address</span>
            <p>{site.address}</p>
          </div>
        </div>
      </div>
      <div className="fbot">
        <div className="fcp">&copy; 2026 TheTAG Ventures &amp; Partners.</div>
        <div className="fleg">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
