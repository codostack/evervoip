import { useState, useEffect } from "react";

export default function VOIPAboutHeader() {
  const [tick, setTick] = useState(0);
  const [callSec, setCallSec] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const [packetIdx, setPacketIdx] = useState(0);
  console.log(activeLine);

  useEffect(() => {
    const t = setInterval(() => {
      setTick(p => p + 1);
      setCallSec(p => p + 1);
    }, 1000);

    const l = setInterval(() => setActiveLine(p => (p + 1) % 4), 1800);
    const pk = setInterval(() => setPacketIdx(p => (p + 1) % 6), 600);

    return () => {
      clearInterval(t);
      clearInterval(l);
      clearInterval(pk);
    };
  }, []);

  const mins = String(Math.floor(callSec / 60)).padStart(2, "0");
  const secs = String(callSec % 60).padStart(2, "0");

  const phoneKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  const packets = [
    { label: "SIP INVITE", color: "#6366f1", bg: "#eef2ff" },
    { label: "100 Trying", color: "#06b6d4", bg: "#ecfeff" },
    { label: "180 Ringing", color: "#f59e0b", bg: "#fffbeb" },
    { label: "200 OK", color: "#10b981", bg: "#ecfdf5" },
    { label: "ACK", color: "#8b5cf6", bg: "#f5f3ff" },
    { label: "RTP Stream", color: "#ef4444", bg: "#fff1f2" },
  ];

  const waveH = (i) =>
    12 +
    Math.abs(Math.sin((i + tick * 0.5) * 0.6)) * 30 +
    Math.abs(Math.cos((i + tick * 0.3) * 0.85)) * 10;

  const waveColors = [
    "#6366f1", "#8b5cf6", "#3b82f6", "#06b6d4",
    "#10b981", "#f59e0b", "#ef4444", "#ec4899"
  ];

  return (
    <>
      {/* ================= STYLES (UNCHANGED) ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Instrument+Sans:wght@400;500&display=swap');

        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes popIn{from{opacity:0;transform:scale(.82)}to{opacity:1;transform:scale(1)}}
        @keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes floatC{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
        @keyframes bgBlob{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
        @keyframes bgBlobR{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
        @keyframes dotGrid{0%,100%{opacity:.04}50%{opacity:.09}}
        @keyframes packetSlide{0%{opacity:0;transform:translateX(-18px)}20%{opacity:1}80%{opacity:1}100%{opacity:0;transform:translateX(18px)}}
        @keyframes signalRing{0%{transform:scale(1);opacity:.8}100%{transform:scale(2.8);opacity:0}}
        @keyframes dialPulse{0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,.5)}50%{box-shadow:0 0 0 14px rgba(99,102,241,0)}}

        .font-inst{font-family:'Instrument Sans',sans-serif;}
      `}</style>

      {/* ================= SECTION ================= */}
      {/* FIX 1: removed invalid w-8xl */}
      {/* FIX 2: centered container */}
      <section className="relative min-h-[80vh] w-full bg-white overflow-hidden flex items-center justify-center font-inst">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#6366f1 1px,transparent 1px)",
              backgroundSize: "34px 34px",
              animation: "dotGrid 5s ease-in-out infinite",
              opacity: 0.05,
            }}
          />
        </div>

        {/* ================= MAIN GRID ================= */}
        {/* FIX 3: perfectly centered container */}
        <div className="relative z-10 w-full max-w-8xl mx-auto px-6 ml-15px lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-16">

          {/* ================= LEFT SIDE ================= */}
<div className="flex flex-col gap-7 ml-[25px]">

            <h1 className="font-['Syne',sans-serif] text-4xl md:text-[2.6rem] leading-[1.2] text-gray-600">
              Power of the{" "}
              <span className="text-blue-500">
                Telecommunication
              </span>
            </h1>
