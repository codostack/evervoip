import { useState } from "react";

const bgIcons = [
  { symbol: "✦", style: "top-[12%] left-[8%] text-[32px]", delay: "0s", duration: "6s" },
  { symbol: "◈", style: "top-[30%] left-[22%] text-[20px]", delay: "-3s", duration: "8s" },
  { symbol: "⬡", style: "top-[15%] left-[42%] text-[26px]", delay: "-1s", duration: "7s" },
  { symbol: "✦", style: "top-[50%] left-[58%] text-[18px]", delay: "-4s", duration: "9s" },
  { symbol: "◈", style: "top-[10%] right-[18%] text-[30px]", delay: "-6s", duration: "10s" },
  { symbol: "⬡", style: "top-[60%] right-[10%] text-[22px]", delay: "-2s", duration: "7s" },
  { symbol: "✧", style: "bottom-[25%] left-[5%] text-[24px]", delay: "-7s", duration: "11s" },
  { symbol: "◈", style: "bottom-[15%] left-[38%] text-[18px]", delay: "-1s", duration: "6s" },
  { symbol: "✦", style: "top-[72%] right-[38%] text-[28px]", delay: "-5s", duration: "8s" },
  { symbol: "✧", style: "top-[5%] right-[52%] text-[15px]", delay: "-2s", duration: "9s" },
];

const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Integrations"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Support: ["Help Center", "Documentation", "Community", "Status Page", "API Docs"],
};

const features = [
  { icon: "🔒", title: "Secure & Private", sub: "End-to-end encrypted" },
  { icon: "⚡", title: "Lightning Fast", sub: "99.99% uptime SLA" },
  { icon: "🌍", title: "Global CDN", sub: "30+ edge locations" },
  { icon: "🤖", title: "AI Powered", sub: "Smart automation" },
  { icon: "💎", title: "Premium Quality", sub: "Award-winning design" },
];

const socials = [
  { label: "𝕏", title: "Twitter" },
  { label: "in", title: "LinkedIn" },
  { label: "gh", title: "GitHub" },
  { label: "▶", title: "YouTube" },
  { label: "ds", title: "Discord" },
];

