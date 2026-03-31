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

export default function VoipLanding() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="h-[85vh] w-full font-sans flex flex-col">
            {/* Hero Section */}
            <main className="flex-1 flex flex-col lg:flex-row items-center gap-12 px-20 py-16 mx-auto w-full">

                {/* LEFT CONTENT */}
                <div className="flex-1 flex flex-col gap-7 lg:pr-8">

<h1 className="font-['Syne',sans-serif] text-4xl md:text-4xl leading-[1.08] text-gray-700">
    Smart Communication 

  <span className="text-blue-500"> Solutions</span>
</h1>

<p className="font-sans text-gray-600 text-sm sm:text-base md:text-[17px]
leading-6 sm:leading-7 tracking-normal text-justify max-w-full lg:max-w-[620px]">
  Empower your business with secure, scalable, and intelligent
  communication services. Our platform combines cloud technology,
  automation, and real-time performance optimization to deliver
  faster connections, clearer conversations, and better customer experiences.
</p>

                    {/* CTAs */}
                    <div className="anim-fade-up-4 flex items-center gap-3 flex-wrap pt-1">

                        <div className="anim-fade-up-4 flex items-center gap-3 flex-wrap pt-1">

                            <button className="inline-flex items-center gap-2 px-6 py-3 squared-xl text-white text-sm font-semibold 
  bg-blue-500 hover:bg-blue-600 
  transition-all duration-200 border-0 cursor-pointer">

                                Get Started Free
                            </button>
                        </div>
                        <button className="inline-flex items-center gap-2 px-5 py-3 squared-xl text-sm font-medium 
  text-gray-700 border border-gray-300 bg-gray-100 
  hover:bg-gray-200 hover:border-gray-400 
  transition-all duration-200 cursor-pointer">

                            Watch Demo
                        </button>

                    </div>
                </div>

                {/* RIGHT — VOIP TABS */}
                <div className="flex-1 flex flex-col items-center gap-8 w-full max-w-[550px]">
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
                                    <span className="-rotate-45 block">
                                        {tab.letter}
                                    </span>
                                </div>

                                {/* Color bar */}
                                <div
                                    className="w-28 h-36 rounded-b-xl transition-all duration-300 flex flex-col items-center justify-start pt-4 pb-5 gap-4"
                                    style={{
                                        backgroundColor: tab.color,
                                        minHeight: "120px",
                                    }}
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
            </main>
        </div>
    );
}