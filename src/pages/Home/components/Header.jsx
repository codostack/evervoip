import { useState, useEffect } from "react";
import { IoMdMailUnread } from "react-icons/io";

/* ── tiny SVG icons ── */
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.06 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const SignalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="2" y1="20" x2="2" y2="14" /><line x1="8" y1="20" x2="8" y2="10" />
    <line x1="14" y1="20" x2="14" y2="4" /><line x1="20" y1="20" x2="20" y2="2" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
  </svg>
);
const ZapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const ActivityIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const SettingsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

/* ── Waveform ── */
function Waveform({ bars = 32 }) {
  const W = bars * 9;
  return (
    <svg viewBox={`0 0 ${W} 52`} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
      <defs>
        <linearGradient id="wg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0077ff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#00aaff" stopOpacity="1" />
          <stop offset="100%" stopColor="#0055dd" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {Array.from({ length: bars }).map((_, i) => {
        const h = 14 + Math.sin(i * 0.65) * 13 + Math.sin(i * 1.4) * 8;
        const y = (52 - h) / 2;
        return (
          <rect
            key={i} x={i * 9 + 2} y={y} width={5} height={h} rx={2.5}
            fill="url(#wg)" opacity={0.65 + (i % 4) * 0.09}
            style={{
              transformOrigin: "center center",
              animation: `wavePulse ${1.1 + (i % 5) * 0.18}s ${(i * 0.075) % 1.6}s ease-in-out infinite`,
            }}
          />
        );
      })}
    </svg>
  );
}

