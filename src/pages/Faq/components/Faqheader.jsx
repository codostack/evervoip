import React, { useEffect, useRef } from "react";
import { FaUsers, FaLightbulb, FaPlane, FaRegUser } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const STYLES = `
  @keyframes spin-cw        { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
  @keyframes spin-ccw       { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
  @keyframes float-up       { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }

  .gear-spin-cw        { animation: spin-cw  18s linear infinite; }
  .gear-spin-ccw       { animation: spin-ccw 12s linear infinite; }
  .gear-spin-cw-slow   { animation: spin-cw  30s linear infinite; }
  .gear-spin-ccw-slow  { animation: spin-ccw 22s linear infinite; }

  .float-anim { animation: float-up 5s ease-in-out infinite; }
`;

const Gear = ({
  size = 120,
  color = "#4eb9e5",
  innerColor = "white",
  children,
  isMain = false,
  spinClass = "gear-spin-cw",
}) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full absolute inset-0 drop-shadow-lg ${spinClass}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="44" y="2"
              width="12" height="15"
              transform={`rotate(${i * 30} 50 50)`}
              rx="1"
            />
          ))}
          <circle cx="50" cy="50" r="38" />
        </g>
        <circle cx="50" cy="50" r={isMain ? 28 : 25} fill={innerColor} />
        {isMain && (
          <circle cx="50" cy="50" r="24" fill="none" stroke={color} strokeWidth="1" opacity="0.3" />
        )}
      </svg>

      <div
        className="relative z-10 flex items-center justify-center"
        style={{ color }}
      >
        {children}
      </div>
    </div>
  );
};

export default function ContactFAQSection() {
  const stylesInjected = useRef(false);
  useEffect(() => {
    if (stylesInjected.current) return;
    stylesInjected.current = true;
    const el = document.createElement("style");
    el.textContent = STYLES;
    document.head.appendChild(el);
  }, []);

  return (
    <section className="w-full bg-white py-24 px-6 md:px-20 overflow-hidden">
<div
  className="grid md:grid-cols-2 items-center"
  style={{
    maxWidth: "1360px",
    margin: "0 auto",
    gap: "10rem",
  }}
>
        {/* LEFT TEXT CONTENT — exactly as original */}
{/* LEFT TEXT CONTENT */}
<div className="flex flex-col gap-7 ml-[10px]">

  <h1 className="font-['Syne',sans-serif] text-4xl md:text-4xl leading-[1.08] text-gray-700">
    Frequently Asked{" "}
    <span className="text-blue-500">Questions</span>
  </h1>

  <p className="font-sans text-gray-600 text-sm sm:text-base md:text-[17px]
    leading-6 sm:leading-7 text-justify max-w-full lg:max-w-[620px]">

    Find quick answers to the most common questions about our platform,
    services, and integrations. We’ve gathered helpful information to guide
    you through setup, features, and support so you can get started with
    confidence and make the most of your experience.
  </p>

  <div className="flex gap-4 mt-6">
    <button className="inline-flex items-center gap-2 px-6 py-3
      text-white text-sm font-semibold bg-blue-500 hover:bg-blue-600 transition">
      View All FAQs
    </button>

    <button className="inline-flex items-center gap-2 px-6 py-3
      text-sm font-medium text-gray-700 border border-gray-300 bg-gray-100
      hover:bg-gray-200 transition">
      Contact Support
    </button>
  </div>

</div>


        {/* RIGHT — Gear Cluster: distinct colors + spin animations */}
        <div className="relative h-[420px] flex items-center justify-center">
          <div className="float-anim relative w-full h-full max-w-[470px]">

            {/* CENTER — Indigo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <Gear size={200} color="#4f46e5" innerColor="#eef2ff" isMain spinClass="gear-spin-cw-slow">
                <span style={{ fontWeight: 800, fontSize: "1.9rem", color: "#4f46e5" }}>FAQ</span>
              </Gear>
            </div>

            {/* TOP LEFT — Cyan */}
            <div className="absolute left-[15%] top-[10%]">
              <Gear size={95} color="#06b6d4" innerColor="#ecfeff" spinClass="gear-spin-ccw">
                <FaUsers className="text-2xl" />
              </Gear>
            </div>

            {/* TOP RIGHT — Violet */}
            <div className="absolute right-[15%] top-[10%]">
              <Gear size={95} color="#7c3aed" innerColor="#f5f3ff" spinClass="gear-spin-cw">
                <FaRegUser className="text-2xl" />
              </Gear>
            </div>

            {/* MIDDLE LEFT — Emerald */}
            <div className="absolute left-[-5%] top-[37%]">
              <Gear size={140} color="#10b981" innerColor="#ecfdf5" spinClass="gear-spin-ccw-slow">
                <HiUserGroup className="text-4xl" />
              </Gear>
            </div>

            {/* MIDDLE RIGHT — Amber */}
            <div className="absolute right-[-5%] top-[37%]">
              <Gear size={140} color="#f59e0b" innerColor="#fffbeb" spinClass="gear-spin-cw-slow">
                <FaLightbulb className="text-3xl" />
              </Gear>
            </div>

            {/* BOTTOM LEFT — Rose */}
            <div className="absolute left-[20%] bottom-[5%]">
              <Gear size={95} color="#f43f5e" innerColor="#fff1f2" spinClass="gear-spin-cw">
                <FaPlane className="text-2xl" />
              </Gear>
            </div>

            {/* BOTTOM RIGHT — Sky Blue */}
            <div className="absolute right-[20%] bottom-[5%]">
              <Gear size={95} color="#0ea5e9" innerColor="#f0f9ff" spinClass="gear-spin-ccw">
                <FaLightbulb className="text-2xl" />
              </Gear>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}