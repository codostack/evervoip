import React from "react";

const countries = [
  { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Canada", code: "+1", flag: "https://flagcdn.com/w80/ca.png" },
  { name: "Australia", code: "+61", flag: "https://flagcdn.com/w80/au.png" },
  { name: "Germany", code: "+49", flag: "https://flagcdn.com/w80/de.png" },
  { name: "France", code: "+33", flag: "https://flagcdn.com/w80/fr.png" },
];

// VoIP / telecom SVG icon paths
const ICONS = [
  // Phone
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
  </svg>,
  // Wifi
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>
  </svg>,
  // Globe
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>,
  // Signal bars
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="1" y1="20" x2="1" y2="14"/><line x1="6" y1="20" x2="6" y2="9"/>
    <line x1="11" y1="20" x2="11" y2="4"/><line x1="16" y1="20" x2="16" y2="10"/>
    <line x1="21" y1="20" x2="21" y2="6"/>
  </svg>,
  // Headphones
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0118 0v6"/>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
  </svg>,
  // Message circle
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>,
  // Radio / signal
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.9 4.9A10 10 0 0119.1 19.1M7.7 7.7a6 6 0 018.5 8.5M12 12v9m0-9a1 1 0 100-2 1 1 0 000 2z"/>
  </svg>,
  // Server
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
  </svg>,
];

// Deterministic scatter layout
const PARTICLES = [
  // icons
  { x: 5,  y: 12, size: 22, opacity: 0.20, dur: 18, delay: 0,   type: "icon", idx: 0 },
  { x: 20, y: 62, size: 18, opacity: 0.16, dur: 22, delay: 2,   type: "icon", idx: 1 },
  { x: 38, y: 18, size: 26, opacity: 0.18, dur: 15, delay: 5,   type: "icon", idx: 2 },
  { x: 55, y: 78, size: 20, opacity: 0.15, dur: 20, delay: 1,   type: "icon", idx: 3 },
  { x: 72, y: 14, size: 24, opacity: 0.19, dur: 17, delay: 7,   type: "icon", idx: 4 },
  { x: 85, y: 58, size: 19, opacity: 0.17, dur: 25, delay: 3,   type: "icon", idx: 5 },
  { x: 93, y: 82, size: 22, opacity: 0.16, dur: 19, delay: 9,   type: "icon", idx: 6 },
  { x: 14, y: 82, size: 21, opacity: 0.14, dur: 23, delay: 4,   type: "icon", idx: 7 },
  { x: 63, y: 44, size: 17, opacity: 0.18, dur: 16, delay: 6,   type: "icon", idx: 0 },
  { x: 47, y: 92, size: 23, opacity: 0.15, dur: 21, delay: 8,   type: "icon", idx: 2 },
  // rings
  { x: 10, y: 40, size: 60,  opacity: 0.12, dur: 20, delay: 0,  type: "ring" },
  { x: 30, y: 5,  size: 90,  opacity: 0.09, dur: 28, delay: 3,  type: "ring" },
  { x: 60, y: 32, size: 70,  opacity: 0.10, dur: 24, delay: 6,  type: "ring" },
  { x: 80, y: 72, size: 110, opacity: 0.08, dur: 32, delay: 1,  type: "ring" },
  { x: 48, y: 55, size: 80,  opacity: 0.09, dur: 26, delay: 9,  type: "ring" },
  { x: 90, y: 20, size: 55,  opacity: 0.13, dur: 18, delay: 4,  type: "ring" },
  { x: 22, y: 74, size: 95,  opacity: 0.08, dur: 30, delay: 7,  type: "ring" },
  // pulse rings
  { x: 50, y: 8,  size: 50,  opacity: 0.14, dur: 14, delay: 2,  type: "pulse" },
  { x: 75, y: 82, size: 65,  opacity: 0.10, dur: 16, delay: 5,  type: "pulse" },
  { x: 8,  y: 55, size: 45,  opacity: 0.12, dur: 12, delay: 8,  type: "pulse" },
];

export default function CountryScroller() {
  return (
    <div style={{
      position: "relative", overflow: "hidden",
      paddingTop: "4rem", paddingBottom: "4rem",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    }}>

      {/* ── Base background ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
background:
  "linear-gradient(135deg, #004c4c 0%, #004c4c 50%, #004c4c 100%)",      }} />

      {/* ── Scattered floating icons & rings ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {PARTICLES.map((p, i) => {
          const anim = `float${i % 4} ${p.dur}s ease-in-out ${p.delay}s infinite`;

          if (p.type === "icon") return (
            <div key={i} style={{
              position: "absolute",
              left: p.x + "%", top: p.y + "%",
              width: p.size, height: p.size,
              color: `rgba(255,255,255,${p.opacity})`,
              animation: anim,
              transform: "translate(-50%,-50%)",
            }}>
              {ICONS[p.idx]}
            </div>
          );

          if (p.type === "ring") return (
            <div key={i} style={{
              position: "absolute",
              left: p.x + "%", top: p.y + "%",
              width: p.size, height: p.size,
              transform: "translate(-50%,-50%)",
              border: `1.5px solid rgba(255,255,255,${p.opacity})`,
              borderRadius: "50%",
              animation: anim,
            }} />
          );

          if (p.type === "pulse") return (
            <div key={i} style={{
              position: "absolute",
              left: p.x + "%", top: p.y + "%",
              transform: "translate(-50%,-50%)",
              animation: anim,
            }}>
              <div style={{
                width: p.size, height: p.size,
                border: `1.5px solid rgba(255,255,255,${p.opacity})`,
                borderRadius: "50%",
                animation: `pulseRing ${p.dur * 0.65}s ease-out ${p.delay}s infinite`,
              }} />
              <div style={{
                position: "absolute", top: "15%", left: "15%",
                width: p.size * 0.7, height: p.size * 0.7,
                border: `1px solid rgba(255,255,255,${p.opacity * 0.6})`,
                borderRadius: "50%",
                animation: `pulseRing ${p.dur * 0.65}s ease-out ${p.delay + 0.5}s infinite`,
              }} />
            </div>
          );
          return null;
        })}
      </div>

      {/* Soft edge vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
background:
"radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(3,60,72,0.55) 100%)",      }} />

      {/* ── Content ── */}
      <div style={{ position: "relative", zIndex: 10 }}>

        {/* Heading */}
        <div style={{ maxWidth: "64rem", margin: "0 auto 4rem", textAlign: "center", padding: "0 1.5rem" }}>
          <h1 style={{ color: "#ffffff", fontSize: "2.25rem", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.25 }}>
            Transforming Communication with VoIP Technology
          </h1>
          <p style={{ color: "rgba(207,250,254,0.9)", fontSize: "1.125rem", maxWidth: "36rem", margin: "0 auto" }}>
            Discover how modern Voice over IP solutions are redefining business communication with speed, clarity, and scalability.
          </p>
        </div>

        {/* Scroller strip */}
        <div style={{
          background: "rgba(0,0,0,0.15)",
          borderTop: "1px solid rgba(255,255,255,0.14)",
          borderBottom: "1px solid rgba(255,255,255,0.14)",
          backdropFilter: "blur(8px)",
          paddingTop: "1.5rem", paddingBottom: "1.5rem",
          overflow: "hidden",
        }}>
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            {[...countries, ...countries].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  padding: "1rem 1.5rem", borderRadius: "0.75rem",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                  minWidth: "260px",
                  transition: "box-shadow 0.3s, border-color 0.3s, background 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.boxShadow = "0 0 0 1.5px rgba(34,211,238,0.6), 0 6px 28px rgba(0,0,0,0.25)";
                  e.currentTarget.style.borderColor = "rgba(34,211,238,0.6)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                {/* Flag with highlight ring */}
                <div style={{
                  flexShrink: 0, borderRadius: "6px", padding: "2px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.12))",
                  boxShadow: "0 0 14px rgba(255,255,255,0.22)",
                }}>
                  <img src={c.flag} alt={c.name} style={{
                    width: "3rem", height: "2rem", borderRadius: "4px",
                    objectFit: "cover", display: "block",
                    filter: "brightness(1.1) saturate(1.2)",
                  }} />
                </div>

                <div>
                  <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                    {c.name}
                  </p>
                  <span style={{
                    fontSize: "0.75rem", color: "rgba(185,240,248,0.95)",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    padding: "2px 8px", borderRadius: "6px",
                    fontFamily: "monospace", letterSpacing: "0.05em",
                  }}>
                    {c.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 25s linear infinite; }

        @keyframes float0 {
          0%,100% { transform: translate(-50%,-50%) translateY(0px)   rotate(0deg); }
          33%      { transform: translate(-50%,-50%) translateY(-14px) rotate(5deg); }
          66%      { transform: translate(-50%,-50%) translateY(7px)   rotate(-4deg); }
        }
        @keyframes float1 {
          0%,100% { transform: translate(-50%,-50%) translateY(0px)   rotate(0deg); }
          40%      { transform: translate(-50%,-50%) translateY(12px)  rotate(-6deg); }
          70%      { transform: translate(-50%,-50%) translateY(-9px)  rotate(4deg); }
        }
        @keyframes float2 {
          0%,100% { transform: translate(-50%,-50%) translateX(0px)   rotate(0deg); }
          50%      { transform: translate(-50%,-50%) translateX(12px)  rotate(7deg); }
        }
        @keyframes float3 {
          0%,100% { transform: translate(-50%,-50%) translate(0, 0); }
          25%      { transform: translate(-50%,-50%) translate(-9px, -11px); }
          75%      { transform: translate(-50%,-50%) translate(9px,   9px); }
        }

        @keyframes pulseRing {
          0%   { transform: scale(1);    opacity: 1; }
          70%  { transform: scale(1.4);  opacity: 0.25; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
    </div>
  );
}