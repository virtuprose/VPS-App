import Link from "next/link";

const problemPoints = [
  "Slow replies kill conversions",
  "Missed DMs and calls go unanswered",
  "Manual booking workflows frustrate teams",
  "Staff gets buried in repetitive questions",
  "Customers abandon outdated forms",
  "Revenue leaks because responses take too long",
];

const automationHighlights = [
  "Appointment booking with availability checks",
  "Payments inside chat using Stripe, Razorpay, or Tap",
  "Real-time product search and recommendations",
  "Lead capture, qualification, and routing",
  "Automatic CRM/POS updates",
  "Confidence-based handoff to humans",
];

const whyDifferent = [
  "Performs transactions (books, charges, confirms)",
  "Connects to live databases, inventory, and calendars",
  "Triggers workflows inside CRM/POS tools automatically",
];

const useCases = ["Clinics & salons", "Real estate teams", "E-commerce brands", "Service businesses"];

const featureBlocks = [
  { title: "Appointment booking", copy: "Checks live availability, books, reschedules, cancels, and sends reminders." },
  { title: "Payments inside chat", copy: "Collects deposits or full payments directly inside WhatsApp or web widgets." },
  { title: "Live product catalog search", copy: "Filters by price, size, or attributes and drops deep links with media." },
  { title: "Lead qualification & routing", copy: "Captures contact/budget, scores intent, and routes to CRM or sales chat." },
  { title: "Human handoff", copy: "Escalates on low confidence, gives agents full transcripts, and logs outcomes." },
  { title: "Multi-channel support", copy: "Embed on your site, inside apps, and across WhatsApp with one brain." },
  { title: "Integrations everywhere", copy: "Connects to CRMs, databases, calendars, and payment gateways via APIs." },
  { title: "Analytics & reporting", copy: "Tracks sessions, bookings, revenue, top intents, and time saved in one panel." },
];

const workflowSteps = [
  "User sends a question via WhatsApp, web, or app widget.",
  "Orvia identifies intent instantly.",
  "It pulls real-time data for availability, inventory, or pricing.",
  "It books, charges, or replies in under 10 seconds.",
  "If the scenario needs a human, it hands off with full context.",
];

const industries = [
  {
    label: "Clinics & Salons",
    bullets: ["Automatic booking & rescheduling", "Reminders + payments before visits", "Cuts front-desk workload"],
  },
  {
    label: "Real Estate",
    bullets: ["Property discovery + matching", "Tour scheduling & follow-ups", "Lead scoring with instant dossiers"],
  },
  {
    label: "E-commerce",
    bullets: ["Product filtering + price checks", "Cart building + checkout links", "Post-purchase support 24/7"],
  },
  {
    label: "Service Providers",
    bullets: ["Smart lead capture", "Calendar booking & reminders", "Deposits within the conversation"],
  },
];

const differentiators = [
  "Transaction-first design (far beyond FAQ bots)",
  "Multi-currency & localization ready",
  "White-label mode for agencies",
  "API-first architecture for POS/ERP/CRM",
  "Real-time bookings + payments",
  "Works across every platform you use",
  "10-second average response time",
  "Enterprise-grade stack and hosting",
];

const pricingTiers = [
  { title: "Starter", price: "$49/mo", detail: "1 channel · 1k messages · basic analytics" },
  { title: "Pro", price: "$149/mo", detail: "Multi-channel · payments + bookings · 10k messages" },
  { title: "Business", price: "$299/mo", detail: "CRM integrations · advanced analytics · SLA support" },
  { title: "White-label", price: "$699 setup + $99/bot/mo", detail: "Agency plan with custom branding and management" },
];

const testimonials = [
  "“Response time dropped to seconds and bookings jumped instantly.”",
  "“Sales team focuses on qualified leads—Orvia handles the rest.”",
  "“We replaced outdated forms and doubled conversion from DMs.”",
];

const securityPoints = [
  "Data minimization across every workflow",
  "Encrypted API keys with scheduled rotation",
  "Never stores card data—payments handled by providers",
  "Stripe/Razorpay/Tap manage PCI compliance",
  "Regional data residency options via Supabase",
];

