import { useEffect, useRef } from "react";
import {
  FaPhoneAlt,
  FaGlobe,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPhoneAlt className="text-[#0891b2] text-xl" />,
    title: "HD Voice Quality",
    desc: "Crystal clear calls powered by smart VoIP routing and adaptive codecs.",
  },
  {
    icon: <FaGlobe className="text-[#0891b2] text-xl" />,
    title: "Global Coverage",
    desc: "Reliable connections spanning worldwide networks with 99.9% uptime.",
  },
  {
    icon: <FaHeadset className="text-[#0891b2] text-xl" />,
    title: "24/7 Support",
    desc: "Expert telecom engineers available around the clock for your team.",
  },
  {
    icon: <FaShieldAlt className="text-[#0891b2] text-xl" />,
    title: "Secure Network",
    desc: "End-to-end encrypted communication that keeps every call private.",
  },
];

export default function VoipFeatures() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 + i * 130);
    });
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      {/* Top gradient band */}
      <div className="w-full h-28 bg-gradient-to-b from-sky-100 via-sky-50 to-white" />

      {/* Content */}
      <div className="px-6 pb-0">
        {/* Label */}
        <p className="text-center text-[11px] font-semibold tracking-[3px] uppercase text-[#0891b2] mb-2">
          Why choose us
        </p>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
          Powerful VoIP features
        </h2>

        {/* Subheading */}
        <p className="text-center text-[15px] text-slate-500 mb-12">
          Everything your business needs for crystal-clear, secure communication.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="
                group relative bg-white border border-slate-200 rounded-2xl
                p-6 flex flex-col overflow-hidden
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(8,145,178,0.12)]
                hover:border-sky-200
              "
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, border-color 0.25s ease",
              }}
            >
              {/* Top accent bar */}
              <span
                className="
                  absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl
                  bg-gradient-to-r from-[#0891b2] to-sky-400
                  scale-x-0 group-hover:scale-x-100
                  origin-left transition-transform duration-300
                "
              />

              {/* Icon */}
              <div
                className="
                  w-12 h-12 rounded-xl bg-sky-100
                  flex items-center justify-center mb-4
                  transition-colors duration-300
                  group-hover:bg-sky-200
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-slate-900 mb-1.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient band */}
      <div className="w-full h-28 bg-gradient-to-t from-sky-100 via-sky-50 to-white" />
    </section>
  );
}