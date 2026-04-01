import { useState } from "react";

const tabs = [
  {
    letter: "V",
    word: "VOICE",
    color: "#0F8FA6",
    accent: "#2EC4D6",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2.5" className="w-10 h-10">
        <path d="M32 8 L44 28 L20 28 Z" />
        <rect x="28" y="28" width="8" height="14" rx="1" />
        <path d="M20 42 Q32 52 44 42" />
        <line x1="32" y1="52" x2="32" y2="58" />
        <line x1="24" y1="58" x2="40" y2="58" />
      </svg>
    ),
    desc: "Crystal-clear voice transmission over IP networks with zero latency.",
  },
  {
    letter: "O",
    word: "OVER",
    color: "#0A5E6E",
    accent: "#2EC4D6",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2.5" className="w-10 h-10">
        <path d="M10 32 Q20 18 32 26 Q44 34 54 20" />
        <polyline points="46,14 54,20 48,28" />
        <path d="M10 44 Q20 30 32 38 Q44 46 54 32" />
        <polyline points="46,26 54,32 48,40" />
      </svg>
    ),
    desc: "Seamless data routing across global internet infrastructure.",
  },
  {
    letter: "I",
    word: "INTERNET",
    color: "#13A3B8",
    accent: "#2EC4D6",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2.5" className="w-10 h-10">
        <circle cx="32" cy="28" r="14" />
        <path d="M18 28 Q24 20 32 20 Q40 20 46 28" />
        <path d="M18 28 Q24 36 32 36 Q40 36 46 28" />
        <line x1="32" y1="14" x2="32" y2="42" />
        <circle cx="32" cy="48" r="5" fill="white" stroke="white" />
        <line x1="20" y1="56" x2="44" y2="56" />
        <line x1="32" y1="53" x2="32" y2="56" />
      </svg>
    ),
    desc: "Powered by the world's most resilient internet backbone.",
  },
  {
    letter: "P",
    word: "PROTOCOL",
    color: "#084C5A",
    accent: "#2EC4D6",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2.5" className="w-10 h-10">
        <rect x="14" y="10" width="36" height="44" rx="3" />
        <line x1="20" y1="22" x2="44" y2="22" />
        <line x1="20" y1="30" x2="44" y2="30" />
        <line x1="20" y1="38" x2="36" y2="38" />
        <circle cx="40" cy="46" r="6" fill="white" stroke="white" />
        <polyline points="37,46 39,48 43,44" stroke="#1b5e20" strokeWidth="2" />
      </svg>
    ),
    desc: "Industry-standard SIP & RTP protocols for universal compatibility.",
  },
];

