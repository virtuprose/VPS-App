import Link from "next/link";

const contactInfo = [
  {
    label: "Email",
    value: "info@virtuprose.com",
    href: "mailto:info@virtuprose.com",
  },
  {
    label: "US",
    value: "+1 415 230 2611",
    href: "tel:+14152302611",
  },
  {
    label: "India",
    value: "+91 76218 84841",
    href: "tel:+917621884841",
  },
  {
    label: "Kuwait",
    value: "+965 6998 4942",
    href: "tel:+96569984942",
  },
  {
    label: "Engagements",
    value: "Book a discovery workshop",
    href: "https://cal.com",
  },
];

export default function ContactPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <header className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Contact VirtuProse Solutions</p>
          <h1>Let’s build the most intelligent growth engine in your space</h1>
          <p className="subline">
            Virtuprose Solutions Private Limited plans, designs, and launches
            AI-native experiences for ambitious teams. Reach out with your
            objectives and we’ll assemble the strategy, talent, and technology
            to exceed them.
          </p>
        </div>
      </header>

      <section className="contact">
        <div className="contact-grid">
          <form
            className="contact-form"
            action="https://formspree.io/f/mbjnljny"
            method="POST"
          >
            <label>
              Name
              <input type="text" name="name" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
              />
            </label>
            <label>
              Project Type
              <select name="project" defaultValue="Growth Marketing">
                <option value="Growth Marketing">Growth Marketing</option>
                <option value="Web Design / UI">Web Design / UI</option>
                <option value="Web Application">Web Application</option>
                <option value="AI Agents">AI Agents</option>
              </select>
            </label>
            <label>
              Tell us more
              <textarea
                name="message"
                rows={5}
                placeholder="Timelines, success metrics, technical requirements..."
              />
            </label>
            <button className="btn primary" type="submit">
              Send to info@virtuprose.com
            </button>
          </form>

          <div className="contact-side">
            <div className="chat-widget">
              <div className="chat-header">
                <span>Orvia · AI Assistant</span>
                <span className="status">Online</span>
              </div>
              <div className="chat-body">
                <p className="bot">
                  Share KPIs, customer insights, or a product brief—Orvia will
                  prep a custom roadmap within 12 hours.
                </p>
                <p className="user">Need growth, design, and AI in one sprint.</p>
                <p className="bot">
                  Virtuprose Solutions Private Limited will map a staged program
                  covering GTM, UX, automation, and analytics.
                </p>
              </div>
            </div>
            <div className="globe-card">
              <div className="globe" />
              <p>
                Legal business name & billing label: Virtuprose Solutions Private
                Limited. Serving clients globally from a remote-first studio.
              </p>
              <div style={{ marginTop: "1rem", display: "grid", gap: "0.35rem" }}>
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="ghost-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}: {item.value}
                  </a>
                ))}
              </div>
              <Link className="ghost-link" href="/">
                ← Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