export default function AnimatedFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredFeat, setHoveredFeat] = useState(null);
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;700&display=swap');

        .footer-font { font-family: 'Outfit', sans-serif; }
        .logo-font   { font-family: 'Space Grotesk', sans-serif; }

        @keyframes floatOrb {
          0%   { transform: translate(0,0) scale(1); }
          25%  { transform: translate(20px,-30px) scale(1.08); }
          50%  { transform: translate(40px,10px) scale(0.95); }
          75%  { transform: translate(-10px,30px) scale(1.05); }
          100% { transform: translate(0,0) scale(1); }
        }
        @keyframes driftIcon {
          0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.07; }
          50%      { transform: translateY(-18px) rotate(15deg); opacity: 0.13; }
        }
        @keyframes gridPulse {
          0%,100% { opacity: 0.5; }
          50%      { opacity: 1; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes logoBounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLink {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .float-orb      { animation: floatOrb linear infinite; }
        .drift-icon     { animation: driftIcon ease-in-out infinite; }
        .grid-pulse     { animation: gridPulse 8s ease-in-out infinite; }
        .pulse-ring-anim{ animation: pulseRing 4s ease-out infinite; }
        .logo-bounce    { animation: logoBounce 3s ease-in-out infinite; }
        .slide-up-1     { animation: slideUp 0.7s ease both; }
        .slide-up-2     { animation: slideUp 0.8s ease 0.1s both; }
        .slide-up-3     { animation: slideUp 0.9s ease 0.2s both; }
        .slide-up-4     { animation: slideUp 1.0s ease 0.3s both; }

        .link-underline {
          position: relative; display: inline-flex; align-items: center; gap: 6px;
          text-decoration: none; transition: all 0.25s ease;
        }
        .link-underline::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: #67e8f9; transition: width 0.3s ease;
        }
        .link-underline:hover::after { width: 100%; }

        .nl-input::placeholder { color: rgba(199,210,254,0.5); }
        .nl-input:focus {
          outline: none;
          border-color: rgba(255,255,255,0.5) !important;
          background: rgba(255,255,255,0.18) !important;
          box-shadow: 0 0 0 3px rgba(103,232,249,0.25);
        }
      `}</style>

      <footer
        className="footer-font relative overflow-hidden"
        style={{
background: "#0891b2",
          minHeight: 480,
        }}
      >
        {/* ── Background Layer ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid */}
          <div
            className="grid-pulse absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(103,232,249,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Orbs */}
          {[
            { size: 320, color: "#67e8f9", top: -80, left: -60, dur: "18s", delay: "0s" },
            { size: 200, color: "#38bdf8", bottom: 20, right: 80, dur: "14s", delay: "-5s" },
            { size: 150, color: "#22d3ee", top: 60, right: 220, dur: "20s", delay: "-9s" },
            { size: 100, color: "#7dd3fc", bottom: 80, left: 200, dur: "12s", delay: "-3s" },
          ].map((o, i) => (
            <div
              key={i}
              className="float-orb absolute rounded-full"
              style={{
                width: o.size, height: o.size, background: o.color, opacity: 0.12,
                top: o.top, left: o.left, bottom: o.bottom, right: o.right,
                animationDuration: o.dur, animationDelay: o.delay,
              }}
            />
          ))}

          {/* Pulse rings */}
          <div
            className="pulse-ring-anim absolute rounded-full"
            style={{ width: 300, height: 300, top: -50, right: 100, border: "1px solid rgba(165,180,252,0.2)", animationDelay: "0s" }}
          />
          <div
            className="pulse-ring-anim absolute rounded-full"
            style={{ width: 200, height: 200, bottom: 60, left: 120, border: "1px solid rgba(165,180,252,0.2)", animationDelay: "2s" }}
          />

          {/* Floating icons */}
          {bgIcons.map((ic, i) => (
            <div
              key={i}
              className={`drift-icon absolute select-none ${ic.style}`}
              style={{ color: "#e0e7ff", animationDuration: ic.duration, animationDelay: ic.delay }}
            >
              {ic.symbol}
            </div>
          ))}
        </div>

        {/* ── Main Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-12 pt-12">

          {/* Logo */}
          <div className="slide-up-1 flex items-center gap-4 mb-9">
            <div
              className="logo-bounce w-14 h-14 rounded-2xl flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              🔷
            </div>
            <div>
              <div className="logo-font font-bold text-2xl text-white tracking-tight">YourBrand</div>
              <div className="text-xs font-normal tracking-widest uppercase mt-0.5" style={{ color: "rgba(199,210,254,0.8)" }}>
                Place your logo here
              </div>
            </div>
          </div>

          {/* Columns */}
          <div className="slide-up-2 grid gap-10" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>

            {/* About */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(199,210,254,0.7)" }}>
                About
              </h4>
              <p className="text-sm font-light leading-7 max-w-[260px]" style={{ color: "rgba(199,210,254,0.85)" }}>
                Building the future one pixel at a time. We craft beautiful, high-performance digital experiences that connect brands with the people they serve.
              </p>
              {/* Socials */}
              <div className="flex gap-2.5 mt-5">
                {socials.map((s, i) => (
                  <button
                    key={i}
                    title={s.title}
                    onMouseEnter={() => setHoveredSocial(i)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-medium cursor-pointer transition-all duration-300"
                    style={{
                      background: hoveredSocial === i ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.1)",
                      border: `1px solid ${hoveredSocial === i ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}`,
                      color: "#e0e7ff",
                      transform: hoveredSocial === i ? "translateY(-3px)" : "translateY(0)",
                      boxShadow: hoveredSocial === i ? "0 8px 20px rgba(0,0,0,0.2)" : "none",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "rgba(199,210,254,0.7)" }}>
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item, i) => {
                    const key = `${heading}-${i}`;
                    return (
                      <li key={i} className="fadeInLink" style={{ animationDelay: `${i * 0.05}s` }}>
                        <a
                          href="/"
                          className="link-underline text-sm font-light"
                          onMouseEnter={() => setHoveredLink(key)}
                          onMouseLeave={() => setHoveredLink(null)}
                          style={{
                            color: hoveredLink === key ? "#fff" : "rgba(224,231,255,0.8)",
                            transform: hoveredLink === key ? "translateX(4px)" : "translateX(0)",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                            style={{
                              background: hoveredLink === key ? "#67e8f9" : "#22d3ee",
                              transform: hoveredLink === key ? "scale(1.5)" : "scale(1)",
                            }}
                          />
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div
            className="slide-up-3 flex items-center justify-between gap-6 mt-11 rounded-2xl px-8 py-6 flex-wrap"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-base font-semibold text-white mb-1">Stay in the loop ✨</h3>
              <p className="text-sm font-light" style={{ color: "rgba(199,210,254,0.75)" }}>
                Get updates, articles &amp; exclusive deals.
              </p>
            </div>
            <div className="flex gap-2.5 flex-1 min-w-[280px]">
              <input
                type="email"
                className="nl-input flex-1 rounded-xl px-4 py-2.5 text-sm text-white transition-all duration-300"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "inherit",
                }}
              />
              <button
                onClick={handleSubscribe}
                className="rounded-xl px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: subscribed ? "#a5f3fc" : "#fff",
                  color: subscribed ? "#0369a1" : "#4338ca",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  fontFamily: "inherit",
                }}
              >
                {subscribed ? "Subscribed ✓" : "Subscribe →"}
              </button>
            </div>
          </div>

          {/* Features Strip */}
          <div
            className="slide-up-4 flex flex-wrap mt-9 pt-7"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default flex-1 min-w-[140px] transition-all duration-300"
                style={{
                  borderRight: i < features.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  background: hoveredFeat === i ? "rgba(255,255,255,0.06)" : "transparent",
                }}
                onMouseEnter={() => setHoveredFeat(i)}
                onMouseLeave={() => setHoveredFeat(null)}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0 transition-all duration-300"
                  style={{
                    background: hoveredFeat === i ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)",
                    transform: hoveredFeat === i ? "scale(1.2) rotate(-10deg)" : "scale(1) rotate(0deg)",
                  }}
                >
                  {f.icon}
                </div>
                <div className="text-xs leading-snug" style={{ color: "rgba(224,231,255,0.85)" }}>
                  <strong className="block text-sm font-medium text-white">{f.title}</strong>
                  {f.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="relative z-10 max-w-6xl mx-auto px-12 py-4 mt-8 flex items-center justify-between flex-wrap gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span className="text-xs font-light" style={{ color: "rgba(165,180,252,0.7)" }}>
            © 2026 YourBrand Inc. — Made with 💜 and a lot of coffee.
          </span>
          <div className="flex gap-2 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Cookie Settings", "Accessibility"].map((b, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-1 rounded-md cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredBadge(i)}
                onMouseLeave={() => setHoveredBadge(null)}
                style={{
                  color: hoveredBadge === i ? "#fff" : "rgba(199,210,254,0.8)",
                  background: hoveredBadge === i ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transform: hoveredBadge === i ? "translateY(-1px)" : "translateY(0)",
                  letterSpacing: "0.3px",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}