/* ── VoIP keyword chips (icon + label) ── */
const PhoneWaveIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    <path d="M14.5 4a5 5 0 0 1 5.5 5.5"/><path d="M14.5 8a1 1 0 0 1 1.5 1"/>
  </svg>
);
const CloudIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);
const SipIcon = () => (
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
const LockIcon = () => (
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
const GlobeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const DialIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const VOIP_CHIPS = [
  { icon: <CloudIcon />,     label: "Cloud PBX" },
  { icon: <IvrIcon />,       label: "IVR & Auto-Attendant" },
  { icon: <GlobeIcon />,     label: "Global Connectivity" },
  { icon: <DialIcon />,      label: "Secure Dialing" },
];

export default function VoipLanding() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full font-sans flex flex-col" style={{ minHeight: "81vh" }}>

      {/* Hero Section */}
      <main
        className="flex-1 flex items-center justify-center w-full mx-auto px-6 py-14 sm:px-10 sm:py-16"
        style={{ maxWidth: "87rem" }}
      >
        <div
          className="flex flex-col items-center w-full gap-10
                     [@media(min-width:1300px)]:flex-row
                     [@media(min-width:1300px)]:items-center
                     [@media(min-width:1300px)]:justify-between
                     [@media(min-width:1300px)]:gap-12
                     [@media(min-width:1300px)]:px-10"
        >

          {/* ══ LEFT CONTENT ══ */}
          <div
            className="flex flex-col gap-6 items-center text-center w-full max-w-2xl
                       [@media(min-width:1300px)]:flex-1
                       [@media(min-width:1300px)]:items-start
                       [@media(min-width:1300px)]:text-left
                       [@media(min-width:1300px)]:max-w-none
                       [@media(min-width:1300px)]:pr-8
                       [@media(min-width:1300px)]:gap-7"
          >
            {/* Heading — unchanged */}
            <h1 className="font-['Syne',sans-serif] text-3xl sm:text-4xl leading-[1.08] text-gray-700">
              Smart Communication
              <span className="text-blue-500"> Solutions</span>
            </h1>

            {/* Body text — unchanged */}
          <p className="font-sans text-gray-600 text-sm sm:text-base md:text-[17px]
  leading-6 sm:leading-7 text-justify
  max-w-[600px] xl:max-w-[620px]">
              Empower your business with secure, scalable, and intelligent
              communication services. Our platform combines cloud technology,
              automation, and real-time performance optimization to deliver
              faster connections, clearer conversations, and better customer experiences.
            </p>

            {/* CTAs — unchanged */}
            <div
              className="flex items-center gap-3 flex-wrap justify-center pt-1
                         [@media(min-width:1300px)]:justify-start"
            >
              <button
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold
                           bg-blue-500 hover:bg-blue-600 transition-all duration-200 border-0 cursor-pointer"
              >
                Get Started Free
              </button>
              <button
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
                           text-gray-700 border border-gray-300 bg-gray-100
                           hover:bg-gray-200 hover:border-gray-400 transition-all duration-200 cursor-pointer"
              >
                Watch Demo
              </button>
            </div>

            {/* ── VoIP keyword chips ──
                Visible only below 1300px (when the right VOIP panel is hidden).
                On desktop (≥1300px) they are hidden. */}
            <div
              className="flex flex-wrap gap-2 justify-center pt-1
                         [@media(min-width:1300px)]:hidden"
            >
              {VOIP_CHIPS.map(({ icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             bg-white border border-blue-100
                             text-[0.72rem] font-medium text-blue-700/80"
                >
                  <span className="text-blue-500">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — VOIP TABS ══
              Hidden below 1300px, visible at/above 1300px — unchanged */}
          <div
            className="hidden
                       [@media(min-width:1300px)]:flex
                       flex-col items-center gap-8 flex-1 max-w-[550px]"
          >
            {/* VOIP Letter Cards */}
            <div className="flex gap-8 justify-center">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="flex flex-col items-center gap-0 group focus:outline-none"
                >
                  {/* Letter tile */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center
                                font-black text-4xl text-gray-900 transition-all duration-300
                                border-2 rotate-45"
                    style={{
                      backgroundColor: activeTab === i ? "white" : "#f8f9fa",
                      borderColor: tab.color,
                      transform: activeTab === i
                        ? "translateY(-15px) rotate(45deg)"
                        : "translateY(-20px) rotate(45deg)",
                    }}
                  >
                    <span className="-rotate-45 block">{tab.letter}</span>
                  </div>

                  {/* Color bar */}
                  <div
                    className="w-28 h-36 rounded-b-xl transition-all duration-300 flex flex-col items-center justify-start pt-4 pb-5 gap-4"
                    style={{ backgroundColor: tab.color, minHeight: "120px" }}
                  >
                    <span className="text-white text-xs font-bold tracking-widest">
                      {tab.word}
                    </span>
                    <div className="opacity-100 transition-opacity duration-200 scale-125">
                      {tab.icon}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Tab Detail Card */}
            <div
              className="w-full max-w-3xl rounded-2xl p-8 text-white transition-all duration-300"
              style={{ backgroundColor: tabs[activeTab].color }}
            >
              <div className="flex items-center gap-4 mb-4">
                {tabs[activeTab].icon}
                <div>
                  <p className="text-white/60 text-xs font-bold tracking-widest uppercase">
                    {tabs[activeTab].letter} — {tabs[activeTab].word}
                  </p>
                  <h3 className="text-white font-black text-2xl">
                    {tabs[activeTab].word}
                  </h3>
                </div>
              </div>

              <p className="text-white/80 text-base leading-relaxed">
                {tabs[activeTab].desc}
              </p>

              <div className="mt-5 flex gap-2">
                {tabs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: activeTab === i ? "32px" : "10px",
                      backgroundColor: activeTab === i ? "white" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}