import Link from "next/link";

const services = [
  {
    title: "Advanced Growth Marketing",
    summary:
      "Full-funnel strategy, experimentation, media, and analytics orchestrated under one roof.",
    bullets: [
      "Predictive measurement & MMM",
      "Always-on experimentation sprints",
      "Revenue dashboards & war rooms",
    ],
  },
  {
    title: "Web Design & Experience",
    summary:
      "Conversion-grade UI/UX systems, motion, and content design infused with AI personalization.",
    bullets: [
      "Research + journey choreography",
      "Design systems, 3D + Lottie",
      "CMS & localization-ready builds",
    ],
  },
  {
    title: "Web Applications",
    summary:
      "Secure, scalable platforms built with TypeScript, GraphQL, and edge-first deployment pipelines.",
    bullets: [
      "Modular architecture",
      "Internal tools + customer portals",
      "Performance + accessibility reviews",
    ],
  },
  {
    title: "AI Agents & Automation",
    summary:
      "Orvia agents that learn from your knowledge graph to qualify, support, and retain customers.",
    bullets: [
      "Knowledge ingestion + guardrails",
      "Workflow and CRM integrations",
      "24/7 monitoring + optimization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h1>One partner for growth, experience, product, and AI automation</h1>
          <p className="subline">
            Virtuprose Solutions Private Limited works as your embedded squad—from strategy and research to design,
            engineering, media, and intelligent agents.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="service-cards">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="book-demo">
        <div className="book-demo-shell">
          <div>
            <p className="eyebrow">Need a guided run?</p>
            <h2>Book a tailored service walkthrough</h2>
            <p>Walk through scope, pricing, and implementation timelines for every service line in one interactive call.</p>
            <Link className="btn primary" href="/contact">
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
