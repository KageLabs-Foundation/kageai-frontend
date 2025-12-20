import { useMemo, useEffect } from "react";
import ShinyText from "./components/ShinyText";
import CountUp from "./components/CountUp";
import Hyperspeed from "./components/Hyperspeed";
import AnimatedContent from "./components/AnimatedContent";
import SpotlightCard from "./components/SpotlightCard";
import Lenis from "lenis";
import { FiCpu, FiCloudLightning, FiLayers, FiZap } from "react-icons/fi";

const projects = [
  {
    title: "KageAI",
    category: "Assistant",
    desc: "Studio-grade AI copilot that handles chat, email, calendar, and ops without busywork.",
    link: "https://kage.wulabs.org",
    tone: "cyan",
  },
  {
    title: "KageSystem",
    category: "Platform",
    desc: "Adaptive execution layer for teams that want faster delivery loops and reliable outcomes.",
    link: "https://system.kage.wulabs.org",
    tone: "cyan",
  },
  {
    title: "KageAnalytics",
    category: "Intelligence",
    desc: "Live intelligence stack that stitches product, ops, and growth telemetry into one adaptive view.",
    link: "#",
    tone: "cyan",
  },
  {
    title: "KageStudy",
    category: "Learning",
    desc: "Interactive study systems that mix retrieval practice, AI tutoring, and cohort-ready dashboards.",
    link: "#",
    tone: "cyan",
  },
  {
    title: "KageAnalytics+",
    category: "Signals",
    desc: "Predictive alerting layer that catches anomalies and ships fixes before users notice.",
    link: "#",
    tone: "cyan",
  },
  {
    title: "KageComics",
    category: "Storytelling",
    desc: "AI-powered comic creation that merges writers, artists, and readers into one creative flow.",
    link: "#",
    tone: "cyan",
  },
];

const carouselItems = [
  {
    title: "Autonomous flows",
    description: "GSAP-powered sequences orchestrating onboarding, updates, and ops.",
    id: 1,
    icon: <FiZap className="carousel-icon" />,
  },
  {
    title: "Interface polish",
    description: "SpotlightCard and ShinyText create premium feel with zero setup.",
    id: 2,
    icon: <FiLayers className="carousel-icon" />,
  },
  {
    title: "Scalable stack",
    description: "CountUp metrics and smooth surfaces keep things lively and light.",
    id: 3,
    icon: <FiCpu className="carousel-icon" />,
  },
  {
    title: "Realtime ready",
    description: "Components play nicely with streaming data and live updates.",
    id: 4,
    icon: <FiCloudLightning className="carousel-icon" />,
  },
];

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: t => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: true,
    });

    let rafId;
    const raf = time => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="page cursor-target" id="snap-main-container">
      <div className="hyper-bg">
        <Hyperspeed
          effectOptions={{
            length: 520,
            lanesPerRoad: 3,
            speedUp: 2.2,
            roadWidth: 12,
            islandWidth: 2,
          }}
        />
      </div>

      <div className="page-shell">
        <AnimatedContent>
          <header className="top">
            <div className="brand">
              <span className="mark">K</span>
              <ShinyText text="KageLabs" className="brand-text" />
            </div>
            <div className="pill-nav">
              <a href="#projects">Products</a>
              <a href="#about">Why us</a>
              <a href="#contact">Contact</a>
            </div>
          </header>
        </AnimatedContent>

        <main>
          <section className="hero">
            <AnimatedContent>
              <div className="hero-copy">
                <p className="eyebrow">Built for momentum</p>
                <h1>
                  <ShinyText text="AI systems" className="headline" /> that feel <span className="accent">inevitable</span>
                </h1>
                <p className="lede">
                  We assemble interfaces and automation with production-ready components - fast to ship, beautiful by default, tuned for production.
                </p>
                <div className="stats">
                <div>
                  <CountUp to={60} className="stat-number" />
                  <span className="stat-label">Fast response (ms)</span>
                </div>
                  <div>
                    <CountUp to={24} className="stat-number" />
                    <span className="stat-label">Hours of coverage, daily</span>
                  </div>
                  <div>
                  <CountUp to={6} className="stat-number" />
                  <span className="stat-label">Flagship launches</span>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </section>

          <section id="about" className="section about-area cursor-target">
            <AnimatedContent>
              <div className="section-head cursor-target">
                <p className="eyebrow">About KageLabs</p>
                <h2 className="cursor-target">
                  Innovation-first AI studio shaping human-centric, future-ready systems.
                </h2>
              </div>
              <div className="pillars">
                {[
                  {
                    title: "1. Innovation First",
                    body: "Pushing boundaries with cutting-edge AI research and breakthrough solutions that reshape industries.",
                  },
                  {
                    title: "2. Human-Centric",
                    body: "Creating technology that bridges the gap between human creativity and machine intelligence.",
                  },
                  {
                    title: "3. Future-Ready",
                    body: "Building platforms and tools that empower the next generation of creators and innovators.",
                  },
                ].map((item) => (
                  <div key={item.title} className="panel">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </AnimatedContent>
          </section>

          <section id="projects" className="section">
            <AnimatedContent>
              <div className="section-head">
                <p className="eyebrow">Products</p>
                <h2>Live launches powered by our stack.</h2>
              </div>
              <div className="projects mt-6">
                {projects.map((project) => (
                  <SpotlightCard key={project.title} className={`project project-flat ${project.tone}`}>
                    <div className="badge">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <a
                      className="link"
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                    >
                      Learn more
                    </a>
                  </SpotlightCard>
                ))}
              </div>
            </AnimatedContent>
          </section>

          <section id="contact" className="section contact">
            <AnimatedContent>
              <div className="contact-plain">
                <p className="eyebrow">Contact</p>
                <h2>Let's ship your AI product with launch-ready polish.</h2>
                <p className="lede">
                  Tell us about the assistant, platform, or automation you want to launch. We'll move from brief to pilot in days, not months.
                </p>
                <form className="contact-form">
                  <label>
                    Name
                    <input type="text" name="name" placeholder="Your name" required />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" placeholder="you@example.com" required />
                  </label>
                <label>
                  Project
                  <textarea name="message" placeholder="What do you want to build?" required />
                </label>
                <button type="submit" className="primary">
                  <span>Send message</span>
                </button>
              </form>
                <div className="actions">
                  <a className="secondary" href="mailto:contact@kagelabs.com">
                    Or email contact@kagelabs.com
                  </a>
                </div>
              </div>
            </AnimatedContent>
          </section>
        </main>

        <AnimatedContent>
          <footer className="footer">
            <div className="brand">
              <span className="mark">K</span>
              <ShinyText text="KageLabs" className="brand-text" />
            </div>
            <span>(c) {year} KageLabs. All rights reserved.</span>
          </footer>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default App;
