import { useState } from "react";

const tabs = [
    {
        letter: "V",
        word: "VOICE",
        color: "#1a3a5c",
        accent: "#2196F3",
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
        color: "#e67e00",
        accent: "#FF9800",
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
        color: "#1565c0",
        accent: "#42A5F5",
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
        color: "#1b5e20",
        accent: "#4CAF50",
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
        <div className="min-h-screen max-w-8xl w-full bg-white font-sans flex flex-col">

            {/* Hero Section */}
            <main className="flex-1 flex flex-col lg:flex-row items-center gap-12 px-20 py-16 mx-auto w-full">

                {/* LEFT CONTENT */}
                <div className="flex-1 flex flex-col gap-7 lg:pr-8">

                    <h1 className="font-['Syne',sans-serif] font-default text-4xl md:text-[2.6rem] leading-[1.2] tracking-relaxing text-gray-600 whitespace-nowrap">
                        Talk Smarter, <span className="text-blue-400">Connect Faster</span>
                    </h1>
                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed text-justify mt-4">
                        Intelligent, cloud-powered telecom built for modern communication. Experience ultra-clear voice with AI optimization and real-time routing. Intelligent, cloud-powered telecom built for modern communication. Experience ultra-clear voice with AI optimization and real-time routing.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-7 py-3.5 transition-all shadow-lg shadow-blue-200 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Get Started Free
                        </button>
                        <button className="flex items-center gap-2 border-2 border-gray-200 hover:border-blue-300 text-gray-700 font-bold px-7 py-3.5 transition-all text-sm group">
                            <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3.5 h-3.5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </span>
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
                                        boxShadow: activeTab === i ? `0 6px 25px ${tab.color}33` : "none",
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