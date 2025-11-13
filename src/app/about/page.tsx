const timeline = [
  { year: "2014", detail: "Reinvented the first enterprise web flagship" },
  { year: "2018", detail: "Scaled digital marketing programs across continents" },
  { year: "2021", detail: "Launched smart custom web applications" },
  { year: "2025", detail: "Global rollout of Orvia AI assistants" },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "auto", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h1>VirtuProse Solutions is helmed by Zaid Anarwala</h1>
          <p className="subline">
            We are Virtuprose Solutions Private Limited—an AI-native digital studio blending marketing science, product
            strategy, and automation.
          </p>
        </div>
      </section>

      <section className="about">
        <div className="about-grid">
          <div className="about-card founder">
            <div
              className="founder-photo"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80)",
              }}
            />
            <div>
              <h3>Zaid Anarwala</h3>
              <p className="founder-title">Founder & Intelligent Experience Architect</p>
              <p>
                Zaid leads VirtuProse as an embedded partner for ambitious brands—mapping intelligence, orchestrating
                design systems, and assembling teams to launch revenue engines that never sleep.
              </p>
            </div>
          </div>
          <div className="about-card vision">
            <h3>Vision</h3>
            <p>
              Build the most trusted studio for intelligent digital systems—products and agents that think, guide, and
              transact on behalf of ambitious brands.
            </p>
          </div>
          <div className="timeline-card">
            <h3>Timeline</h3>
            <ul className="timeline">
              {timeline.map((event) => (
                <li key={event.year}>
                  <span>{event.year}</span>
                  <p>{event.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
