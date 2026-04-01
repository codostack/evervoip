import { useState, useEffect } from "react";

/* ── VoIP-specific SVG icons ── */
const PhoneWaveIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    <path d="M14.5 4a5 5 0 0 1 5.5 5.5"/><path d="M14.5 8a1 1 0 0 1 1.5 1"/>
  </svg>
);
const CloudPbxIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);
const SipTrunkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
    <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    <line x1="12" y1="10" x2="12" y2="14"/>
  </svg>
);
const QosIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);
const EncryptIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <circle cx="12" cy="16" r="1"/>
  </svg>
);
const IvrIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const VOIP_CHIPS = [
  { icon: <PhoneWaveIcon />, label: "HD Voice Calls" },
  { icon: <CloudPbxIcon />,  label: "Cloud PBX" },
  { icon: <SipTrunkIcon />,  label: "SIP Trunking" },
  { icon: <QosIcon />,       label: "QoS Monitoring" },
  { icon: <IvrIcon />,       label: "IVR & Auto-Attendant" },
];

export default function VOIPAboutHeader() {
  const [tick, setTick]             = useState(0);
  const [callSec, setCallSec]       = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const [packetIdx, setPacketIdx]   = useState(0);
  console.log(activeLine);

  useEffect(() => {
    const t  = setInterval(() => { setTick((p) => p + 1); setCallSec((p) => p + 1); }, 1000);
    const l  = setInterval(() => setActiveLine((p) => (p + 1) % 4), 1800);
    const pk = setInterval(() => setPacketIdx((p)  => (p + 1) % 6), 600);
    return () => { clearInterval(t); clearInterval(l); clearInterval(pk); };
  }, []);

  const mins = String(Math.floor(callSec / 60)).padStart(2, "0");
  const secs = String(callSec % 60).padStart(2, "0");
  const phoneKeys = ["1","2","3","4","5","6","7","8","9","*","0","#"];

  const packets = [
    { label: "SIP INVITE",  color: "#6366f1", bg: "#eef2ff" },
    { label: "100 Trying",  color: "#06b6d4", bg: "#ecfeff" },
    { label: "180 Ringing", color: "#f59e0b", bg: "#fffbeb" },
    { label: "200 OK",      color: "#10b981", bg: "#ecfdf5" },
    { label: "ACK",         color: "#8b5cf6", bg: "#f5f3ff" },
    { label: "RTP Stream",  color: "#ef4444", bg: "#fff1f2" },
  ];

  const waveH = (i) =>
    12 +
    Math.abs(Math.sin((i + tick * 0.5) * 0.6)) * 30 +
    Math.abs(Math.cos((i + tick * 0.3) * 0.85)) * 10;

  const waveColors = ["#6366f1","#8b5cf6","#3b82f6","#06b6d4","#10b981","#f59e0b","#ef4444","#ec4899"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Instrument+Sans:wght@400;500&display=swap');

        @keyframes fadeUp      { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popIn       { from{opacity:0;transform:scale(.82)} to{opacity:1;transform:scale(1)} }
        @keyframes floatA      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes floatC      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-13px)} }
        @keyframes dotGrid     { 0%,100%{opacity:.04} 50%{opacity:.09} }
        @keyframes packetSlide { 0%{opacity:0;transform:translateX(-18px)} 20%{opacity:1} 80%{opacity:1} 100%{opacity:0;transform:translateX(18px)} }
        @keyframes signalRing  { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(2.8);opacity:0} }
        @keyframes dialPulse   { 0%,100%{box-shadow:0 0 0 0 rgba(99,102,241,.5)} 50%{box-shadow:0 0 0 14px rgba(99,102,241,0)} }

        .font-inst { font-family:'Instrument Sans',sans-serif; }

        /* ── Layout ── */
        .voip-wrap {
          position:relative; min-height:80vh; width:100%; background:#fff;
          overflow:hidden; display:flex; align-items:center; justify-content:center;
          font-family:'Instrument Sans',sans-serif;
        }

        .voip-grid {
          position:relative; z-index:10; width:100%; max-width:1400px;
          margin:0 auto;
          display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center;
        }

        /* LEFT — desktop: left-aligned */
        .voip-left {
          display:flex; flex-direction:column; gap:1.75rem;
          padding-left:25px;
          align-items:flex-start; text-align:left;
        }
        .voip-left .body-text { text-align:justify; }
        .voip-btn-row { display:flex; flex-wrap:wrap; gap:0.75rem; }

        /* chips: hidden on desktop */
        .voip-chips { display:none; }

        /* ── MOBILE ≤ 1300px ── */
        @media (max-width:1300px) {
          .voip-grid {
            grid-template-columns:1fr;
            gap:2rem;
            padding:3rem 1.5rem;
          }
          /* center the left column */
          .voip-left {
            align-items:center;
            text-align:center;
            padding-left:0;
          }
          .voip-left .body-text { text-align:center; }
          .voip-btn-row { justify-content:center; }

          /* hide right cards */
          .voip-right { display:none !important; }

          /* show chips below buttons */
          .voip-chips {
            display:flex;
            flex-wrap:wrap;
            gap:0.5rem;
            justify-content:center;
          }
        }
      `}</style>

      <section className="voip-wrap">

        {/* Dot grid bg */}
        <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
          <div style={{
            position:"absolute",inset:0,
            backgroundImage:"radial-gradient(#6366f1 1px,transparent 1px)",
            backgroundSize:"34px 34px",
            animation:"dotGrid 5s ease-in-out infinite",
            opacity:0.05,
          }}/>
        </div>

        <div className="voip-grid">

          {/* ═══ LEFT ═══ */}
          <div className="voip-left">

            {/* Heading — original Syne font + colors preserved */}
            <h1 style={{
              fontFamily:"'Syne',sans-serif",
              fontWeight:"default",
              fontSize:"clamp(1.9rem,3.5vw,2.25rem)",
              lineHeight:1.08,
              color:"#374151",
              margin:0,
            }}>
              Power of the{" "}
              <span style={{color:"#3b82f6"}}>Telecommunication</span>
            </h1>

            {/* Body — original sans-serif + gray-600 colors preserved */}
          <p className="font-sans text-gray-600 text-sm sm:text-base md:text-[17px]
  leading-6 sm:leading-7 text-justify
  max-w-[600px] xl:max-w-[620px]">
              Our mission is to simplify business communication through powerful
              VoIP technology built for speed, reliability, and scalability. By
              combining cloud infrastructure with intelligent call management,
              we deliver clear, secure communication experiences that empower
              teams and support business growth worldwide.
            </p>

            {/* Buttons — original colors preserved */}
            <div className="voip-btn-row">
              <button
                style={{
                  display:"inline-flex",alignItems:"center",gap:"0.5rem",
                  padding:"0.75rem 1.5rem",
                  background:"#3b82f6",color:"#fff",
                  fontSize:"0.875rem",fontWeight:600,
                  border:"none",cursor:"pointer",
                  transition:"background .2s",
                }}
                onMouseEnter={e=>e.currentTarget.style.background="#2563eb"}
                onMouseLeave={e=>e.currentTarget.style.background="#3b82f6"}
              >Get Started</button>

              <button
                style={{
                  display:"inline-flex",alignItems:"center",gap:"0.5rem",
                  padding:"0.75rem 1.25rem",
                  background:"#f3f4f6",color:"#374151",
                  fontSize:"0.875rem",fontWeight:500,
                  border:"1px solid #d1d5db",cursor:"pointer",
                  transition:"background .2s,border-color .2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.background="#e5e7eb";e.currentTarget.style.borderColor="#9ca3af";}}
                onMouseLeave={e=>{e.currentTarget.style.background="#f3f4f6";e.currentTarget.style.borderColor="#d1d5db";}}
              >More Details</button>
            </div>

            {/* Feature chips — only appear on mobile after buttons */}
            <div className="voip-chips">
              {VOIP_CHIPS.map(({icon,label})=>(
                <div key={label} style={{
                  display:"inline-flex",alignItems:"center",gap:"0.375rem",
                  padding:"0.375rem 0.75rem",
                  borderRadius:"9999px",
                  background:"#fff",
                  border:"1px solid #dbeafe",
                  fontSize:"0.72rem",fontWeight:500,
                  color:"rgba(29,78,216,0.8)",
                }}>
                  <span style={{color:"#3b82f6"}}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ═══ RIGHT ═══ */}
          <div
            className="voip-right"
            style={{animation:"popIn .9s ease forwards",animationDelay:".2s",opacity:0}}
          >
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>

              {/* CARD 1 — Softphone Dialpad */}
              <div style={{
                background:"#fff",borderRadius:"1.5rem",
                border:"1px solid #f1f5f9",
                boxShadow:"0 20px 60px rgba(0,0,0,.08)",
                padding:"1.25rem",
                animation:"floatA 5s ease-in-out infinite",
              }}>
                {/* caller strip */}
                <div style={{
                  display:"flex",alignItems:"center",gap:"0.75rem",
                  marginBottom:"1rem",padding:"0.75rem",
                  borderRadius:"1rem",background:"#eef2ff",
                }}>
                  <div style={{position:"relative"}}>
                    {[0,1].map(i=>(
                      <div key={i} style={{
                        position:"absolute",inset:0,borderRadius:"9999px",
                        border:"2px solid #818cf8",
                        animation:"signalRing 2s ease-out infinite",
                        animationDelay:`${i*.9}s`,opacity:0,
                      }}/>
                    ))}
                    <div style={{
                      width:"2.5rem",height:"2.5rem",borderRadius:"9999px",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:"0.75rem",fontWeight:900,color:"#fff",
                      position:"relative",zIndex:1,
                      background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
                      animation:"dialPulse 2s ease-in-out infinite",
                    }}>CV</div>
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <p style={{fontSize:"0.75rem",fontWeight:700,color:"#4338ca",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",margin:0}}>
                      +1 (8) 0.04-0000
                    </p>
                    <div style={{display:"flex",alignItems:"center",gap:"0.25rem",marginTop:"0.125rem"}}>
                      <span style={{width:"0.375rem",height:"0.375rem",borderRadius:"9999px",background:"#34d399",display:"inline-block"}}/>
                      <span style={{fontSize:"0.75rem",color:"#059669",fontWeight:600,fontVariantNumeric:"tabular-nums"}}>{mins}:{secs}</span>
                    </div>
                  </div>
                </div>

                {/* dialpad */}
                <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.375rem",marginBottom:"0.75rem"}}>
                  {phoneKeys.map(k=>(
                    <button key={k}
                      style={{height:"2.25rem",borderRadius:"0.75rem",fontSize:"0.875rem",fontWeight:700,color:"#111",background:"#f3f4f6",border:"1px solid #e5e7eb",cursor:"pointer",transition:"transform .15s,background .15s"}}
                      onMouseEnter={e=>{e.currentTarget.style.transform="scale(.95)";e.currentTarget.style.background="#e5e7eb";}}
                      onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.background="#f3f4f6";}}
                    >{k}</button>
                  ))}
                </div>

                {/* end call */}
                <button style={{width:"100%",padding:"0.625rem",borderRadius:"1rem",background:"linear-gradient(to right,#bbf7d0,#86efac)",color:"#166534",fontSize:"0.75rem",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",border:"none",cursor:"pointer"}}>
                  <svg style={{width:"1rem",height:"1rem"}} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  End Call
                </button>
              </div>

              {/* CARD 2+3 — SIP + waveform */}
              <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>

                {/* SIP packet flow */}
                <div style={{background:"#fff",borderRadius:"1.5rem",border:"1px solid #f1f5f9",boxShadow:"0 20px 60px rgba(0,0,0,.08)",padding:"1rem",animation:"floatB 4.5s ease-in-out infinite",animationDelay:".6s"}}>
                  <p style={{fontSize:"0.65rem",fontWeight:700,color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.1em",margin:"0 0 0.75rem"}}>SIP Signaling</p>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.75rem",padding:"0 0.25rem"}}>
                    <div style={{fontSize:"0.65rem",fontWeight:700,padding:"0.25rem 0.5rem",borderRadius:"0.5rem",background:"#6366f1",color:"#fff"}}>Client</div>
                    <div style={{flex:1,margin:"0 0.5rem",height:"1px",position:"relative",overflow:"hidden",background:"#e0e7ff"}}>
                      <div style={{position:"absolute",top:"50%",transform:"translateY(-50%)",height:"1px",width:"1.5rem",borderRadius:"9999px",background:"#6366f1",left:`${(packetIdx/6)*100}%`,transition:"left .6s linear",boxShadow:"0 0 6px #6366f1"}}/>
                    </div>
                    <div style={{fontSize:"0.65rem",fontWeight:700,padding:"0.25rem 0.5rem",borderRadius:"0.5rem",background:"#06b6d4",color:"#fff"}}>Server</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div key={packetIdx} style={{padding:"0.5rem 1rem",borderRadius:"0.75rem",fontSize:"0.75rem",fontWeight:900,border:`1px solid ${packets[packetIdx].color}40`,color:packets[packetIdx].color,background:packets[packetIdx].bg,animation:"packetSlide .6s ease"}}>
                      {packets[packetIdx].label}
                    </div>
                  </div>
                </div>

                {/* voice waveform */}
                <div style={{background:"#fff",borderRadius:"1.5rem",border:"1px solid #f1f5f9",boxShadow:"0 20px 60px rgba(0,0,0,.08)",padding:"1rem",flex:1,display:"flex",flexDirection:"column",animation:"floatC 5.5s ease-in-out infinite",animationDelay:"1.2s"}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.5rem"}}>
                    <p style={{fontSize:"0.65rem",fontWeight:700,color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.1em",margin:0}}>Voice Wave</p>
                    <span style={{fontSize:"0.65rem",fontWeight:700,color:"#10b981"}}>● LIVE</span>
                  </div>
                  <div style={{marginTop:"auto"}}>
                    <div style={{display:"flex",alignItems:"flex-end",gap:"1px",height:"3rem",marginBottom:"0.5rem"}}>
                      {Array.from({length:40},(_,i)=>({h:waveH(i),color:waveColors[i%waveColors.length]})).map((b,i)=>(
                        <div key={i} style={{flex:1,borderRadius:"2px",height:`${(b.h/60)*48}px`,background:b.color,opacity:0.65+(b.h/60)*0.35,transition:"height .3s ease"}}/>
                      ))}
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:"0.65rem",color:"#94a3b8"}}>
                      <span>Opus · 48kHz</span>
                      <span style={{fontWeight:700,color:"#10b981"}}>MOS 4.5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 4 — Global Network */}
              <div style={{background:"#fff",borderRadius:"1.5rem",border:"1px solid #f1f5f9",boxShadow:"0 20px 60px rgba(0,0,0,.08)",padding:"1rem",gridColumn:"1 / -1",animation:"floatB 5s ease-in-out infinite",animationDelay:"1s"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.75rem"}}>
                  <p style={{fontSize:"0.65rem",fontWeight:700,color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.1em",margin:0}}>Global Network</p>
                  <span style={{fontSize:"0.65rem",fontWeight:700,color:"#94a3b8"}}>38 PoPs</span>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                  {[
                    {name:"US-East",  ms:"12ms",color:"#6366f1",pct:94},
                    {name:"EU-West",  ms:"18ms",color:"#06b6d4",pct:82},
                    {name:"AP-South", ms:"41ms",color:"#f59e0b",pct:58},
                    {name:"ME-North", ms:"29ms",color:"#10b981",pct:71},
                    {name:"SA-East",  ms:"35ms",color:"#ec4899",pct:65},
                  ].map((n,i)=>(
                    <div key={n.name} style={{flex:1,textAlign:"center",animation:"popIn .4s ease forwards",animationDelay:`${0.3+i*.08}s`,opacity:0,cursor:"default"}}>
                      <div style={{position:"relative",margin:"0 auto",width:"2.5rem",height:"2.5rem",marginBottom:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <svg style={{position:"absolute",inset:0}} viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="17" fill="none" stroke="#f1f5f9" strokeWidth="3"/>
                          <circle cx="20" cy="20" r="17" fill="none" stroke={n.color} strokeWidth="3"
                            strokeDasharray={`${n.pct*1.07} 107`} strokeLinecap="round"
                            style={{transformOrigin:"center",transform:"rotate(-90deg)",transition:"stroke-dasharray 1.5s ease"}}
                          />
                        </svg>
                        <span style={{fontSize:"9px",fontWeight:900,color:n.color,position:"relative",zIndex:1}}>{n.ms}</span>
                      </div>
                      <p style={{fontSize:"0.7rem",fontWeight:600,color:"#475569",margin:0}}>{n.name}</p>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.25rem",marginTop:"0.125rem"}}>
                        <span style={{width:"0.375rem",height:"0.375rem",borderRadius:"9999px",background:n.color,display:"inline-block"}}/>
                        <span style={{fontSize:"0.65rem",color:"#94a3b8"}}>active</span>
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