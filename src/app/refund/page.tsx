export default function RefundPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Legal</p>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p className="subline">
            Virtuprose Solutions Private Limited provides bespoke professional
            services. This policy clarifies how cancellations, refunds, and
            rescheduling are handled for retainers and project engagements.
          </p>
        </div>
      </section>

      <section className="contact">
        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>Project Deposits</h3>
          <p>
            Project deposits secure production bandwidth and are non-refundable
            once work has commenced. If you cancel before kickoff, we will refund
            the deposit minus any third-party fees already incurred.
          </p>
        </article>

        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>In-Progress Engagements</h3>
          <p>
            When an engagement is canceled mid-stream, invoices are issued for
            all completed milestones, approved hours, and non-cancellable
            software or talent costs. Any unused pre-paid amount beyond those
            obligations is refunded within 15 business days.
          </p>
        </article>

        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>Retainers &amp; Subscriptions</h3>
          <p>
            Ongoing retainers renew monthly. You may pause or cancel with 30
            days’ written notice. Work already scheduled inside the notice window
            will be completed and billed. Unused hours do not roll over unless
            stated otherwise in your agreement.
          </p>
        </article>

        <article className="about-card" style={{ marginBottom: "1.5rem" }}>
          <h3>Workshops &amp; Strategy Sprints</h3>
          <p>
            Workshops can be rescheduled once at no cost with at least five
            business days’ notice. Shorter notice or repeated reschedules incur a
            25% rescheduling fee to cover committed experts.
          </p>
        </article>

        <article className="about-card">
          <h3>How to Request a Refund</h3>
          <p>
            Email{" "}
            <a className="ghost-link" href="mailto:billing@virtuprose.com">
              billing@virtuprose.com
            </a>{" "}
            with your project name, invoice number, and reason for the request.
            Our finance team, operating under the legal and billing name
            Virtuprose Solutions Private Limited, will review and respond within
            five business days.
          </p>
        </article>
      </section>
    </div>
  );
}
