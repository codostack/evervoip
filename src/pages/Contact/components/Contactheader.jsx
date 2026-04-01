import { useState, useEffect } from "react";
import {
  MdAnalytics,
  MdVoicemail,
  MdAltRoute,
  MdPersonPinCircle
} from "react-icons/md";

// % positions matching the reference layout
const NODES = [
  /* ================= MICROSOFT TEAMS ================= */
  {
    id: 1,
    name: "Microsoft Teams",
    color: "#6264A7",
    border: "#dcdcf5",
    pos: { x: 16, y: 18 },
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#6264A7">
        <path d="M2 5h10v14H2z" />
        <path d="M13 7h7v10h-7z" opacity=".6" />
        <text x="5" y="15" fontSize="8" fill="#fff" fontWeight="700">
          T
        </text>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Instagram",
    color: "#C13584",
    border: "#ffd6e7",
    pos: { x: 50, y: 9 },
    logo: (
      <svg viewBox="0 0 24 24" width="30" height="30">
        <defs>
          <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path
          fill="url(#ig)"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "LinkedIn",
    color: "#0A66C2",
    border: "#c8dff8",
    pos: { x: 84, y: 18 },
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  /* ================= TWITTER (X) ================= */
  {
    id: 4,
    name: "Twitter",
    color: "#000000",
    border: "#e5e5e5",
    pos: { x: 8, y: 50 },
    logo: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#000">
        <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.35-7.007L3.5 22H1l7.02-8.02L2 2h6.828l4.84 6.35L18.244 2z" />
      </svg>
    ),
  },

  /* ================= YOUTUBE ================= */
  {
    id: 5,
    name: "YouTube",
    color: "#FF0000",
    border: "#ffd6d6",
    pos: { x: 92, y: 50 },
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#FF0000">
        <path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.2.34c-.46.05-1.46.06-2.36 1C.73 4.56.5 6.2.5 6.2S.25 8.1.25 10v2c0 1.9.25 3.8.25 3.8s.23 1.64.94 2.36c.9.94 2.08.91 2.6 1 1.9.18 8 .34 8 .34s4.9-.01 8.2-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.25-1.9.25-3.8v-2c0-1.9-.25-3.8-.25-3.8zM9.75 14.5v-5l5 2.5-5 2.5z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Facebook",
    color: "#1877F2",
    border: "#bfcffa",
    pos: { x: 20, y: 83 },
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Google",
    color: "#4285F4",
    border: "#c8d8fb",
    pos: { x: 50, y: 91 },
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    ),
  },
  /* ================= PINTEREST ================= */
  {
    id: 8,
    name: "Pinterest",
    color: "#E60023",
    border: "#ffd1d7",
    pos: { x: 80, y: 83 },
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#E60023">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 4.99 3.05 9.26 7.38 11.08-.1-.94-.19-2.39.04-3.42.21-.9 1.36-5.74 1.36-5.74s-.35-.7-.35-1.73c0-1.62.94-2.83 2.11-2.83 1 0 1.48.75 1.48 1.65 0 1-.64 2.5-.97 3.89-.28 1.17.59 2.12 1.75 2.12 2.1 0 3.71-2.22 3.71-5.42 0-2.83-2.04-4.81-4.95-4.81-3.37 0-5.35 2.53-5.35 5.15 0 1.02.39 2.11.88 2.7.1.12.11.23.08.36-.09.4-.29 1.26-.33 1.44-.05.23-.18.28-.41.17-1.53-.71-2.48-2.95-2.48-4.74 0-3.86 2.8-7.41 8.07-7.41 4.24 0 7.54 3.02 7.54 7.05 0 4.21-2.66 7.61-6.35 7.61-1.24 0-2.4-.64-2.8-1.4l-.76 2.9c-.27 1.03-1 2.32-1.49 3.1C9.92 23.82 10.95 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
      </svg>
    ),
  },
];

const CX = 50,
  CY = 50; // center % position
const SIZE = 420; // internal SVG coordinate space

function pct(v) {
  return (v / 100) * SIZE;
}

