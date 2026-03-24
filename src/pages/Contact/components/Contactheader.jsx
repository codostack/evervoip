import { useState, useEffect } from "react";

const SOCIAL = [
  {
    id: 1, label: "Instagram", color: "#E1306C",
    gradient: "linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    ropeH: 130, delay: "0s",
    icon: <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
  },
  {
    id: 2, label: "Facebook", color: "#1877F2",
    gradient: "linear-gradient(135deg,#1877F2,#0a52c4)",
    ropeH: 175, delay: "0.35s",
    icon: <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  },
  {
    id: 3, label: "Twitter/X", color: "#14171A",
    gradient: "linear-gradient(135deg,#14171A,#657786)",
    ropeH: 105, delay: "0.15s",
    icon: <svg viewBox="0 0 24 24" fill="white" width="21" height="21"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    id: 4, label: "WhatsApp", color: "#25D366",
    gradient: "linear-gradient(135deg,#25D366,#128C7E)",
    ropeH: 155, delay: "0.5s",
    icon: <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
  },
  {
    id: 5, label: "LinkedIn", color: "#0A66C2",
    gradient: "linear-gradient(135deg,#0A66C2,#004e96)",
    ropeH: 120, delay: "0.1s",
    icon: <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    id: 6, label: "YouTube", color: "#FF0000",
    gradient: "linear-gradient(135deg,#FF0000,#cc0000)",
    ropeH: 185, delay: "0.45s",
    icon: <svg viewBox="0 0 24 24" fill="white" width="24" height="24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  },
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  const FLAGS = [
    { id: 1, name: "USA", img: "https://flagcdn.com/w80/us.png" },
    { id: 2, name: "UK", img: "https://flagcdn.com/w80/gb.png" },
    { id: 3, name: "Canada", img: "https://flagcdn.com/w80/ca.png" },
    { id: 4, name: "Australia", img: "https://flagcdn.com/w80/au.png" },
    { id: 5, name: "Germany", img: "https://flagcdn.com/w80/de.png" },
    { id: 6, name: "France", img: "https://flagcdn.com/w80/fr.png" },
  ];

  function Ornament({ icon, label, color, gradient, ropeH, delay }) {
    const [hovered, setHovered] = useState(false);
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        animation: `sway 3.8s ease-in-out infinite`,
        animationDelay: delay,
        transformOrigin: "top center",
      }}>
        <div style={{
          width: 1.5,
          height: ropeH,
          background: "linear-gradient(to bottom, rgba(203,213,225,0.25), rgba(90,100,100,0.5))",
        }} />

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: 66,
            height: 66,
            borderRadius: "50%",
            background: gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transform: hovered ? "scale(1.2) translateY(-4px)" : "scale(1)",
            transition: "all 0.3s",
          }}
        >
          {icon}
        </div>

        <span style={{
          marginTop: 8,
          fontSize: 10,
          fontWeight: 800,
          color: hovered ? color : "#64748b",
        }}>
          {label}
        </span>
      </div>
    );
  }


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:wght@700;900&display=swap');
        @keyframes sway      { 0%,100%{transform:rotate(-5deg)} 50%{transform:rotate(5deg)} }
        @keyframes floatUp   { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes orb       { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(12px,-12px) scale(1.06)} }
        @keyframes pulse-ring{ 0%{transform:scale(1);opacity:.7} 100%{transform:scale(1.8);opacity:0} }
        @keyframes badge-pulse{ 0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,.25)} 50%{box-shadow:0 0 0 7px rgba(124,58,237,0)} }

        .btn-primary {
          background: linear-gradient(135deg,#2563eb 0%,#7c3aed 60%,#db2777 100%);
          color:#fff; border:none; padding:13px 34px; border-radius:50px;
          font:800 15px/1 'Plus Jakarta Sans',sans-serif;
          cursor:pointer; transition:all .28s; letter-spacing:.01em;
          position:relative; overflow:hidden;
        }
        .btn-primary::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent);
          background-size:200% 100%; animation:shimmer 2.2s infinite;
        }
        .btn-primary:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 14px 36px rgba(37,99,235,.35)}
        .btn-outline {
          background:#fff; color:#2563eb; border:2.5px solid #2563eb;
          padding:11px 30px; border-radius:50px;
          font:800 15px/1 'Plus Jakarta Sans',sans-serif;
          cursor:pointer; transition:all .28s;
        }
        .btn-outline:hover{background:#2563eb;color:#fff;transform:translateY(-3px);box-shadow:0 14px 36px rgba(37,99,235,.2)}
        .info-card {
          display:flex; align-items:flex-start; gap:13px;
          border-radius:18px; padding:13px 15px;
          transition:all .25s cubic-bezier(.34,1.56,.64,1);
          cursor:default;
        }
        .info-card:hover{transform:translateY(-4px) scale(1.02);box-shadow:0 14px 32px rgba(0,0,0,.09)!important}
        .action-btn {
          flex:1; border:none; border-radius:14px; padding:13px 0;
          font:800 13px/1 'Plus Jakarta Sans',sans-serif;
          cursor:pointer; transition:all .25s;
        }
        .action-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.12)}
      `}</style>

      <section style={{
        minHeight: "80vh",
        background: "white",
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "48px 36px", boxSizing: "border-box",
        overflow: "hidden", position: "relative",
      }}>

        {/* Orbs */}
        {[
          { w: 320, h: 320, top: -90, left: -90, c: "#dbeafe", d: "0s" },
          { w: 240, h: 240, top: 260, left: -70, c: "#fce7f3", d: "1s" },
          { w: 200, h: 200, top: -50, right: 60, c: "#dcfce7", d: ".5s" },
          { w: 180, h: 180, bottom: -40, right: -50, c: "#fef3c7", d: "1.5s" },
        ].map((o, i) => (
          <div key={i} style={{
            position: "absolute", width: o.w, height: o.h,
            top: o.top, left: o.left, right: o.right, bottom: o.bottom,
            borderRadius: "50%", background: o.c, filter: "blur(55px)", opacity: .55,
            animation: `orb ${5 + i}s ease-in-out infinite`, animationDelay: o.d,
            pointerEvents: "none",
          }} />
        ))}

        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle,#cbd5e1 1px,transparent 1px)",
          backgroundSize: "30px 30px", opacity: .22, pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 1200, width: "100%",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 56, alignItems: "flex-start",
          position: "relative", zIndex: 1,
        }}>

          {/* ════ LEFT ════ */}
          <div
            className={`pt-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0 animate-floatUp" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Main Heading */}
            <h1 className=" mt-[-40px] ml-[-80px] font-[default] text-3xl md:text-4xl font-default text-slate-900 leading-tight mb-4 tracking-tight whitespace-nowrap">
              Let's Start a  <span style={{ color: "#004c4c" }}>Conversation</span>

            </h1>

            {/* Sub Text */}
            <p className="text-slate-500 leading-relaxed mb-7 max-w-lg ml-[-80px]">
              We’re here to help you with your business, support, or partnership
              inquiries. Reach out to our team anytime and we’ll get back to you quickly.
              We’re here to help you with your business, support, or partnership
              inquiries. Reach out to our team anytime and we’ll get back to you quickly.
            </p>

            {/* Buttons */}
<div className="flex gap-3 ml-[-80px]">
  {/* Primary Button */}
  <button className="bg-[#004c4c] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#006666] transition-all duration-300 shadow-md hover:shadow-lg">
    Get Connected
  </button>

  {/* Outline Button */}
  <button className="border border-[#004c4c] text-[#004c4c] font-semibold px-6 py-3 rounded-md hover:bg-[#004c4c] hover:text-white transition-all duration-300">
    Learn More
  </button>
</div>
          </div>
          {/* ════ RIGHT ════ */}
          <div style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "floatUp .9s ease .15s both" : "none",
            marginTop: "-20%"
          }}>

            {/* Hanging icons — threads start from top, varied rope lengths */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 28,
              padding: "0 2px",
            }}>
              {SOCIAL.map(s => <Ornament key={s.id} {...s} />)}
            </div>

            {/* Contact info card */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 10,
            }}>
              {FLAGS.map(flag => (
                <div key={flag.id} style={{
                  width: 70,
                  height: 50,


                  padding: 4,

                  transition: "transform 0.25s",
                  cursor: "pointer"
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px) scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}
                >
                  <img
                    src={flag.img}
                    alt={flag.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",

                    }}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}