const faqs = [
  { question: "How long does WhatsApp approval take?", answer: "Typically 2–5 business days using Meta Cloud API or 360dialog." },
  { question: "What is the setup time?", answer: "Most teams launch pilots inside two weeks once data sources are connected." },
  { question: "Which languages are supported?", answer: "English, Arabic, Hindi, plus auto-detect for additional locales." },
  { question: "Which CRMs integrate with Orvia?", answer: "Salesforce, HubSpot, Pipedrive, Zoho, plus webhook/API connectors." },
  { question: "Does Orvia replace staff?", answer: "No—it handles repetitive flows so teams focus on high-value conversations." },
  { question: "How do payments work?", answer: "Stripe, Razorpay, or Tap send hosted checkout links inside the conversation." },
  { question: "Are there usage limits?", answer: "Each plan includes message thresholds; add-ons are available as you scale." },
  { question: "How is data secured?", answer: "All data is encrypted in transit and at rest with strict role-based access." },
];

export default function OrviaPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Orvia · AI Revenue Assistant</p>
          <h1>The AI assistant that books, charges, and closes for you</h1>
          <p className="subline">
            Orvia connects to your live databases, calendars, inventory, and CRM so it can book appointments, take payments,
            and run workflows across WhatsApp, websites, and apps.
          </p>
          <div className="cta-group">
            <Link className="btn primary" href="/contact">
              Book Demo
            </Link>
            <a className="btn secondary" href="#demo">
              See Live Demo
            </a>
          </div>
          <p className="trust-line">10-second responses · 24/7 accuracy · 15–30% more bookings & sales</p>
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Where teams struggle</p>
          <h2>The real problems Orvia wipes out</h2>
        </div>
        <div className="service-cards">
          {problemPoints.map((point) => (
            <article key={point} className="service-card">
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Orvia snapshot</p>
          <h2>Automation built for clinics, real estate, e-commerce, and services</h2>
        </div>
        <div className="service-cards">
          <article className="service-card">
            <h3>What it automates</h3>
            <ul>
              {automationHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="service-card">
            <h3>Why it’s different</h3>
            <ul>
              {whyDifferent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="service-card">
            <h3>Real deployments</h3>
            <ul>
              {useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Core capabilities</p>
          <h2>Feature blocks that power every interaction</h2>
        </div>
        <div className="service-cards">
          {featureBlocks.map((feature) => (
            <article key={feature.title} className="service-card">
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Five steps from query to booked & paid</h2>
        </div>
        <ol className="workflow">
          {workflowSteps.map((step, index) => (
            <li key={step}>
              <strong>Step {index + 1}.</strong> {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Industry playbooks</p>
          <h2>Orvia adapts to every operator</h2>
        </div>
        <div className="service-cards">
          {industries.map((industry) => (
            <article key={industry.label} className="service-card">
              <h3>{industry.label}</h3>
              <ul>
                {industry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Why Orvia wins</p>
          <h2>Differentiators teams feel immediately</h2>
        </div>
        <div className="service-cards">
          <article className="service-card">
            <ul>
              {differentiators.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="demo-preview" id="demo">
        <div className="section-heading">
          <p className="eyebrow">Demo widget</p>
          <h2>See Orvia embedded on any page</h2>
          <p className="subline">
            Drop the widget onto your site or landing page. Customers chat, book, and pay without leaving the experience—
            and your team watches the live transcript.
          </p>
        </div>
        <div className="demo-box">
          <p>Widget preview placeholder — developer can insert Lottie/video here.</p>
        </div>
        <Link className="btn primary" href="/contact">
          Try the Demo
        </Link>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Simple, transparent plans</h2>
        </div>
        <div className="service-cards">
          {pricingTiers.map((tier) => (
            <article key={tier.title} className="service-card">
              <h3>{tier.title}</h3>
              <p className="metric" style={{ fontSize: "2rem" }}>
                {tier.price}
              </p>
              <p>{tier.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Teams feel the lift immediately</h2>
        </div>
        <div className="testimonial-carousel" style={{ justifyContent: "center" }}>
          {testimonials.map((quote) => (
            <article key={quote} className="testimonial" style={{ minWidth: "auto" }}>
              <p>{quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">Security & compliance</p>
          <h2>Enterprise-grade from day one</h2>
        </div>
        <div className="service-cards">
          <article className="service-card">
            <ul>
              {securityPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Everything you’re asking about Orvia</h2>
        </div>
        <div className="service-cards">
          {faqs.map((faq) => (
            <article key={faq.question} className="service-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-content">
          <h3>Deploy Orvia and capture every opportunity</h3>
          <p>Book a full walkthrough or chat with our sales desk on WhatsApp.</p>
        </div>
        <div className="cta-group">
          <Link className="btn primary" href="/contact">
            Book Demo
          </Link>
          <a className="btn secondary" href="https://wa.me/14152302611" target="_blank" rel="noreferrer">
            Talk to Sales on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
