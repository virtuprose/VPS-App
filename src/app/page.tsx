"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactNumbers } from "@/lib/site";

const heroMetrics = [
  { target: 10, label: "Years crafting digital experiences" },
  { target: 240, label: "Projects launched and scaled globally" },
  { target: 96, label: "Partner satisfaction built on real business outcomes" },
];

const serviceCards = [
  {
    icon: "01",
    title: "Advanced Growth Marketing",
    body:
      "Predictive playbooks that blend AI, experimentation, and realtime analytics to ship growth faster.",
    cta: "Explore playbooks →",
    href: "/services/growth-marketing",
  },
  {
    icon: "02",
    title: "Web Design & UI/UX",
    body:
      "Immersive experiences engineered to convert—cinematic visuals, conversational flows, and smart UX.",
    cta: "See experience layer →",
    href: "/services/web-design",
  },
  {
    icon: "03",
    title: "Web Applications",
    body:
      "Modular, secure, and scalable apps that plug into your stack and evolve with your roadmap.",
    cta: "Review stack →",
    href: "/services/web-applications",
  },
  {
    icon: "04",
    title: "AI Agents & Chatbots",
    body:
      "Custom Orvia agents that qualify leads, support customers, and surface intelligence 24/7.",
    cta: "Meet Orvia →",
    href: "/services/ai-automation",
  },
];

const resultStats = [
  {
    title: "AI optimized funnels",
    description: "Average lift in conversions after 60 days",
    target: 38,
    suffix: "%",
    glow: true,
  },
  {
    title: "LTV acceleration",
    description: "Retention increase from personalized journeys",
    target: 52,
    suffix: "%",
  },
  {
    title: "Automation hours saved",
    description: "AI agents resolving support flows monthly",
    target: 1400,
  },
  {
    title: "Full-funnel governance",
    description:
      "Analytics, media, creative, and automation orchestrated inside a single adaptive control room.",
    highlight: true,
    cta: "Request a teardown",
  },
];

const partnerLogos = [
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-01-3.webp", alt: "Client 01 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-02-3.webp", alt: "Client 02 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-03-3.webp", alt: "Client 03 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-04.webp", alt: "Client 04 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-05-3.webp", alt: "Client 05 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-06-3.webp", alt: "Client 06 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-07-3.webp", alt: "Client 07 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-08.webp", alt: "Client 08 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-09-3.webp", alt: "Client 09 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-10-3.webp", alt: "Client 10 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-11-3.webp", alt: "Client 11 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-12-3.webp", alt: "Client 12 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-14-3.webp", alt: "Client 13 logo" },
  { src: "/assets/client-logos/CLIENT-LOGO-MAIN-FILE-15-3.webp", alt: "Client 14 logo" },
  { src: "/assets/client-logos/Type-12-2048x499-1.webp", alt: "Client 15 logo" },
];

const timelineEvents = [
  { year: "2014", detail: "First enterprise website reinvention" },
  { year: "2018", detail: "Global digital marketing success cohort" },
  { year: "2021", detail: "Smart custom web applications go live" },
  { year: "2025", detail: "Orvia AI assistants scale across verticals" },
];

const testimonials = [
  {
    quote:
      "VPS rebuilt our SaaS funnel and layered AI chat to demo the product live. Pipeline doubled in three months.",
    author: "Adrian Cole",
    role: "CEO, Helix Labs",
  },
  {
    quote:
      "The visual system and orchestrated GTM stack made our launch feel like a cinematic operating system.",
    author: "Maya Jensen",
    role: "VP Product, PulseTech",
  },
  {
    quote:
      "Their AI agents now qualify leads, route support, and capture intelligence our team never had time to gather.",
    author: "Jordan Ruiz",
    role: "Growth Lead, NovaStack",
  },
];

const projects = [
  {
    title: "Sentient Commerce Cloud",
    category: "Web",
    blurb: "Headless storefront with adaptive merch AI.",
    tag: "Web",
  },
  {
    title: "PulseTech Demand Lab",
    category: "Growth",
    blurb: "North American paid + lifecycle marketing engine with full-funnel reporting.",
    tag: "Growth",
  },
  {
    title: "Helix Diagnostics OS",
    category: "AI",
    blurb: "HIPAA-compliant Orvia triage assistant.",
    tag: "AI",
  },
  {
    title: "NovaStack DevHub",
    category: "Web",
    blurb: "Developer marketing hub with realtime docs.",
    tag: "Web",
  },
  {
    title: "Quantum Bloom Studio",
    category: "AI",
    blurb: "Creative co-pilot for motion and brand teams.",
    tag: "AI",
  },
  {
    title: "Atlas Commerce Accelerator",
    category: "Growth",
    blurb: "US eCommerce growth program covering acquisition, CRO, and retention automation.",
    tag: "Growth",
  },
];

