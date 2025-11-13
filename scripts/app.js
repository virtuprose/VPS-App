const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Custom cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

document.addEventListener("pointermove", (event) => {
  const { clientX, clientY } = event;
  cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
  cursorRing.style.transform = `translate(${clientX}px, ${clientY}px)`;
});

const interactiveSelectors = "a, button, .service-card";

document.querySelectorAll(interactiveSelectors).forEach((el) => {
  el.addEventListener("pointerenter", () => cursorRing.classList.add("active"));
  el.addEventListener("pointerleave", () =>
    cursorRing.classList.remove("active")
  );
});

// Matrix canvas backdrop
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
const letters = "0101010110011010◇◈▢△▣";
const fontSize = 16;
let columns;
const drops = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops.length = columns;
  drops.fill(1);
}

function drawMatrix() {
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
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
setInterval(drawMatrix, 60);

// Counter animations
const counters = document.querySelectorAll("[data-target]");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const value = Math.floor(progress * target);
          el.textContent = target > 100 ? value.toLocaleString() : value;
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target.toLocaleString();
        }

        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.4 }
);

counters.forEach((counter) => counterObserver.observe(counter));

// GSAP intro + scroll animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text .eyebrow, .hero-text h1, .hero-text .subline, .cta-group", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  stagger: 0.15,
});

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
  });
});

// Service card tilt
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

// Testimonials carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".testimonial"));
let currentSlide = 0;

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector(".carousel-control.next").addEventListener("click", () =>
  goToSlide(currentSlide + 1)
);
document.querySelector(".carousel-control.prev").addEventListener("click", () =>
  goToSlide(currentSlide - 1)
);

setInterval(() => goToSlide(currentSlide + 1), 6000);

// Scroll linked glow
const glowTargets = document.querySelectorAll(".service-detail, .result-card");
glowTargets.forEach((target) => {
  target.addEventListener("pointermove", (event) => {
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  });
});
