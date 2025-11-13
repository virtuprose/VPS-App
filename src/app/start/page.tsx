"use client";

import { useEffect } from "react";

export default function StartPage() {
  useEffect(() => {
    window.location.replace("/contact");
  }, []);

  return (
    <div className="page-wrapper" style={{ paddingTop: "4rem" }}>
      <section className="hero" style={{ minHeight: "50vh", paddingTop: 0 }}>
        <div className="section-heading">
          <p className="eyebrow">Start your project</p>
          <h1>Redirecting you to our contact team…</h1>
          <p className="subline">If you are not redirected automatically, <a href="/contact">click here</a>.</p>
        </div>
      </section>
    </div>
  );
}