const projectFilters = ["All", "Web", "Growth", "AI"];

const visionStatement =
  "Vision 2030: build the world’s most trusted studio for intelligent, adaptive digital systems—experiences that think, guide, and transact on behalf of ambitious brands.";

const bookDemoPrograms = [
  {
    label: "Growth Intelligence Sprint",
    detail: "14-day audit + experiment roadmap",
  },
  {
    label: "Experience Lab",
    detail: "Rapid UX/UI prototypes with data hooks",
  },
  {
    label: "Automation Blueprint",
    detail: "Orvia agents + workflow orchestration plan",
  },
];

type ContactFormFields = {
  name: string;
  email: string;
  project: string;
  message: string;
};

const createContactFormDefaults = (): ContactFormFields => ({
  name: "",
  email: "",
  project: "Growth Marketing",
  message: "",
});

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [contactForm, setContactForm] = useState<ContactFormFields>(createContactFormDefaults);
  const [contactFormStatus, setContactFormStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [contactFormError, setContactFormError] = useState<string | null>(null);

  const handleContactInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({
      ...prev,
      [name as keyof ContactFormFields]: value,
    }));

    if (contactFormStatus !== "idle") {
      setContactFormStatus("idle");
      setContactFormError(null);
    }
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactFormStatus("loading");
    setContactFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(data?.error ?? "Failed to send your message.");
      }

      setContactForm(createContactFormDefaults());
      setContactFormStatus("success");
    } catch (error) {
      setContactFormStatus("error");
      setContactFormError(
        error instanceof Error ? error.message : "Unable to send your message right now."
      );
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursorDot || !cursorRing) return;

    const move = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorRing.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const interactiveSelectors = "a, button, .service-card";
    const interactive = Array.from(
      document.querySelectorAll<HTMLElement>(interactiveSelectors)
    );

    const handleEnter = () => cursorRing.classList.add("active");
    const handleLeave = () => cursorRing.classList.remove("active");

    document.addEventListener("pointermove", move);
    interactive.forEach((node) => {
      node.addEventListener("pointerenter", handleEnter);
      node.addEventListener("pointerleave", handleLeave);
    });

    return () => {
      document.removeEventListener("pointermove", move);
      interactive.forEach((node) => {
        node.removeEventListener("pointerenter", handleEnter);
        node.removeEventListener("pointerleave", handleLeave);
      });
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const letters = "0101010110011010◇◈▢△▣";
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    let frame = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(4, 4, 17, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#13e8ff";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] = y + 1;
      });

      frame = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>("[data-target]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = Number(el.dataset.target ?? 0);
            const duration = 2000;
            const start = performance.now();

            const update = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const value = Math.floor(progress * target);
              const formatted = target > 100 ? value.toLocaleString() : value;
              el.textContent = `${formatted}${el.dataset.suffix ?? ""}`;
              if (progress < 1) requestAnimationFrame(update);
              else el.textContent = `${target.toLocaleString()}${
                el.dataset.suffix ?? ""
              }`;
            };

            requestAnimationFrame(update);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(
        ".hero-text .eyebrow, .hero-text h1, .hero-text .subline, .cta-group",
        {
          opacity: 0,
          y: 40,
          duration: 1.2,
          stagger: 0.15,
        }
      );

      gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".service-detail, .result-card"
    );

    const handleGlow = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      target.style.setProperty("--x", `${x}px`);
      target.style.setProperty("--y", `${y}px`);
    };

    targets.forEach((target) => {
      target.addEventListener("pointermove", handleGlow);
    });

    return () => {
      targets.forEach((target) => {
        target.removeEventListener("pointermove", handleGlow);
      });
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const prev = prevButtonRef.current;
    const next = nextButtonRef.current;
    if (!track || !prev || !next) return;

    let currentSlide = 0;
    const total = testimonials.length;

    const goToSlide = (index: number) => {
      currentSlide = (index + total) % total;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    const handlePrev = () => goToSlide(currentSlide - 1);
    const handleNext = () => goToSlide(currentSlide + 1);

    prev.addEventListener("click", handlePrev);
    next.addEventListener("click", handleNext);

    const interval = window.setInterval(handleNext, 6000);

    return () => {
      prev.removeEventListener("click", handlePrev);
      next.removeEventListener("click", handleNext);
      window.clearInterval(interval);
    };
  }, []);

  const filteredProjects =
    activeProjectFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeProjectFilter);

  return (
    <div>
      <div className="global-noise" />
      <canvas ref={canvasRef} id="matrix-canvas" aria-hidden="true" />
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRingRef} className="cursor-ring" />

      <div className="page-wrapper">
        <header className="hero" id="home">
          <div className="hero-content">
            <div className="hero-text">
              <p className="eyebrow">Design + AI growth collective</p>
              <h1 className="hero-gradient">
                We build intelligent growth engines
                <br />
                for ambitious brands.
              </h1>
              <p className="subline">
                Your brand deserves more than a digital presence—it deserves a system that learns, sells, and scales
                around the clock. VirtuProse blends AI, design, and advanced digital growth marketing to turn every
                interaction into real momentum.
              </p>
              <div className="cta-group">
                <Link className="btn primary" href="/contact">
                  Launch the Journey
                </Link>
                <a className="btn secondary" href="#projects">
                  See Our Work
                </a>
              </div>
              <div className="hero-metrics">
                {heroMetrics.map((metric) => (
                  <div key={metric.label}>
                    <span
                      className="metric"
                      data-target={metric.target}
                      data-suffix="+"
                    >
                      0
                    </span>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-sphere">
                <div className="pulse" />
                <div className="sphere-core">
                  <div className="glow" />
                  <svg viewBox="0 0 200 200" role="presentation" aria-hidden="true">
                    <defs>
                      <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7a5cff" />
                        <stop offset="100%" stopColor="#13e8ff" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M91.5,-25.2C99.2,1.6,73.7,33.6,45.4,51.1C17.2,68.5,-13.8,71.3,-34.7,56.4C-55.7,41.4,-66.7,8.7,-59.2,-18.6C-51.6,-45.8,-25.8,-67.7,-0.1,-67.7C25.6,-67.7,51.1,-45.9,91.5,-25.2Z"
                      fill="url(#hero-grad)"
                      fillOpacity="0.35"
                    />
                  </svg>
                </div>
              </div>
              <div className="hero-grid">
                <div className="grid-line" />
                <div className="grid-line" />
                <div className="grid-line" />
                <div className="grid-line" />
              </div>
            </div>
          </div>
          <div className="hero-scroll">Scroll to explore</div>
        </header>

        <section className="services" id="services">
          <div className="section-heading">
            <p className="eyebrow">What we craft</p>
            <h2>Interactive services engineered for unstoppable growth</h2>
          </div>
          <div className="service-cards">
            {serviceCards.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                {service.href ? (
                  <Link className="ghost-link" href={service.href}>
                    {service.cta}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="results" id="work">
          <div className="result-grid">
            {resultStats.map((result) => (
              <div
                key={result.title}
                className={`result-card${result.highlight ? " highlight" : ""}`}
              >
                <h4>{result.title}</h4>
                <p>{result.description}</p>
                {typeof result.target === "number" ? (
                  <span
                    className={`stat${result.glow ? " glow" : ""}`}
                    data-target={result.target}
                    data-suffix={result.suffix ?? ""}
                  >
                    0
                  </span>
                ) : null}
                {result.cta ? (
                  <button className="btn primary small" type="button">
                    {result.cta}
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="logos full-width">
          <div className="section-heading">
            <p className="eyebrow">Trusted by operators worldwide</p>
            <h2>Partner stories across industries</h2>
          </div>
          <div className="logo-marquee">
            <div className="logo-track">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div key={`${logo.src}-${index}`} className="logo-card">
                  <Image src={logo.src} alt={logo.alt} width={160} height={60} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Live intelligence</p>
            <h2>Completed launches engineered by VirtuProse</h2>
          </div>
          <div className="project-filters">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeProjectFilter ? "active" : ""}
                onClick={() => setActiveProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.blurb}</p>
                <button className="ghost-link" type="button">
                  Dive deeper →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-heading">
            <p className="eyebrow">The VPS story</p>
            <h2>Human creativity meets machine precision</h2>
          </div>
          <div className="about-grid">
            <div className="about-card hologram">
              <h3>Mission</h3>
              <p>&ldquo;Merging intelligence and design for unstoppable growth.&rdquo;</p>
              <div className="holo-grid">
                {[
                  "Neural research",
                  "Design language",
                  "Automation ops",
                  "Product velocity",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="about-card vision">
              <h3>Vision</h3>
              <p>{visionStatement}</p>
            </div>
            <div className="timeline-card">
              <h3>Milestones</h3>
              <ul className="timeline">
                {timelineEvents.map((event) => (
                  <li key={event.year}>
                    <span>{event.year}</span>
                    <p>{event.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="book-demo" id="demo">
          <div className="book-demo-shell">
            <div>
              <p className="eyebrow">Book a demo</p>
              <h2>Co-create your next growth operating system</h2>
              <p>
                Choose a curated sprint and we’ll choreograph the entire journey—research, design, engineering, and
                automation included.
              </p>
          <Link className="btn primary" href="/contact">
            Book intelligent demo
          </Link>
            </div>
            <div className="program-stack">
              {bookDemoPrograms.map((program) => (
                <div key={program.label}>
                  <h4>{program.label}</h4>
                  <p>{program.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Signals from partners</p>
            <h2>“Every launch feels like the future shipped early.”</h2>
          </div>
          <div className="testimonial-carousel">
            <button
              ref={prevButtonRef}
              className="carousel-control prev"
              type="button"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div ref={trackRef} className="carousel-track">
              {testimonials.map((testimonial) => (
                <article key={testimonial.author} className="testimonial">
                  <p>“{testimonial.quote}”</p>
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </article>
              ))}
            </div>
            <button
              ref={nextButtonRef}
              className="carousel-control next"
              type="button"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </section>

        <section className="cta-banner">
          <div className="cta-content">
            <h3>Ready to scale smarter with AI?</h3>
            <p>Let’s align strategy, automation, and experiences that convert.</p>
          </div>
          <Link className="btn primary" href="/contact">
            Let’s Talk
          </Link>
        </section>

        <section className="contact" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something extraordinary</h2>
          </div>
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={handleContactInputChange}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  value={contactForm.email}
                  onChange={handleContactInputChange}
                />
              </label>
              <label>
                Project Type
                <select
                  name="project"
                  value={contactForm.project}
                  onChange={handleContactInputChange}
                >
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
                  rows={4}
                  placeholder="Timelines, goals, required outcomes..."
                  required
                  value={contactForm.message}
                  onChange={handleContactInputChange}
                />
              </label>
              <button
                className="btn primary"
                type="submit"
                disabled={contactFormStatus === "loading"}
              >
                {contactFormStatus === "loading"
                  ? "Sending..."
                  : contactFormStatus === "success"
                    ? "Sent!"
                    : "Send to info@virtuprose.com"}
              </button>
              {contactFormStatus === "success" && (
                <p className="form-feedback success" role="status">
                  Thanks! We’ve received your message and will reach out shortly.
                </p>
              )}
              {contactFormStatus === "error" && (
                <p className="form-feedback error" role="alert">
                  {contactFormError ?? "Something went wrong. Please try again."}
                </p>
              )}
            </form>
            <div className="contact-side">
              <div className="chat-widget">
                <div className="chat-header">
                  <span>Orvia · AI Assistant</span>
                  <span className="status">Online</span>
                </div>
                <div className="chat-body">
                  <p className="bot">Need a growth teardown or AI agent demo?</p>
                  <p className="user">Yes—let’s audit our funnel.</p>
                  <p className="bot">
                    Upload KPIs & CRM data, I’ll prep a roadmap in 12 hours.
                  </p>
                </div>
              </div>
              <div className="globe-card">
                <div className="globe" />
                <p>Global studio · Remote first · Available across timezones</p>
                <div className="contact-stack">
                  <a href="mailto:info@virtuprose.com" className="ghost-link contact-flag">
                    info@virtuprose.com
                  </a>
                  {contactNumbers.map((number) => (
                    <a
                      key={number.label}
                      href={`tel:${number.value.replace(/[^+\d]/g, "")}`}
                      className="ghost-link contact-flag"
                    >
                      {number.flag ? (
                        <Image
                          src={number.flag}
                          alt={`${number.label} flag`}
                          width={20}
                          height={14}
                          loading="lazy"
                        />
                      ) : null}
                      <span>
                        {number.label}: {number.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