<p className="text-gray-600 text-base leading-relaxed text-justify mt-4 w-[92%]">
  Intelligent, cloud-powered telecom built for modern communication.
  Experience ultra-clear voice with AI optimization and real-time routing.
  Intelligent, cloud-powered telecom built for modern communication.
  Experience ultra-clear voice with AI optimization and real-time routing.
</p>

            <div
              style={{
                animation: "fadeUp .6s ease forwards",
                animationDelay: ".75s",
                opacity: 0,
              }}
              className="flex flex-wrap gap-3 mt-6"
            >

              <button className="inline-flex items-center gap-2 px-6 py-3 squared-xl text-white text-sm font-semibold 
  bg-blue-500 hover:bg-blue-600 
  transition-all duration-200 border-0 cursor-pointer">

                Get Started
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-3 squared-xl text-sm font-medium 
  text-gray-700 border border-gray-300 bg-gray-100 
  hover:bg-gray-200 hover:border-gray-400 
  transition-all duration-200 cursor-pointer">

                More Details
              </button>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          {/* DESIGN UNCHANGED — only alignment wrapper fixed */}
          <div className="relative" style={{ animation: "popIn .9s ease forwards", animationDelay: ".2s", opacity: 0 }}>
            <div className="grid grid-cols-2 gap-4">

              {/* ── CARD 1: Softphone Dialpad ── */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-5 col-span-1"
                style={{ animation: "floatA 5s ease-in-out infinite" }}>

                {/* caller strip */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-2xl" style={{ background: "#eef2ff" }}>
                  <div className="relative">
                    {[0, 1].map(i => (
                      <div key={i} className="absolute inset-0 rounded-full border-2 border-indigo-400"
                        style={{ animation: `signalRing 2s ease-out infinite`, animationDelay: `${i * .9}s`, opacity: 0 }} />
                    ))}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white relative z-10"
                      style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", animation: "dialPulse 2s ease-in-out infinite" }}>
                      CV
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-indigo-700 truncate">+1 (8) 0.04-0000</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-emerald-600 font-semibold tabular-nums">{mins}:{secs}</span>
                    </div>
                  </div>
                </div>

                {/* dialpad */}
<div className="grid grid-cols-3 gap-1.5 mb-3">
  {phoneKeys.map((k, i) => (
    <button
      key={k}
      className="
        h-9
        rounded-xl
        text-sm
        font-bold
        text-black
        bg-gray-100
        border border-gray-200
        transition-all duration-150
        hover:scale-95
        hover:bg-gray-200
        active:scale-90
      "
      style={{
        animation: `keyPop .3s ease ${
          i % 3 === 1 ? "forwards" : ""
        }`,
      }}
    >
      {k}
    </button>
  ))}
</div>

                {/* end call */}
<button
  className="
    w-full
    py-2.5
    rounded-2xl
    text-white
    text-xs
    font-bold
    flex
    items-center
    justify-center
    gap-2
    bg-gradient-to-r
    from-green-200
    to-green-300
    hover:from-green-200
    hover:to-green-300
    transition-all
    duration-200
  "
>
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
  End Call
</button>
              </div>

              {/* ── CARD 2: SIP Packet flow + waveform ── */}
              <div className="flex flex-col gap-4 col-span-1">

                {/* SIP packet flow */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-4"
                  style={{ animation: "floatB 4.5s ease-in-out infinite", animationDelay: ".6s" }}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">SIP Signaling</p>

                  {/* arrow line */}
                  <div className="relative flex items-center justify-between mb-3 px-1">
                    <div className="text-xs font-bold px-2 py-1 rounded-lg text-white" style={{ background: "#6366f1" }}>Client</div>
                    <div className="flex-1 mx-2 h-px relative overflow-hidden" style={{ background: "#e0e7ff" }}>
                      <div className="absolute top-1/2 -translate-y-1/2 h-px w-6 rounded-full"
                        style={{
                          background: "#6366f1", left: `${(packetIdx / 6) * 100}%`, transition: "left .6s linear",
                          boxShadow: "0 0 6px #6366f1"
                        }} />
                    </div>
                    <div className="text-xs font-bold px-2 py-1 rounded-lg text-white" style={{ background: "#06b6d4" }}>Server</div>
                  </div>

                  {/* current packet badge */}
                  <div className="flex items-center justify-center">
                    <div
                      key={packetIdx}
                      className="px-4 py-2 rounded-xl text-xs font-black border"
                      style={{
                        color: packets[packetIdx].color, background: packets[packetIdx].bg,
                        borderColor: packets[packetIdx].color + "40",
                        animation: "packetSlide .6s ease"
                      }}>
                      {packets[packetIdx].label}
                    </div>
                  </div>
                </div>

                {/* voice waveform */}
<div
  className="bg-white rounded-3xl border border-slate-100 shadow-xl p-4 flex flex-col h-full"
  style={{
    animation: "floatC 5.5s ease-in-out infinite",
    animationDelay: "1.2s",
  }}
>
  {/* TOP HEADER */}
  <div className="flex items-center justify-between mb-2">
    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
      Voice Wave
    </p>
    <span className="text-xs font-bold text-emerald-500">● LIVE</span>
  </div>

  {/* bottom content wrapper */}
  <div className="mt-auto">
    {/* WAVE ANIMATION */}
    <div className="flex items-end gap-px h-12 mb-2">
      {Array.from({ length: 40 }, (_, i) => ({
        h: waveH(i),
        color: waveColors[i % waveColors.length],
      })).map((b, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-300"
          style={{
            height: `${(b.h / 60) * 48}px`,
            background: b.color,
            opacity: 0.65 + (b.h / 60) * 0.35,
          }}
        />
      ))}
    </div>

    {/* FOOTER INFO */}
    <div className="flex justify-between text-xs text-slate-400">
      <span>Opus · 48kHz</span>
      <span className="font-bold text-emerald-500">MOS 4.5</span>
    </div>
  </div>
</div>
              </div>

              {/* ── CARD 4: Network nodes ── */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-4 col-span-2"
                style={{ animation: "floatB 5s ease-in-out infinite", animationDelay: "1s" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Network</p>
                  <span className="text-xs font-bold text-slate-400">38 PoPs</span>
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { name: "US-East", ms: "12ms", color: "#6366f1", pct: 94 },
                    { name: "EU-West", ms: "18ms", color: "#06b6d4", pct: 82 },
                    { name: "AP-South", ms: "41ms", color: "#f59e0b", pct: 58 },
                    { name: "ME-North", ms: "29ms", color: "#10b981", pct: 71 },
                    { name: "SA-East", ms: "35ms", color: "#ec4899", pct: 65 },
                  ].map((n, i) => (
                    <div key={n.name} className="flex-1 text-center group cursor-default"
                      style={{ animation: `popIn .4s ease forwards`, animationDelay: `${.3 + i * .08}s`, opacity: 0 }}>
                      <div className="relative mx-auto w-10 h-10 mb-2 flex items-center justify-center">
                        {/* animated ring */}
                        <svg className="absolute inset-0" viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="17" fill="none" stroke="#f1f5f9" strokeWidth="3" />
                          <circle cx="20" cy="20" r="17" fill="none" stroke={n.color} strokeWidth="3"
                            strokeDasharray={`${n.pct * 1.07} 107`} strokeLinecap="round"
                            style={{
                              transformOrigin: "center", transform: "rotate(-90deg)",
                              transition: "stroke-dasharray 1.5s ease", strokeDashoffset: "0"
                            }} />
                        </svg>
                        <span className="text-xs font-black relative z-10" style={{ color: n.color, fontSize: "9px" }}>{n.ms}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-600">{n.name}</p>
                      <div className="flex items-center justify-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: n.color }} />
                        <span className="text-xs text-slate-400">active</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}