const pricing = [
  {
    title: "Web Experience Systems",
    price: "$18K+",
    includes: ["Strategy intensive", "UI/UX + motion", "Headless build + QA"],
  },
  {
    title: "Mobile Apps",
    price: "$35K+",
    includes: ["Discovery + product sprint", "React Native / Swift / Kotlin", "App Store launch playbook"],
  },
  {
    title: "Growth Marketing Retainer",
    price: "$12K+/mo",
    includes: ["GTM command center", "Paid + lifecycle experimentation", "Analytics + BI ops"],
  },
  {
    title: "Orvia AI Agents",
    price: "$6K+ setup",
    includes: ["Knowledge ingestion", "Workflow automation", "Monitoring + optimization"],
  },
];

export default function PricingPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h1>Transparent, value-based pricing in USD</h1>
          <p className="subline">
            Every engagement with Virtuprose Solutions Private Limited is tailored. These starting ranges help you plan
            budgets before we co-design scope.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="service-cards">
          {pricing.map((tier) => (
            <article key={tier.title} className="service-card">
              <h3>{tier.title}</h3>
              <p className="metric" style={{ fontSize: "2rem" }}>
                {tier.price}
              </p>
              <ul>
                {tier.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
