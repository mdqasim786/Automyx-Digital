import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────
   GLOBAL STYLES (injected once)
   ───────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; overflow-x:hidden; }
  body { -webkit-font-smoothing:antialiased; font-family:'DM Sans',sans-serif; }

  /* ── Reveal animation ── */
  .amx-reveal {
    opacity:0;
    transform:translateY(24px);
    transition: opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1);
  }
  .amx-reveal.visible { opacity:1; transform:translateY(0); }
  .amx-reveal.d1 { transition-delay:.1s; }
  .amx-reveal.d2 { transition-delay:.2s; }
  .amx-reveal.d3 { transition-delay:.3s; }
  .amx-reveal.d4 { transition-delay:.4s; }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width:6px; }
  ::-webkit-scrollbar-track { background:#0e0e0f; }
  ::-webkit-scrollbar-thumb { background:rgba(200,169,110,.3); border-radius:3px; }

  /* ── Service card hover glow ── */
  .amx-svc:hover .amx-svc-icon { border-color:rgba(200,169,110,.7) !important; }
  .amx-svc:hover .amx-svc-icon svg { stroke:rgba(200,169,110,1) !important; }

  /* ── Pricing card hover ── */
  .amx-price:hover { box-shadow:0 16px 48px rgba(200,169,110,.12) !important; border-color:rgba(200,169,110,.3) !important; }

  /* ── Nav link hover ── */
  .amx-nav-link:hover { color:#fff !important; }

  /* ── Button hover ── */
  .amx-btn-primary:hover { background:#d4b87a !important; transform:translateY(-1px); }
  .amx-btn-primary:hover .amx-btn-arrow { transform:translateX(3px); }
  .amx-btn-ghost:hover { color:#fff !important; }
  .amx-btn-ghost:hover .amx-ghost-line { width:36px !important; background:rgba(200,169,110,1) !important; }

  /* ── Why card top border glow on hover ── */
  .amx-why-card:hover { border-top-color:rgba(200,169,110,.6) !important; }

  /* ── Process dot hover ── */
  .amx-proc-step:hover .amx-proc-dot { border-color:rgba(200,169,110,.8) !important; }
  .amx-proc-step:hover .amx-proc-num { color:rgba(200,169,110,1) !important; }

  /* ── Pricing CTA hover (light) ── */
  .amx-price-cta-light:hover { background:rgba(14,14,15,.07) !important; }

  /* ── Mobile ── */
  @media(max-width:720px){
    .amx-nav-links { display:none !important; }
    .amx-hero-grid { grid-template-columns:1fr !important; gap:28px !important; }
    .amx-svc-grid { grid-template-columns:1fr 1fr !important; }
    .amx-why-grid { grid-template-columns:1fr !important; }
    .amx-price-grid { grid-template-columns:1fr !important; max-width:380px; margin:0 auto; }
    .amx-proc-row { grid-template-columns:1fr 1fr !important; }
  }
  @media(max-width:480px){
    .amx-svc-grid { grid-template-columns:1fr !important; }
    .amx-proc-row { grid-template-columns:1fr !important; }
  }
`;

/* ─────────────────────────────────────────────
   useReveal — scroll-based visibility hook
   ───────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   Reveal wrapper component
   ───────────────────────────────────────────── */
function Reveal({ delay = 0, children, style }) {
  const [ref, vis] = useReveal();
  const dClass = delay ? `d${delay}` : "";
  return (
    <div ref={ref} className={`amx-reveal ${dClass} ${vis ? "visible" : ""}`} style={style}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CSS-ELEMENT LOGO  ·  "A" mark + wordmark
   ───────────────────────────────────────────── */
function Logo({ size = 1 }) {
  const s = size;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 * s }}>
      {/* Mark: stylised A with a horizontal slash + dot accent */}
      <svg width={32 * s} height={32 * s} viewBox="0 0 32 32" fill="none">
        {/* Left stroke of A */}
        <line x1="4" y1="28" x2="16" y2="4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        {/* Right stroke of A */}
        <line x1="28" y1="28" x2="16" y2="4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        {/* Cross-bar — gold, slightly offset for character */}
        <line x1="8.5" y1="19" x2="23.5" y2="19" stroke="rgba(200,169,110,1)" strokeWidth="2" strokeLinecap="round" />
        {/* Accent dot — top apex */}
        <circle cx="16" cy="2.5" r="2" fill="rgba(200,169,110,1)" />
      </svg>
      {/* Wordmark */}
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 21 * s, fontWeight: 500,
        color: "#fff", letterSpacing: "0.06em", lineHeight: 1
      }}>
        AUTOMYX<span style={{ color: "rgba(200,169,110,1)" }}>.</span>
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */
export default function AutomyxLanding() {
  const [scrolled, setScrolled] = useState(false);

  // inject global CSS once
  useEffect(() => {
    if (document.getElementById("amx-global-css")) return;
    const tag = document.createElement("style");
    tag.id = "amx-global-css";
    tag.textContent = GLOBAL_CSS;
    document.head.appendChild(tag);
  }, []);

  // nav scroll state
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // smooth anchor scroll
  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ── colours ── */
  const INK = "#0e0e0f";
  const CREAM = "#f3f0eb";
  const ACCENT = "rgba(200,169,110,1)";
  const WHITE = "#ffffff";

  /* ── shared text styles ── */
  const labelStyle = {
    fontSize: 10, fontWeight: 600, letterSpacing: "0.2em",
    textTransform: "uppercase", color: ACCENT, display: "block", marginBottom: 14
  };
  const displayMd = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em"
  };

  /* ── service data ── */
  const services = [
    {
      title: "Website Development",
      icon: <><line x1="3" y1="9" x2="21" y2="9"/><path d="M3 9V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="7" cy="6" r="0.8" fill="rgba(255,255,255,.5)"/><circle cx="10" cy="6" r="0.8" fill="rgba(255,255,255,.5)"/><circle cx="13" cy="6" r="0.8" fill="rgba(255,255,255,.5)"/></>,
      body: "Custom-designed websites that make a strong first impression and help convert visitors into customers.",
      outcome: "A professional online presence that builds trust"
    },
    {
      title: "Business Applications",
      icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="7" y1="13" x2="13" y2="13"/><line x1="7" y1="16" x2="11" y2="16"/></>,
      body: "Custom software solutions like booking systems, client portals, and management tools tailored to your business.",
      outcome: "Streamlined operations that save time and reduce costs"
    },
    {
      title: "AI & Automation",
      icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
      body: "Smart automation for tasks like appointment reminders, lead follow-ups, and data processing that runs 24/7.",
      outcome: "More done with less manual work"
    },
    {
      title: "Design & Branding",
      icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
      body: "Professional design that clearly communicates what you do and makes your business look credible and trustworthy.",
      outcome: "A brand that stands out from competitors"
    }
  ];

  /* ── why data ── */
  const whys = [
    { num: "I", title: "Honest communication", body: "We give you realistic timelines and clear pricing. No overselling, no surprise costs, no empty promises." },
    { num: "II", title: "Business-focused approach", body: "We start by understanding your goals and target customers, then design solutions that help you reach them." },
    { num: "III", title: "Direct access to our team", body: "You'll work directly with the developers and designers building your project. No middlemen, no delays." },
    { num: "IV", title: "Full ownership", body: "You own everything we build—complete source code, all files, no hidden fees or platform lock-ins." }
  ];

  /* ── process data ── */
  const steps = [
    { n: "01", title: "Discovery Call", body: "We discuss your business, goals, and what you need. We'll explain how we can help and answer all your questions." },
    { n: "02", title: "Planning", body: "We create a detailed plan and timeline. You'll know exactly what we're building and how much it will cost before we start." },
    { n: "03", title: "Development", body: "We build your project and keep you updated throughout. You can review progress and request changes as we go." },
    { n: "04", title: "Launch & Support", body: "We test everything thoroughly, help you launch, and provide support to ensure everything runs smoothly." }
  ];

  /* ── pricing data ── */
  const tiers = [
    {
      tier: "Starter", name: "Website", price: "$3,500", featured: false,
      features: ["Professional custom website", "Mobile-friendly design", "Fast loading speed", "Easy content updates", "1 month of support included"]
    },
    {
      tier: "Professional", name: "Website + Features", price: "$9,800", featured: true,
      features: ["Everything in Starter", "Custom functionality (forms, booking, etc.)", "Basic automation setup", "SEO optimization", "3 months of support"]
    },
    {
      tier: "Enterprise", name: "Full Solution", price: "Custom", featured: false,
      features: ["Complete business application", "Advanced automation", "Custom integrations", "Full branding package", "Ongoing support available"]
    }
  ];

  /* ─────────────────────────────────────────
     RENDER
     ───────────────────────────────────────── */
  return (
    <div style={{ background: INK, color: WHITE, fontFamily: "'DM Sans', sans-serif" }}>

      {/* ══════════ NAV ══════════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "12px 0" : "22px 0",
        background: scrolled ? "rgba(14,14,15,.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all .35s ease"
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Logo size={0.88} />
          <div className="amx-nav-links" style={{ display: "flex", gap: 32 }}>
            {[
              { id: "philosophy", label: "About" },
              { id: "services", label: "Services" },
              { id: "pricing", label: "Pricing" }
            ].map(item => (
              <button key={item.id} className="amx-nav-link" onClick={() => scrollTo(item.id)} style={{
                background: "none", border: "none", color: "rgba(255,255,255,.45)", cursor: "pointer",
                fontSize: 13, fontWeight: 400, letterSpacing: "0.05em",
                transition: "color .3s", padding: 0, fontFamily: "inherit"
              }}>{item.label}</button>
            ))}
          </div>
          <button onClick={() => scrollTo("contact")} style={{
            background: "none", border: "1px solid rgba(255,255,255,.22)", color: WHITE,
            padding: "9px 22px", borderRadius: 6, fontSize: 13, cursor: "pointer",
            fontFamily: "inherit", fontWeight: 400, transition: "border-color .3s"
          }}>Contact us</button>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "100px 32px 72px", position: "relative", overflow: "hidden"
      }}>
        {/* Ambient glow */}
        <div style={{
          position: "absolute", top: "15%", left: "55%", width: 520, height: 380,
          background: "radial-gradient(ellipse, rgba(200,169,110,.07) 0%, transparent 70%)",
          pointerEvents: "none", filter: "blur(20px)"
        }} />
        <div style={{
          position: "absolute", bottom: "20%", left: "10%", width: 360, height: 280,
          background: "radial-gradient(ellipse, rgba(200,169,110,.04) 0%, transparent 65%)",
          pointerEvents: "none", filter: "blur(16px)"
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
          <Reveal>
            <span style={labelStyle}>Professional Digital Solutions</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 style={{
              ...displayMd, fontSize: "clamp(42px, 7vw, 72px)", color: WHITE, margin: "0 0 24px"
            }}>
              Websites and software<br />
              that help your business{" "}
              <em style={{ fontStyle: "italic", color: ACCENT }}>grow.</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,.38)", maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.6, fontWeight: 300 }}>
              We build professional websites, custom applications, and automated systems that help you attract customers and run your business efficiently.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <a href="#contact" className="amx-btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: ACCENT, color: INK, padding: "14px 30px", borderRadius: 6,
                fontSize: 14, fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em",
                transition: "background .3s, transform .2s", cursor: "pointer"
              }}>
                Get started
                <span className="amx-btn-arrow" style={{ display: "inline-flex", transition: "transform .3s" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </span>
              </a>
              <a href="#services" className="amx-btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo("services"); }} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                color: "rgba(255,255,255,.42)", textDecoration: "none", fontSize: 14,
                transition: "color .3s", cursor: "pointer", fontFamily: "inherit"
              }}>
                <span className="amx-ghost-line" style={{ width: 24, height: 1, background: "rgba(255,255,255,.28)", transition: "width .3s, background .3s" }} />
                View services
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ PHILOSOPHY ══════════ */}
      <section id="philosophy" style={{ background: CREAM, color: INK, padding: "88px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="amx-hero-grid">
          <div>
            <Reveal><span style={{ ...labelStyle, color: ACCENT }}>Our Approach</span></Reveal>
            <Reveal delay={1}>
              <h2 style={{ ...displayMd, fontSize: "clamp(32px, 4.5vw, 48px)", color: INK }}>
                We focus on results,<br />
                <em style={{ fontStyle: "italic", color: ACCENT }}>not just design.</em>
              </h2>
            </Reveal>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { n: "01", t: "Your success is our priority", b: "We design every website and application to help you achieve specific business goals—more customers, better efficiency, or increased revenue." },
              { n: "02", t: "Fast, professional, and reliable", b: "Your website needs to load quickly and work perfectly. We build with performance and reliability as standard, not optional extras." },
              { n: "03", t: "Save time with smart automation", b: "We integrate systems that handle repetitive tasks automatically—from booking appointments to managing customer data—so you can focus on your business." }
            ].map((item, i) => (
              <Reveal key={i} delay={i + 1}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: ACCENT, minWidth: 28, lineHeight: 1.3 }}>{item.n}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 500, color: INK, marginBottom: 6 }}>{item.t}</p>
                    <p style={{ fontSize: 14, color: "rgba(14,14,15,.5)", lineHeight: 1.6 }}>{item.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section id="services" style={{ background: INK, padding: "88px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={labelStyle}>Our Services</span>
              <h2 style={{ ...displayMd, fontSize: "clamp(30px, 4vw, 44px)", color: WHITE }}>
                Complete digital solutions for your business
              </h2>
            </div>
          </Reveal>

          <div className="amx-svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,.06)", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,.06)" }}>
            {services.map((svc, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="amx-svc" style={{ background: INK, padding: "40px 28px", transition: "background .35s", cursor: "default" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.035)"}
                  onMouseLeave={e => e.currentTarget.style.background = INK}
                >
                  <div className="amx-svc-icon" style={{
                    width: 40, height: 40, borderRadius: 9,
                    border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 24, transition: "border-color .35s"
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke .35s" }}>
                      {svc.icon}
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 400, color: WHITE, marginBottom: 10 }}>{svc.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.32)", lineHeight: 1.6 }}>{svc.body}</p>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.06)" }}>
                    <span style={{ fontSize: 10, color: ACCENT, letterSpacing: "0.1em", fontWeight: 500 }}>OUTCOME </span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>{svc.outcome}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY + PROCESS (merged row) ══════════ */}
      <section style={{ background: CREAM, padding: "88px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }} className="amx-hero-grid">

          {/* WHY */}
          <div id="why">
            <Reveal><span style={{ ...labelStyle, color: ACCENT }}>Why Choose Us</span></Reveal>
            <Reveal delay={1}>
              <h2 style={{ ...displayMd, fontSize: "clamp(26px, 3.5vw, 36px)", color: INK, marginBottom: 32 }}>
                What makes us<br /><em style={{ fontStyle: "italic", color: ACCENT }}>different.</em>
              </h2>
            </Reveal>
            <div className="amx-why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 24px" }}>
              {whys.map((w, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="amx-why-card" style={{ borderTop: "1px solid rgba(14,14,15,.12)", paddingTop: 18, transition: "border-color .3s" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, color: ACCENT, display: "block", marginBottom: 10 }}>{w.num}</span>
                    <h3 style={{ fontSize: 15, fontWeight: 500, color: INK, marginBottom: 8 }}>{w.title}</h3>
                    <p style={{ fontSize: 13, color: "rgba(14,14,15,.48)", lineHeight: 1.6 }}>{w.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* PROCESS */}
          <div id="process">
            <Reveal><span style={{ ...labelStyle, color: ACCENT }}>How We Work</span></Reveal>
            <Reveal delay={1}>
              <h2 style={{ ...displayMd, fontSize: "clamp(26px, 3.5vw, 36px)", color: INK, marginBottom: 32 }}>
                Simple, clear<br /><em style={{ fontStyle: "italic", color: ACCENT }}>process.</em>
              </h2>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((s, i) => (
                <Reveal key={i} delay={i + 1}>
                  <div className="amx-proc-step" style={{ display: "flex", gap: 18, alignItems: "flex-start", cursor: "default", paddingBottom: i < steps.length - 1 ? 22 : 0 }}>
                    {/* Vertical connector */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div className="amx-proc-dot" style={{
                        width: 38, height: 38, borderRadius: "50%",
                        border: "1px solid rgba(14,14,15,.18)", background: "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "border-color .35s", flexShrink: 0
                      }}>
                        <span className="amx-proc-num" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 300, color: "rgba(14,14,15,.4)", transition: "color .35s" }}>{s.n}</span>
                      </div>
                      {i < steps.length - 1 && <div style={{ width: 1, height: 22, background: "rgba(14,14,15,.1)" }} />}
                    </div>
                    <div style={{ paddingTop: 6 }}>
                      <p style={{ fontSize: 15, fontWeight: 500, color: INK, marginBottom: 4 }}>{s.title}</p>
                      <p style={{ fontSize: 13, color: "rgba(14,14,15,.48)", lineHeight: 1.55 }}>{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PRICING ══════════ */}
      <section id="pricing" style={{ background: INK, padding: "88px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span style={labelStyle}>Pricing</span>
              <h2 style={{ ...displayMd, fontSize: "clamp(28px, 4vw, 42px)", color: WHITE, marginBottom: 12 }}>
                Transparent pricing for every budget
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,.35)", maxWidth: 440, margin: "0 auto", lineHeight: 1.6 }}>
                Choose a package that fits your needs. We'll provide an exact quote after understanding your specific requirements.
              </p>
            </div>
          </Reveal>

          <div className="amx-price-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {tiers.map((t, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="amx-price" style={{
                  background: t.featured ? "#161618" : "rgba(255,255,255,.04)",
                  border: t.featured ? "1px solid rgba(200,169,110,.45)" : "1px solid rgba(255,255,255,.07)",
                  borderRadius: 12, padding: "40px 30px 36px", position: "relative",
                  transition: "box-shadow .4s, border-color .4s"
                }}>
                  {t.featured && (
                    <div style={{
                      position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)",
                      background: ACCENT, color: INK, fontSize: 9, fontWeight: 700,
                      letterSpacing: "0.16em", textTransform: "uppercase",
                      padding: "6px 16px", borderRadius: "0 0 7px 7px"
                    }}>Most Popular</div>
                  )}
                  <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, fontWeight: 500, display: "block", marginBottom: 14 }}>{t.tier}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: WHITE, marginBottom: 6 }}>{t.name}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.3)", marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                    Starting from <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, color: WHITE }}>{t.price}</span>
                  </p>

                  <ul style={{ listStyle: "none", marginBottom: 28 }}>
                    {t.features.map((f, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "9px 0", borderBottom: j < t.features.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT, marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,.42)", lineHeight: 1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={t.featured ? "amx-btn-primary" : "amx-price-cta-light"}
                    onClick={() => scrollTo("contact")}
                    style={{
                      display: "block", width: "100%", padding: "12px 0", borderRadius: 6,
                      fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
                      border: t.featured ? "none" : "1px solid rgba(255,255,255,.15)",
                      background: t.featured ? ACCENT : "transparent",
                      color: t.featured ? INK : WHITE,
                      transition: "background .3s"
                    }}
                  >
                    Get a quote
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section id="contact" style={{ background: "#111112", padding: "100px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", bottom: "-25%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 400,
          background: "radial-gradient(ellipse, rgba(200,169,110,.06) 0%, transparent 65%)",
          pointerEvents: "none"
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 580, margin: "0 auto" }}>
          <Reveal><span style={labelStyle}>Get Started</span></Reveal>
          <Reveal delay={1}>
            <h2 style={{ ...displayMd, fontSize: "clamp(36px, 5.5vw, 58px)", color: WHITE, marginBottom: 20 }}>
              Ready to grow<br /><em style={{ fontStyle: "italic", color: ACCENT }}>your business?</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,.36)", lineHeight: 1.6, marginBottom: 40, fontWeight: 300 }}>
              Contact us for a free consultation. We'll discuss your needs and show you exactly how we can help.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a href="mailto:hello@automyx.digital" className="amx-btn-primary" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: ACCENT, color: INK, padding: "15px 34px", borderRadius: 6,
              fontSize: 14, fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em",
              transition: "background .3s, transform .2s"
            }}>
              Contact us today
              <span className="amx-btn-arrow" style={{ display: "inline-flex", transition: "transform .3s" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{ background: "#0a0a0b", borderTop: "1px solid rgba(255,255,255,.05)", padding: "28px 32px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo size={0.78} />
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.2)" }}>© 2025 Automyx Digital</span>
        </div>
      </footer>

    </div>
  );
}