/* ── Tab panels ── */
function TabQuality() {
  const metrics = [
    {
      label: "Voice Quality",
      pct: "",
      w: "98%",
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-100",
      text: "text-green-600"
    },
    {
      label: "Packet Loss",
      pct: "",
      w: "3%",
      color: "from-red-500 to-rose-400",
      bg: "bg-red-100",
      text: "text-red-600"
    },
    {
      label: "Jitter",
      pct: "",
      w: "10%",
      color: "from-yellow-500 to-amber-400",
      bg: "bg-yellow-100",
      text: "text-yellow-600"
    },
    {
      label: "Latency",
      pct: "",
      w: "18%",
      color: "from-purple-500 to-violet-400",
      bg: "bg-purple-100",
      text: "text-purple-600"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {metrics.map(({ label, pct, w, color, bg, text }) => (
        <div key={label}>
          <div className="flex justify-between mb-1">
            <span className={`text-[0.68rem] ${text}/70`}>{label}</span>
            <span className={`text-[0.68rem] font-semibold ${text}`}>{pct}</span>
          </div>

          <div className={`h-1 rounded-full ${bg} overflow-hidden`}>
            <div
              className={`h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_6px_rgba(0,0,0,0.2)]`}
              style={{ width: w }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
function TabTeam() {
  const members = [
    {
      name: "Email",
      role: "business@evershine.com",
      status: "online",
      icon: IoMdMailUnread,
      bg: "bg-yellow-50",
      border: "border-yellow-100",
      text: "text-gray-400", // 👈 gray email text
      avatar: "from-yellow-500 to-amber-400"
    },
    {
      name: "Number",
      role: "+1 (218) 220-9130",
      status: "online",
      icon: PhoneIcon,
      bg: "bg-green-50",
      border: "border-blue-100",
      text: "text-blue-600",
      avatar: "from-blue-500 to-emerald-400"
    },
  ];

  const dot = {
    online: "bg-green-400",
    busy: "bg-orange-400",
    away: "bg-slate-400"
  };

  return (
    <div className="flex flex-col gap-2">
      {members.map(m => {
        const Icon = m.icon;

        return (
          <div
            key={m.name}
            className={`flex items-center justify-between px-3 py-2 rounded-xl ${m.bg} border ${m.border}`}
          >

            <div className="flex items-center gap-2">

              {/* 👇 ICON instead of letter */}
              <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${m.avatar} flex items-center justify-center text-white`}>
                <Icon size={14} />
              </div>

              <div>
                <div className="text-[0.72rem] font-semibold text-slate-800">
                  {m.name}
                </div>

                {/* 👇 Email now gray */}
                <div className={`text-[0.64rem] ${m.text}`}>
                  {m.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[0.64rem] text-slate-500">
                Active
              </span>
              <div className={`w-1.5 h-1.5 rounded-full ${dot[m.status]}`} />
            </div>

          </div>
        );
      })}
    </div>
  );
}

function TabRegions() {
  const regions = [
    {
      name: "US East",
      load: 78,
      ms: "",
      bar: "from-green-500 to-emerald-400",
      bg: "bg-green-100",
      text: "text-green-600"
    },
    {
      name: "EU West",
      load: 61,
      ms: "",
      bar: "from-yellow-500 to-amber-400",
      bg: "bg-yellow-100",
      text: "text-yellow-600"
    },
    {
      name: "Asia Pacific",
      load: 44,
      ms: "",
      bar: "from-purple-500 to-violet-400",
      bg: "bg-purple-100",
      text: "text-purple-600"
    },
    {
      name: "South Asia",
      load: 33,
      ms: "",
      bar: "from-red-500 to-rose-400",
      bg: "bg-red-100",
      text: "text-red-600"
    },
  ];

  return (
    <div className="flex flex-col gap-2.5">
      {regions.map(r => (
        <div key={r.name} className="flex items-center gap-3">

          <span className={`w-20 text-[0.67rem] ${r.text}/70 shrink-0`}>
            {r.name}
          </span>

          <div className={`flex-1 h-1.5 rounded-full ${r.bg} overflow-hidden`}>
            <div
              className={`h-full rounded-full bg-gradient-to-r ${r.bar} transition-all duration-500`}
              style={{ width: `${r.load}%` }}
            />
          </div>

          <span className={`w-8 text-right text-[0.65rem] font-semibold ${r.text}`}>
            {r.ms}
          </span>

        </div>
      ))}
    </div>
  );
}

function TabConfig() {
  const [noise, setNoise] = useState(true);
  const [hd, setHd] = useState(true);
  const [encrypt, setEncrypt] = useState(true);

  const Toggle = ({ val, onChange, label }) => (
    <div className="flex items-center justify-between py-2 border-b border-slate-200">

      <span className="text-[0.72rem] text-slate-700">{label}</span>

      <button
        onClick={() => onChange(!val)}
        className={`relative w-8 h-4 rounded-full transition ${val ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" : "bg-slate-200"
          }`}
      >
        <div
          className={`absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition ${val ? "left-[18px]" : "left-0.5"
            }`}
        />
      </button>
    </div>
  );

  return (
    <div>
      <Toggle val={noise} onChange={setNoise} label="AI Noise Cancellation" />
      <Toggle val={hd} onChange={setHd} label="HD Voice (Opus 48kHz)" />
      <Toggle val={encrypt} onChange={setEncrypt} label="E2E Encryption" />

      <p className="mt-2.5 text-center text-[0.65rem] text-slate-600 bg-slate-50 rounded-lg py-1.5 px-2 border">
        Codec: Opus · Bitrate: 32–128 kbps adaptive
      </p>
    </div>
  );
}

const TABS = [
  {
    id: "quality",
    label: "Quality",
    Icon: ActivityIcon,
    active: "bg-green-100 text-green-600",
    inactive: "text-green-500/70 hover:bg-green-50"
  },
  {
    id: "team",
    label: "Contact",
    Icon: UsersIcon,
    active: "bg-yellow-100 text-yellow-600",
    inactive: "text-yellow-500/70 hover:bg-yellow-50"
  },
  {
    id: "regions",
    label: "Regions",
    Icon: GlobeIcon,
    active: "bg-orange-100 text-orange-600",
    inactive: "text-orange-500/70 hover:bg-orange-50"
  },
  {
    id: "config",
    label: "Config",
    Icon: SettingsIcon,
    active: "bg-purple-100 text-purple-600",
    inactive: "text-purple-500/70 hover:bg-purple-50"
  }
];

/* ══════════════ MAIN COMPONENT ══════════════ */
export default function VoipHeader() {
  const [activeTab, setActiveTab] = useState("quality");

  const tabContent = {
    quality: <TabQuality />,
    team: <TabTeam />,
    regions: <TabRegions />,
    config: <TabConfig />,
  };

  const [count, setCount] = useState(550); // start in middle

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        const direction = Math.random() > 0.5 ? 1 : -1;
        let next = prev + direction;

        // keep between 500 - 1000
        if (next < 500) next = 500;
        if (next > 1000) next = 1000;

        return next;
      });
    }, 900); // slow

    return () => clearInterval(timer);
  }, []);



  return (
    <div className="relative min-h-[81vh] w-full bg-white overflow-hidden">

      {/* keyframes only — no inline style props on JSX elements */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'DM Sans', sans-serif; }
        @keyframes wavePulse { 0%,100%{transform:scaleY(0.25)} 50%{transform:scaleY(1)} }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes shimmer   { to{background-position:200% center} }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(38px)} to{opacity:1;transform:translateX(0)} }
       
        .shimmer-text {
          background: linear-gradient(110deg,#0077ff 0%,#00aaff 45%,#0055dd 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
        .card-shine::before {
          content:''; position:absolute; top:0; left:0; right:0;
          height:1px;
          background:linear-gradient(90deg,transparent,rgba(0,150,255,0.5),transparent);
        }
      `}</style>

      {/* static grid overlay — pure Tailwind */}


      {/* hero layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[81vh] px-8 md:px-16 py-20">

        {/* ══ LEFT ══ */}
        <div className="space-y-8 z-10 ml-0 lg:ml-[12px] mt-[-60px]">

          <div className="anim-fade-up-2">
            <h1 className="font-['Syne',sans-serif] font-default text-4xl md:text-[2.6rem] leading-[1.08] tracking-relaxing text-gray-600">
              The Empower of
              <span className="text-blue-400"> Telecommunication</span>
            </h1>
          </div>

          {/* sub content */}
<p className="text-gray-600 text-base leading-relaxed max-w-[43rem] text-justify text-sm">
              Intelligent, cloud-powered telecom built for modern communication. Experience ultra-clear voice with AI optimization and real-time routing. Intelligent, cloud-powered telecom built for modern communication. Experience ultra-clear voice with AI optimization and real-time routing.
          </p>
          <div className="anim-fade-up-4 flex items-center gap-3 flex-wrap pt-1">

            <div className="anim-fade-up-4 flex items-center gap-3 flex-wrap pt-1">

              <button className="inline-flex items-center gap-2 px-6 py-3 squared-xl text-white text-sm font-semibold 
  bg-blue-400 hover:bg-blue-400 
  transition-all duration-200 border-0 cursor-pointer">

                Get Started
              </button>
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-3 squared-xl text-sm font-medium 
  text-gray-700 border border-gray-300 bg-gray-100 
  hover:bg-gray-200 hover:border-gray-400 
  transition-all duration-200 cursor-pointer">

              Learn More
            </button>

          </div>

        </div>

        {/* ══ RIGHT CARD ══ */}
        <div className="anim-fade-right flex flex-col gap-3 w-[600px] -mt-8">

          {/* main glass card */}
          <div className="card-shine relative rounded-[20px] bg-white/80 border border-gray-400 backdrop-blur-2xl p-6 overflow-hidden flex-1">

            {/* card header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className=" font-default text-xl text-slate-900">Live Call Analytics</p>
                <p className="text-sm text-orange-400 mt-0.5">Real-time quality monitoring</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500 border border-green-500">
                <span className="live-dot w-1.5 h-1.5 squared-full bg-white" />
                <span className="text-[0.65rem] font-default text-white tracking-wider">Live</span>
              </div>
            </div>

            {/* waveform */}
            <div className="mb-4 mt-[20px] flex items-center ml-[80px]">

              {/* Play Button */}
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Waveform */}
              <div className="-ml-1">
                <Waveform bars={40} />
              </div>

            </div>

            {/* active calls strip */}
            <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-blue-50/60 border border-blue-100 mb-4 mt-[60px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-400 flex items-center justify-center  text-white">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Active Right Now</p>
                  <p className="font-['Syne',sans-serif] font-bold text-[0.95rem] text-slate-900">
                    {count.toLocaleString()} calls
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[0.65rem] text-red-400">HD codec</p>
                <p className="text-[0.76rem] font-semibold text-gray-400">Opus 48kHz</p>
              </div>
            </div>

            {/* tab bar */}
            <div className="flex gap-1 bg-slate-100 rounded-xl p-1 mb-4">
              {TABS.map(({ id, label, Icon, active, inactive }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-[9px] text-[0.68rem] font-medium transition-all duration-200
        ${activeTab === id
                      ? `${active} shadow-sm`
                      : `${inactive}`
                    }`}
                >
                  <Icon />
                  {label}
                </button>
              ))}
            </div>

            {/* tab content */}
            <div key={activeTab}>{tabContent[activeTab]}</div>
          </div>

          {/* feature chips */}
          <div className="flex flex-wrap gap-2">
            {[
              { Icon: ShieldIcon, label: "E2E Encrypted" },
              { Icon: ZapIcon, label: "AI Noise Cancel" },
              { Icon: GlobeIcon, label: "Global PoPs" },
              { Icon: SignalIcon, label: "HD Voice" },
            ].map(({ Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-blue-100 text-[0.72rem] font-medium text-blue-700/80">
                <span className="text-blue-500"><Icon /></span>
                {label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}