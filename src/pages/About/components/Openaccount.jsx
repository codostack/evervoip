import { useState, useEffect } from "react";

const features = [
  { icon: "📞", title: "Presence", desc: "Sit donec enim, amet ipsum in dummy content lorem ipsum." },
  { icon: "📋", title: "Assignment", desc: "Sit donec enim, amet ipsum in dummy content lorem ipsum." },
  { icon: "💳", title: "Bill Payment", desc: "Sit donec enim, amet ipsum in dummy content lorem ipsum." },
  { icon: "📊", title: "KRS/KRSS", desc: "Sit donec enim, amet ipsum in dummy content lorem ipsum." },
  { icon: "📝", title: "Final Exam", desc: "Sit donec enim, amet ipsum in dummy content lorem ipsum." },
  { icon: "📅", title: "Events", desc: "Sit donec enim, amet ipsum in dummy content lorem ipsum." },
];

export default function Features() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ringPulse {
          0%   { transform: translate(-50%, -50%) scale(0.6); opacity: 0.15; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animated-bg {
          background: linear-gradient(135deg, #054f5e 0%, #06768d 50%, #079ab8 100%);
          background-size: 200% 200%;
          animation: gradShift 6s ease infinite;
        }
       
        .fade-up { animation: fadeUp 0.5s ease both; }
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 34px rgba(0,0,0,0.18);
        }
      `}</style>

      {/* BLUE SECTION */}
      <section className="animated-bg relative overflow-visible pt-20 px-6 h-[400px]">
        
        {/* Rings */}
       

        <div className="relative z-10 max-w-6xl ml-auto mr-0 w-full flex flex-col lg:flex-row gap-10">

          {/* LEFT TEXT */}
          <div
            className= {`lg:w-[30%] w-full ${visible ? "fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-white text-4xl font-bold mb-4 ml-[-80px]">Features</h2>
            <p className="text-white/75 text-sm leading-relaxed mb-8 ml-[-80px]">
              Parturient purus id nunc, nisl. Varius in pulvinar senectus quis.
              Lacus nec eleifend id nisl eu gravida tincidunt elementum.
            </p>
            <button className=" ml-[-80px] border border-white text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-white hover:text-[#06768d] transition-colors duration-200">
              More Features
            </button>
          </div>

          {/* RIGHT CARDS */}
          <div className="lg:w-[70%] w-full grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`card-hover bg-white rounded-2xl p-6 min-h-[170px] ${
                  visible ? "fade-up" : "opacity-0"
                } ${i >= 3 ? "lg:translate-y-40" : ""}`}
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-gray-800 font-semibold text-base mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHITE SECTION UNDER (So cards overflow onto this) */}
      <section className="bg-gray-100 h-[220px]"></section>
    </>
  );
}