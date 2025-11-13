export default function PrivacyPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="subline">
            Virtuprose Solutions Private Limited respects your privacy. This
            policy explains the data we collect, why we collect it, and how we
            protect it across websites, forms, workshops, and paid engagements.
          </p>
        </div>
      </section>

      <section className="contact">
        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>Information We Collect</h3>
          <p>
            We collect contact details, company information, project goals,
            analytics data, and files you voluntarily share. For client
            engagements we may also gather product telemetry, marketing metrics,
            and knowledge-base exports needed to deliver contracted work.
          </p>
        </article>

        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>How We Use Data</h3>
          <p>
            Data powers discovery workshops, proposals, onboarding, product
            delivery, billing, and support. We never sell data. When we integrate
            partners (hosting providers, analytics platforms, communication
            tools) they only receive the minimum information required to perform
            their purpose under strict confidentiality obligations.
          </p>
        </article>

        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>Security &amp; Retention</h3>
          <p>
            We store project files within encrypted cloud services with access
            limited to authorized VirtuProse Solutions personnel. Engagement data
            is retained for as long as necessary to perform the services and meet
            regulatory requirements, after which it is archived or securely
            deleted.
          </p>
        </article>

        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>Your Rights</h3>
          <p>
            You may request access, updates, or deletion of your data at any
            time. Email{" "}
            <a className="ghost-link" href="mailto:info@virtuprose.com">
              info@virtuprose.com
            </a>{" "}
            and we will respond within ten business days. Certain data may need
            to be retained to comply with legal or contractual obligations.
          </p>
        </article>

        <article className="about-card">
          <h3>International Transfers &amp; Updates</h3>
          <p>
            As a remote-first team we may process data outside your country.
            Whenever we do, we rely on secure processors that meet global
            compliance frameworks. We will post updates to this policy on this
            page with a revised effective date. Continued use of our services
            after changes constitutes acceptance.
          </p>
        </article>
      </section>
    </div>
  );
}
