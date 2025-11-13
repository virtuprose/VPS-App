import Image from "next/image";
import Link from "next/link";
import { contactNumbers, legalName, navLinks, primaryEmail } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Image src="/assets/vpslogo.png" alt="VirtuProse logo" width={68} height={68} />
        <strong>VirtuProse Solutions</strong>
        <p>Legal business name &amp; billing label:</p>
        <p>{legalName}</p>
        <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
        <div className="phone-block">
          {contactNumbers.map((number) => (
            <span key={number.label}>
              {number.flag ? (
                <Image src={number.flag} alt={`${number.label} flag`} width={20} height={14} loading="lazy" />
              ) : null}
              {number.label}: {number.value}
            </span>
          ))}
        </div>
      </div>
      <div className="footer-links webflow-style">
        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/orvia">Orvia</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div>
          <h4>Resources</h4>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/refund">Refund &amp; Cancellation</Link>
        </div>
        <div>
          <h4>Navigation</h4>
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h4>Connect</h4>
          <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
          <a
            href="https://www.linkedin.com/company/106328591/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/virtuprose"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