/* ── Connector line + travelling dot ── */
function Connection({ node, idx }) {
  const pathId = `cp${node.id}`;
  const x1 = pct(CX),
    y1 = pct(CY);
  const x2 = pct(node.pos.x),
    y2 = pct(node.pos.y);

  return (
    <g>
      {/* Dashed static line */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={node.color}
        opacity="0.25"
        strokeWidth="1"
        strokeDasharray="5 6"
        style={{
          animation: "dashMove 2.6s linear infinite",
          animationDelay: `${idx * 0.22}s`,
        }}
      />
      {/* Invisible path for dot motion */}
      <path
        id={pathId}
        d={`M${x1},${y1} L${x2},${y2}`}
        fill="none"
        stroke="none"
      />
      {/* Travelling dot */}
      <circle r="4.5" fill={node.color} opacity="0.9" filter="url(#glow)">
        <animateMotion
          dur={`${1.6 + idx * 0.15}s`}
          repeatCount="indefinite"
          begin={`${idx * 0.28}s`}
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
    </g>
  );
}

/* ── Icon node ── */
function IconNode({ node, idx }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        left: `${node.pos.x}%`,
        top: `${node.pos.y}%`,
        transform: hovered
          ? "translate(-50%,-50%) scale(1.16)"
          : "translate(-50%,-50%) scale(1)",

        // ✅ increased size
        width: 80,
        height: 80,

        borderRadius: "50%",
        background: "#fff",
        border: `2px solid ${hovered ? node.color : node.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: hovered
          ? `0 8px 28px ${node.color}35, 0 0 0 5px ${node.color}15`
          : "0 2px 14px rgba(0,0,0,0.07)",
        transition: "all 0.3s cubic-bezier(.34,1.56,.64,1)",
        animation: `nodeIn 0.55s ease both`,
        animationDelay: `${0.08 * idx + 0.3}s`,
        zIndex: 2,
      }}
    >
      {/* optional slight logo scale */}
      <div style={{ transform: "scale(1.1)" }}>{node.logo}</div>
    </div>
  );
}
function toRad(deg) {
  return (deg * Math.PI) / 180;
}

/* ── Center hub ── */
function Hub() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",

        /* ✅ circle size */
        width: 120,
        height: 120,

        background: "#fff",
        borderRadius: "50%", // ✅ perfect circle
        border: "2px solid #e5e7eb",

        boxShadow:
          "0 4px 28px rgba(0,0,0,0.10), 0 0 0 7px rgba(0,100,255,0.04)",

        display: "flex",
        flexDirection: "column", // stack icon + text
        alignItems: "center",
        justifyContent: "center",
        gap: 6,

        zIndex: 4,
        animation: "hubPop 0.7s cubic-bezier(.34,1.56,.64,1) 0.1s both",
      }}
    >
      {/* Connection icon */}
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="5" fill="#6366F1" />
        <circle
          cx="15"
          cy="15"
          r="7.5"
          fill="none"
          stroke="#A5B4FC"
          strokeWidth="1"
        />

        {[0, 72, 144, 216, 288].map((a, i) => {
          const r1 = 12,
            r2 = 9;
          const x1 = 15 + r1 * Math.cos(toRad(a));
          const y1 = 15 + r1 * Math.sin(toRad(a));
          const x2 = 15 + r2 * Math.cos(toRad(a));
          const y2 = 15 + r2 * Math.sin(toRad(a));

          return (
            <line
              key={i}
              x1={x2}
              y1={y2}
              x2={x1}
              y2={y1}
              stroke="#C7D2FE"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          );
        })}

        {[0, 72, 144, 216, 288].map((a, i) => {
          const r1 = 13;
          const x = 15 + r1 * Math.cos(toRad(a));
          const y = 15 + r1 * Math.sin(toRad(a));

          return <circle key={i} cx={x} cy={y} r="2" fill="#A5B4FC" />;
        })}
      </svg>

      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          color: "#6366F1",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "'Sora',sans-serif",
        }}
      >
        Contact
      </span>
    </div>
  );
}

/* ── Full diagram ── */
function IntegrationHub() {
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "100%" }}>
      <div>
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            {/* Subtle radial bg */}
            <radialGradient id="bgR" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#f5f8ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </radialGradient>
            {/* Glow filter for dots */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width={SIZE} height={SIZE} fill="url(#bgR)" />

          {/* Connector lines + travelling dots */}
          {NODES.map((node, i) => (
            <Connection key={node.id} node={node} idx={i} />
          ))}
        </svg>

        {/* Icon nodes */}
        {NODES.map((node, i) => (
          <IconNode key={node.id} node={node} idx={i} />
        ))}

        {/* Center hub */}
        <Hub />
      </div>
    </div>
  );
}

const VOIP_CHIPS = [
  { icon: <MdAnalytics size={13} />, label: "Call Analytics" },
  { icon: <MdVoicemail size={13} />, label: "Smart Voicemail" },
  { icon: <MdAltRoute size={13} />, label: "Advanced Routing" },
  { icon: <MdPersonPinCircle size={13} />, label: "User Presence" },
];
/* ══════════════════════════════════════════
   FULL PAGE
══════════════════════════════════════════ */
export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  return (
    <>
      <style data-no-translate>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }

        @keyframes dashMove   { to { stroke-dashoffset: -22; } }
        @keyframes nodeIn     { from { opacity:0; transform:translate(-50%,-50%) scale(0.5); } to { opacity:1; transform:translate(-50%,-50%) scale(1); } }
        @keyframes hubPop     { from { opacity:0; transform:translate(-50%,-50%) scale(0.6); } to { opacity:1; transform:translate(-50%,-50%) scale(1); } }
        @keyframes fadeUp     { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bgOrb      { 0%,100% { transform:translate(0,0); } 50% { transform:translate(12px,-14px); } }
        @keyframes pulseRing  { 0% { transform:scale(1); opacity:.7; } 100% { transform:scale(2.2); opacity:0; } }
      `}</style>

      <section
        style={{
          minHeight: "90vh",
          background: "#ffffff",
          fontFamily: "'Sora', sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient orbs */}
        {[
          {
            w: 360,
            h: 360,
            top: -100,
            left: -100,
            c: "#dbeafe",
            d: "0s",
            dur: "7s",
          },
          {
            w: 220,
            h: 220,
            bottom: -70,
            left: -50,
            c: "#fce7f3",
            d: "1s",
            dur: "9s",
          },
          {
            w: 200,
            h: 200,
            top: -50,
            right: 50,
            c: "#d1fae5",
            d: "0.6s",
            dur: "8s",
          },
          {
            w: 170,
            h: 170,
            bottom: -50,
            right: -30,
            c: "#fef3c7",
            d: "2s",
            dur: "6s",
          },
        ].map((o, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: o.w,
              height: o.h,
              top: o.top,
              left: o.left,
              right: o.right,
              bottom: o.bottom,
              borderRadius: "50%",
              filter: "blur(65px)",
              opacity: 0.35,
              animation: `bgOrb ${o.dur} ease-in-out infinite`,
              animationDelay: o.d,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(#e2e8f0 1px,transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.22,
            pointerEvents: "none",
          }}
        />

        <div className="grid grid-cols-2 max-[1033px]:grid-cols-1 gap-16 items-center w-full max-w-[1340px] mx-auto relative z-10">
          {/* ══ LEFT ══ */}

          {/* <div className="flex flex-col gap-7"> */}
          <div className="flex flex-col gap-7 items-start w-full mx-auto max-[1033px]:items-center max-[1033px]:text-center">
            <h1 className="font-['Syne',sans-serif] font-default text-4xl md:text-4xl leading-[1.08] tracking-relaxing text-gray-600">
              Let's Start a <span className="text-blue-500">Conversation</span>
            </h1>

            <p className="font-sans text-gray-600 text-sm sm:text-base md:text-[17px]
  leading-6 sm:leading-7 text-justify
  max-w-[600px] xl:max-w-[620px]">              Whether you're managing customer support, sales inquiries, or
              internal collaboration, our platform helps you stay connected
              effortlessly. Integrate popular communication channels like social
              media, messaging apps, and business tools into one intelligent
              workspace designed for speed, clarity, and productivity.
            </p>

            <div className="flex flex-wrap gap-3 mt-4 max-[1033px]:justify-center">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 squared-xl text-white text-sm font-semibold 
  bg-blue-500 hover:bg-blue-600 
  transition-all duration-200 border-0 cursor-pointer"
              >
                Get Started
              </button>
              <button
                className="inline-flex items-center gap-2 px-5 py-3 squared-xl text-sm font-medium 
  text-gray-700 border border-gray-300 bg-gray-100 
  hover:bg-gray-200 hover:border-gray-400 
  transition-all duration-200 cursor-pointer"
              >
                More Details
              </button>
            </div>
            <div className="voip-chips">
{VOIP_CHIPS.map(({ icon, label }, i) => (
  <div
    key={label}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.375rem",
      padding: "0.375rem 0.75rem",
      borderRadius: "9999px",
      background: "#fff",
      border: "1px solid #dbeafe",
      fontSize: "0.72rem",
      fontWeight: 500,
      color: "rgba(29,78,216,0.8)",
      animation: "fadeUp 0.5s ease both",
      animationDelay: `${i * 0.1}s`,
    }}
  >
                  <span style={{ color: "#3b82f6" }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            className="max-[1033px]:hidden"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.85s ease 0.2s both" : "none",
              padding: "4px",
              width: "85%",
              marginLeft: "60px",
            }}
          >
            <IntegrationHub />
          </div>
        </div>
      </section>
    </>
  );
}