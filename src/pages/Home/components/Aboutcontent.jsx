import { useState, useEffect, useRef } from "react";

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

      @keyframes pulse-ring {
        0% { transform: scale(0.8); opacity: 0.6; }
        100% { transform: scale(2.2); opacity: 0; }
      }
      @keyframes float-up {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.15; }
        50% { transform: translateY(-30px) rotate(180deg); opacity: 0.35; }
      }
      @keyframes grid-scroll {
        0% { transform: translateY(0); }
        100% { transform: translateY(60px); }
      }
      @keyframes bar-grow {
        0% { height: 0%; opacity: 0; }
        100% { height: var(--h); opacity: 1; }
      }
      @keyframes orbit {
        0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
      }
      @keyframes data-flow {
        0% { stroke-dashoffset: 200; opacity: 0; }
        30% { opacity: 1; }
        100% { stroke-dashoffset: 0; opacity: 0.4; }
      }
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes fadeSlideUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes cardReveal {
        0% { opacity: 0; transform: translateY(40px) scale(0.96); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes iconSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes wave {
        0%, 100% { transform: scaleY(0.4); }
        50% { transform: scaleY(1); }
      }
      @keyframes ping-slow {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.1); }
      }

      .font-syne { font-family: 'Syne', sans-serif; }
      .font-dm { font-family: 'DM Sans', sans-serif; }

      .shimmer-text {
        background: linear-gradient(90deg, #7ee8fa 0%, #ffffff 40%, #7ee8fa 60%, #eec0c6 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 3s linear infinite;
      }

      .card-hover {
        transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease, border-color 0.35s ease;
      }
      .card-hover:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 0 40px rgba(126,232,250,0.12);
        border-color: rgba(126,232,250,0.5);
      }

      .learn-btn {
        position: relative;
        overflow: hidden;
        transition: color 0.25s;
      }
      .learn-btn::after {
        content: '';
        position: absolute;
        left: 0; bottom: 0;
        width: 0; height: 2px;
        background: #7ee8fa;
        transition: width 0.3s ease;
      }
      .learn-btn:hover::after { width: 100%; }
      .learn-btn:hover { color: #7ee8fa; }

      .glow-dot {
        box-shadow: 0 0 8px 3px rgba(126,232,250,0.6);
      }
      .hero-card {
        animation: fadeSlideUp 0.8s cubic-bezier(.22,.68,0,1.2) both;
      }
      .feature-card-1 { animation: cardReveal 0.7s 0.1s cubic-bezier(.22,.68,0,1.2) both; }
      .feature-card-2 { animation: cardReveal 0.7s 0.22s cubic-bezier(.22,.68,0,1.2) both; }
      .feature-card-3 { animation: cardReveal 0.7s 0.34s cubic-bezier(.22,.68,0,1.2) both; }
      .spaces-card { animation: cardReveal 0.7s 0.46s cubic-bezier(.22,.68,0,1.2) both; }

      .wave-bar { animation: wave 1.2s ease-in-out infinite; }

      .grid-bg {
        background-image:
          linear-gradient(rgba(126,232,250,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(126,232,250,0.06) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: grid-scroll 4s linear infinite;
      }
    `}</style>

    {/* Animated grid */}
    <div className="grid-bg absolute inset-0" style={{ height: "200%" }} />

    {/* Soft radial glow blobs */}
    <div className="absolute top-[-80px] right-[10%] w-96 h-96 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(126,232,250,0.12) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[10%] left-[-5%] w-80 h-80 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(238,192,198,0.1) 0%, transparent 70%)" }} />

    {/* Floating geometric shapes */}
    {[
      { size: 10, x: "8%", y: "20%", delay: "0s", dur: "6s" },
      { size: 6, x: "85%", y: "35%", delay: "1.5s", dur: "8s" },
      { size: 14, x: "15%", y: "70%", delay: "3s", dur: "7s" },
      { size: 8, x: "92%", y: "75%", delay: "0.8s", dur: "9s" },
      { size: 5, x: "50%", y: "15%", delay: "2s", dur: "5s" },
    ].map((s, i) => (
      <div key={i} className="absolute rounded-sm"
        style={{
          width: s.size, height: s.size,
          left: s.x, top: s.y,
          background: "rgba(126,232,250,0.3)",
          animation: `float-up ${s.dur} ${s.delay} ease-in-out infinite`,
          transform: "rotate(45deg)"
        }} />
    ))}

    {/* Pulse rings at bottom left */}
    {[1, 2, 3].map((i) => (
      <div key={i} className="absolute rounded-full border border-cyan-400/20"
        style={{
          width: 80, height: 80,
          left: "5%", bottom: "12%",
          animation: `pulse-ring 3s ${i * 0.9}s ease-out infinite`
        }} />
    ))}
  </div>
);

const BarChart3D = () => (
  <div className="relative flex items-end gap-2 h-36 w-40">
    {[
      { h: "40%", delay: "0s", color: "rgba(126,232,250,0.5)" },
      { h: "65%", delay: "0.15s", color: "rgba(126,232,250,0.65)" },
      { h: "85%", delay: "0.3s", color: "rgba(126,232,250,0.8)" },
      { h: "100%", delay: "0.45s", color: "#7ee8fa" },
    ].map((b, i) => (
      <div key={i} className="flex-1 rounded-t-md relative overflow-hidden"
        style={{
          height: b.h, background: b.color,
          animation: `bar-grow 1s ${b.delay} cubic-bezier(.22,.68,0,1.2) both`,
          "--h": b.h,
          boxShadow: `0 0 12px 2px rgba(126,232,250,0.3)`
        }}>
        <div className="absolute inset-0 opacity-40"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />
      </div>
    ))}
    {/* Floating dot on tallest bar */}
    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-cyan-300 glow-dot"
      style={{ animation: "ping-slow 2s ease-in-out infinite" }} />
    {/* Base line */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan-400/30" />
  </div>
);

const WaveIcon = () => (
  <div className="flex items-center gap-0.5 h-8">
    {[0.3, 0.6, 1, 0.8, 0.5, 0.9, 0.4, 0.7].map((scale, i) => (
      <div key={i} className="w-1 rounded-full bg-cyan-300 wave-bar"
        style={{ height: 28 * scale, animationDelay: `${i * 0.12}s` }} />
    ))}
  </div>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const RadarIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    {[40, 30, 20, 10].map((r, i) => (
      <circle key={i} cx="50" cy="50" r={r} stroke="rgba(126,232,250,0.25)" strokeWidth="1" />
    ))}
    <circle cx="50" cy="50" r="3" fill="#7ee8fa" />
    <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(126,232,250,0.4)" strokeWidth="1" />
    <line x1="50" y1="50" x2="85" y2="50" stroke="rgba(126,232,250,0.4)" strokeWidth="1" />
    <line x1="50" y1="50" x2="15" y2="50" stroke="rgba(126,232,250,0.2)" strokeWidth="1" />
    <line x1="50" y1="50" x2="50" y2="90" stroke="rgba(126,232,250,0.2)" strokeWidth="1" />
    {/* Sweep */}
    <path d="M50,50 L50,10 A40,40 0 0,1 90,50 Z" fill="rgba(126,232,250,0.08)"
      style={{ transformOrigin: "50px 50px", animation: "iconSpin 4s linear infinite" }} />
    <circle cx="72" cy="28" r="3" fill="#7ee8fa" style={{ animation: "ping-slow 2s ease-in-out infinite" }} />
    <circle cx="35" cy="35" r="2" fill="rgba(238,192,198,0.8)" style={{ animation: "ping-slow 2s 0.5s ease-in-out infinite" }} />
  </svg>
);

const features = [
  {
    icon: <PhoneIcon />,
    title: "Cloud PBX",
    desc: "Host your entire phone system in the cloud. Route calls intelligently, set up IVR menus, and manage extensions—add $0.01 per minute per line.",
    cardClass: "feature-card-1",
  },
  {
    icon: <WaveIcon />,
    title: "SIP Trunking",
    desc: "Connect your existing PBX to our global network. Scale capacity instantly when call volumes spike—add $15 per trunk per month.",
    cardClass: "feature-card-2",
  },
  {
    icon: <GlobeIcon />,
    title: "Virtual Numbers",
    desc: "Get local or toll-free numbers in 60+ countries instantly. Redirect calls to any device worldwide—at no additional setup cost.",
    cardClass: "feature-card-3",
  },
];

export default function VoipScaleSection() {
  return (
    <div
      className="relative min-h-screen overflow-hidden font-dm"
      style={{ backgroundColor: "#06768d" }}
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* ── HERO ROW ── */}
        <div className="hero-card flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-16">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-cyan-300 glow-dot" />
              <span className="text-cyan-200/70 text-xs tracking-widest uppercase font-syne">Enterprise VoIP Platform</span>
            </div>
            <h1 className="font-syne text-5xl md:text-6xl font-800 leading-tight mb-5">
              <span className="shimmer-text">Scale</span>
              <br />
              <span className="text-white">Your Voice</span>
            </h1>
            <p className="text-cyan-100/70 text-lg leading-relaxed font-dm font-light">
              We grow as fast as you do. Whether you're expanding globally or your call volumes are spiking, our infrastructure keeps every conversation crystal clear and always connected.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-end gap-6">
            <BarChart3D />
            {/* Floating stat badges */}
            <div className="flex flex-col gap-3">
              {[
                { label: "Uptime", value: "99.99%" },
                { label: "Countries", value: "60+" },
              ].map((s, i) => (
                <div key={i}
                  className="rounded-xl px-4 py-2 text-center"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(126,232,250,0.2)",
                    backdropFilter: "blur(8px)"
                  }}>
                  <div className="font-syne text-xl font-bold text-cyan-200">{s.value}</div>
                  <div className="text-cyan-300/60 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURE CARDS ROW ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`card-hover rounded-2xl p-6 ${f.cardClass}`}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(126,232,250,0.18)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Icon box */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(126,232,250,0.12)",
                  border: "1px solid rgba(126,232,250,0.25)",
                  color: "#7ee8fa"
                }}>
                {f.icon}
              </div>

              <h3 className="font-syne text-white text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-cyan-100/60 text-sm leading-relaxed mb-5 font-light">{f.desc}</p>

              <button className="learn-btn text-cyan-300 text-sm font-syne font-semibold tracking-wide uppercase flex items-center gap-2">
                Learn more
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* ── SPACES / ANALYTICS BANNER ── */}
        <div
          className="spaces-card rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(126,232,250,0.18)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Radar visual */}
            <div className="md:w-64 flex-shrink-0 flex items-center justify-center p-8"
              style={{ borderRight: "1px solid rgba(126,232,250,0.12)" }}>
              <div className="w-36 h-36 relative">
                <RadarIcon />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(126,232,250,0.15)", color: "#7ee8fa" }}>
                  <ShieldIcon />
                </div>
                <h2 className="font-syne text-white text-2xl font-bold">Analytics & Compliance</h2>
              </div>
              <p className="text-white text-sm leading-relaxed mb-5 max-w-xl font-light">
                The simplest way to monitor, record, and analyze all your voice traffic at scale. Real-time dashboards, call quality metrics, regulatory compliance logs, and audit-ready reports — all in one place, at no additional storage cost.
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                {["Call Recording", "GDPR Ready", "Live Monitoring", "API Access"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full font-syne"
                    style={{
                      background: "rgba(126,232,250,0.1)",
                      border: "1px solid rgba(126,232,250,0.25)",
                      color: "#7ee8fa"
                    }}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className="learn-btn text-cyan-300 text-sm font-syne font-semibold tracking-wide uppercase flex items-center gap-2">
                Learn more
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>

            {/* Right stats column */}
            <div className="md:w-48 flex-shrink-0 flex flex-col justify-center gap-4 p-8"
              style={{ borderLeft: "1px solid rgba(126,232,250,0.12)" }}>
              {[
                { label: "Avg Call Quality", value: "4.9/5", icon: "★" },
                { label: "Records/Day", value: "2M+", icon: "◈" },
                { label: "Latency", value: "<20ms", icon: "⚡" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-cyan-300/50 text-lg mb-1">{s.icon}</div>
                  <div className="font-syne text-xl font-bold text-white">{s.value}</div>
                  <div className="text-cyan-300/50 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-12 text-center" style={{ animation: "fadeSlideUp 0.8s 0.6s both" }}>
          <p className="text-cyan-100/50 text-sm mb-4 font-light">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              className="font-syne font-semibold text-sm px-7 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7ee8fa, #5bc5d8)",
                color: "#064f60",
                boxShadow: "0 8px 30px rgba(126,232,250,0.3)"
              }}>
              Get Free Test
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
}