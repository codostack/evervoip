import { useState, useEffect } from "react";

const CountUp = ({ to, suffix = "", decimals = 0 }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 2000, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((ease * to).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to]);
  return <>{val.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</>;
};

export default function VOIPAboutHeader() {
  const [tick, setTick] = useState(0);
  const [callSec, setCallSec] = useState(0);
  const [activeLine, setActiveLine] = useState(0);
  const [packetIdx, setPacketIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTick(p => p + 1);
      setCallSec(p => p + 1);
    }, 1000);
    const l = setInterval(() => setActiveLine(p => (p + 1) % 4), 1800);
    const pk = setInterval(() => setPacketIdx(p => (p + 1) % 6), 600);
    return () => { clearInterval(t); clearInterval(l); clearInterval(pk); };
  }, []);

  const mins = String(Math.floor(callSec / 60)).padStart(2, "0");
  const secs = String(callSec % 60).padStart(2, "0");

  const phoneKeys = ["1","2","3","4","5","6","7","8","9","*","0","#"];
  const keyColors = ["#6366f1","#3b82f6","#06b6d4","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#14b8a6","#f97316","#6366f1","#3b82f6"];

  const callLog = [
    { name:"Riya Sharma",    num:"+91 98765 43210", type:"in",     codec:"G.722", dur:"04:32", color:"#10b981" },
    { name:"James Carter",   num:"+1 415 555 0192",  type:"out",    codec:"Opus",  dur:"12:07", color:"#6366f1" },
    { name:"Lena Braun",     num:"+49 30 1234 5678", type:"missed", codec:"—",     dur:"—",     color:"#ef4444" },
    { name:"Omar Hassan",    num:"+971 50 123 4567", type:"in",     codec:"G.711", dur:"02:18", color:"#f59e0b" },
  ];

  const packets = [
    { label:"SIP INVITE",  color:"#6366f1", bg:"#eef2ff" },
    { label:"100 Trying",  color:"#06b6d4", bg:"#ecfeff" },
    { label:"180 Ringing", color:"#f59e0b", bg:"#fffbeb" },
    { label:"200 OK",      color:"#10b981", bg:"#ecfdf5" },
    { label:"ACK",         color:"#8b5cf6", bg:"#f5f3ff" },
    { label:"RTP Stream",  color:"#ef4444", bg:"#fff1f2" },
  ];

  const waveH = (i) =>
    12 + Math.abs(Math.sin((i + tick * 0.5) * 0.6)) * 30 +
    Math.abs(Math.cos((i + tick * 0.3) * 0.85)) * 10;

  const waveColors = ["#6366f1","#8b5cf6","#3b82f6","#06b6d4","#10b981","#f59e0b","#ef4444","#ec4899"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Instrument+Sans:wght@400;500&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes popIn {
          from { opacity:0; transform:scale(0.82); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes floatA {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-10px); }
        }
        @keyframes floatB {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-7px); }
        }
        @keyframes floatC {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-13px); }
        }
        @keyframes bgBlob {
          0%,100% { transform:scale(1) translate(0,0); opacity:.14; }
          50%      { transform:scale(1.1) translate(18px,-14px); opacity:.22; }
        }
        @keyframes bgBlobR {
          0%,100% { transform:scale(1) translate(0,0); opacity:.10; }
          50%      { transform:scale(1.08) translate(-14px,12px); opacity:.18; }
        }
        @keyframes dotGrid {
          0%,100% { opacity:.04; }
          50%      { opacity:.09; }
        }
        @keyframes packetSlide {
          0%   { opacity:0; transform:translateX(-18px); }
          20%  { opacity:1; transform:translateX(0); }
          80%  { opacity:1; transform:translateX(0); }
          100% { opacity:0; transform:translateX(18px); }
        }
        @keyframes signalRing {
          0%   { transform:scale(1);   opacity:.8; }
          100% { transform:scale(2.8); opacity:0; }
        }
        @keyframes dialPulse {
          0%,100% { box-shadow:0 0 0 0 rgba(99,102,241,.5); }
          50%      { box-shadow:0 0 0 14px rgba(99,102,241,0); }
        }
        @keyframes keyPop {
          0%   { transform:scale(1); }
          40%  { transform:scale(.88); }
          100% { transform:scale(1); }
        }
        @keyframes lineFlash {
          0%,100% { opacity:.18; }
          50%      { opacity:.9; }
        }
        @keyframes callRowIn {
          from { opacity:0; transform:translateX(10px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes barBounce {
          from { transform:scaleY(.4); }
          to   { transform:scaleY(1); }
        }
        @keyframes countBlink {
          0%,100% { opacity:1; }
          50%      { opacity:0; }
        }

        .font-brico { font-family:'Bricolage Grotesque',sans-serif; }
        .font-inst  { font-family:'Instrument Sans',sans-serif; }
      `}</style>

      <section className="font-inst relative min-h-screen w-8xl bg-white overflow-hidden flex items-center">

        {/* bg */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{ backgroundImage:"radial-gradient(#6366f1 1px,transparent 1px)", backgroundSize:"34px 34px",
              animation:"dotGrid 5s ease-in-out infinite", opacity:.05 }} />
          <div className="absolute -top-24 right-[-80px] w-[520px] h-[520px] rounded-full"
            style={{ background:"radial-gradient(circle,#e0e7ff,transparent 68%)", animation:"bgBlob 9s ease-in-out infinite" }} />
          <div className="absolute -bottom-20 left-[-60px] w-[380px] h-[380px] rounded-full"
            style={{ background:"radial-gradient(circle,#ecfdf5,transparent 65%)", animation:"bgBlobR 11s ease-in-out infinite" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full"
            style={{ background:"radial-gradient(circle,#fef3c7,transparent 65%)", animation:"bgBlob 13s ease-in-out infinite reverse", opacity:.3 }} />
        </div>

         <div className="relative z-10 w-full max-w-[1500px] ml-auto mr-0 px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">

          {/* ══════════════ LEFT ══════════════ */}
          <div className="flex flex-col gap-7">
            
            <div className="ml-[-20px] max-w-2xl mt-[-100px]">

  {/* Heading */}
  <h1 className="font-['Syne',sans-serif] font-default text-4xl md:text-[2.6rem] leading-[1.2] tracking-relaxing text-gray-600 whitespace-nowrap">
    Power of the <span className="text-blue-400">Telecommunication</span>
  </h1>

  {/* Sub content */}
  <p className="text-gray-600 text-base leading-relaxed text-justify mt-4">
    Intelligent, cloud-powered telecom built for modern communication. Experience ultra-clear voice with AI optimization and real-time routing. Intelligent, cloud-powered telecom built for modern communication. Experience ultra-clear voice with AI optimization and real-time routing.
  </p>

  {/* Buttons */}
  <div
    style={{ animation:"fadeUp .6s ease forwards", animationDelay:".75s", opacity:0 }}
    className="flex flex-wrap gap-3 mt-6"
  >
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3.5 squared-2xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 text-sm">
      Get Started Free
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="squared" strokeLinejoin="squared" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
      </svg>
    </button>

    <button className="border border-slate-200 hover:border-indigo-400 text-slate-600 hover:text-indigo-600 font-semibold px-7 py-3.5 squared-2xl transition-all duration-300 hover:bg-indigo-50 text-sm flex items-center gap-2">
    
     More Details
    </button>
  </div>

</div>
</div>

          {/* ══════════════ RIGHT — NEW INFOGRAPHIC ══════════════ */}
          <div className="relative" style={{ animation:"popIn .9s ease forwards", animationDelay:".2s", opacity:0 }}>
            <div className="grid grid-cols-2 gap-4 mt-[-120px] ml-[80px]">

              {/* ── CARD 1: Softphone Dialpad ── */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-5 col-span-1"
                style={{ animation:"floatA 5s ease-in-out infinite" }}>

                {/* caller strip */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-2xl" style={{ background:"#eef2ff" }}>
                  <div className="relative">
                    {[0,1].map(i=>(
                      <div key={i} className="absolute inset-0 rounded-full border-2 border-indigo-400"
                        style={{ animation:`signalRing 2s ease-out infinite`, animationDelay:`${i*.9}s`, opacity:0 }}/>
                    ))}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white relative z-10"
                      style={{ background:"linear-gradient(135deg,#6366f1,#8b5cf6)", animation:"dialPulse 2s ease-in-out infinite" }}>
                      CV
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-indigo-700 truncate">+1 (888) 924-4100</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
                      <span className="text-xs text-emerald-600 font-semibold tabular-nums">{mins}:{secs}</span>
                    </div>
                  </div>
                </div>

                {/* dialpad */}
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  {phoneKeys.map((k,i)=>(
                    <button key={k}
                      className="h-9 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:scale-95 hover:brightness-90 active:scale-90"
                      style={{ background:keyColors[i], animation:`keyPop .3s ease ${i%3===1?'forwards':''}` }}>
                      {k}
                    </button>
                  ))}
                </div>

                {/* end call */}
                <button className="w-full py-2.5 rounded-2xl text-white text-xs font-bold flex items-center justify-center gap-2"
                  style={{ background:"linear-gradient(90deg,#ef4444,#f97316)" }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  End Call
                </button>
              </div>

              {/* ── CARD 2: SIP Packet flow + waveform ── */}
              <div className="flex flex-col gap-4 col-span-1">

                {/* SIP packet flow */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-4"
                  style={{ animation:"floatB 4.5s ease-in-out infinite", animationDelay:".6s" }}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">SIP Signaling</p>

                  {/* arrow line */}
                  <div className="relative flex items-center justify-between mb-3 px-1">
                    <div className="text-xs font-bold px-2 py-1 rounded-lg text-white" style={{ background:"#6366f1" }}>Client</div>
                    <div className="flex-1 mx-2 h-px relative overflow-hidden" style={{ background:"#e0e7ff" }}>
                      <div className="absolute top-1/2 -translate-y-1/2 h-px w-6 rounded-full"
                        style={{ background:"#6366f1", left:`${(packetIdx/6)*100}%`, transition:"left .6s linear",
                          boxShadow:"0 0 6px #6366f1" }}/>
                    </div>
                    <div className="text-xs font-bold px-2 py-1 rounded-lg text-white" style={{ background:"#06b6d4" }}>Server</div>
                  </div>

                  {/* current packet badge */}
                  <div className="flex items-center justify-center">
                    <div
                      key={packetIdx}
                      className="px-4 py-2 rounded-xl text-xs font-black border"
                      style={{ color:packets[packetIdx].color, background:packets[packetIdx].bg,
                        borderColor:packets[packetIdx].color+"40",
                        animation:"packetSlide .6s ease" }}>
                      {packets[packetIdx].label}
                    </div>
                  </div>
                </div>

                {/* voice waveform */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-4 flex-1"
                  style={{ animation:"floatC 5.5s ease-in-out infinite", animationDelay:"1.2s" }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Voice Wave</p>
                    <span className="text-xs font-bold text-emerald-500">● LIVE</span>
                  </div>
                  <div className="flex items-end gap-px h-12 mb-2">
                    {Array.from({length:40},(_,i)=>({
                      h: waveH(i), color: waveColors[i%waveColors.length]
                    })).map((b,i)=>(
                      <div key={i} className="flex-1 rounded-sm transition-all duration-300"
                        style={{ height:`${(b.h/60)*48}px`, background:b.color, opacity:.65+(b.h/60)*.35 }}/>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Opus · 48kHz</span>
                    <span className="font-bold" style={{ color:"#10b981" }}>MOS 4.5</span>
                  </div>
                </div>
              </div>

              {/* ── CARD 3: Call log ── */}
              

              {/* ── CARD 4: Network nodes ── */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-4 col-span-2"
                style={{ animation:"floatB 5s ease-in-out infinite", animationDelay:"1s" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Network</p>
                  <span className="text-xs font-bold text-slate-400">38 PoPs</span>
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { name:"US-East",  ms:"12ms", color:"#6366f1", pct:94 },
                    { name:"EU-West",  ms:"18ms", color:"#06b6d4", pct:82 },
                    { name:"AP-South", ms:"41ms", color:"#f59e0b", pct:58 },
                    { name:"ME-North", ms:"29ms", color:"#10b981", pct:71 },
                    { name:"SA-East",  ms:"35ms", color:"#ec4899", pct:65 },
                  ].map((n,i)=>(
                    <div key={n.name} className="flex-1 text-center group cursor-default"
                      style={{ animation:`popIn .4s ease forwards`, animationDelay:`${.3+i*.08}s`, opacity:0 }}>
                      <div className="relative mx-auto w-10 h-10 mb-2 flex items-center justify-center">
                        {/* animated ring */}
                        <svg className="absolute inset-0" viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="17" fill="none" stroke="#f1f5f9" strokeWidth="3"/>
                          <circle cx="20" cy="20" r="17" fill="none" stroke={n.color} strokeWidth="3"
                            strokeDasharray={`${n.pct*1.07} 107`} strokeLinecap="round"
                            style={{ transformOrigin:"center", transform:"rotate(-90deg)",
                              transition:"stroke-dasharray 1.5s ease", strokeDashoffset:"0" }}/>
                        </svg>
                        <span className="text-xs font-black relative z-10" style={{ color:n.color, fontSize:"9px" }}>{n.ms}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-600">{n.name}</p>
                      <div className="flex items-center justify-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background:n.color }}/>
                        <span className="text-xs text-slate-400">active</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          {/* END RIGHT */}

        </div>
      </section>
    </>
  );
}