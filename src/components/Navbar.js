// src/components/Navbar.js
import { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import { Languages, X, Menu } from "lucide-react";
import logo from "../assets/logo.jpeg";
import usePageTranslator from "../usePageTranslator";
import { LanguageContext } from "../Context/LanguageContext";
import { navbarTranslations } from "./DummyTranslator/Navbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const nav = navbarTranslations[language] || navbarTranslations.en;
  const loading = usePageTranslator(language); // Capture loading state

  const navItems = [
    { name: nav.home, href: "/" },
    { name: nav.about, href: "/about" },
    { name: nav.services, href: "/services" },
    { name: nav.contact, href: "/contact" },
    { name: nav.faq, href: "/faq" },
  ];

  const languages = [
    { name: "English", code: "en" },
    { name: "French", code: "fr" },
    { name: "Arabic", code: "ar" },
    { name: "Spanish", code: "es" },
    { name: "Japanese", code: "ja" },
    { name: "German", code: "de" },
    { name: "Korean", code: "ko" },
    { name: "Italian", code: "it" },
    { name: "Chinese", code: "zh-CN" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={16} />, bg: "#1877F2", href: "/" },
    { icon: <FaTwitter size={16} />, bg: "#1DA1F2", href: "/" },
    { icon: <FaInstagram size={16} />, bg: "#E4405F", href: "/" },
    { icon: <FaLinkedinIn size={16} />, bg: "#0A66C2", href: "/" },
    { icon: <FaYoutube size={16} />, bg: "#FF0000", href: "/" },
    { icon: <FaGithub size={16} />, bg: "#171515", href: "/" },
  ];

  // Reusable language selector component with loading animation
  const LanguageSelector = ({ mobile = false }) => (
    <div className={`relative ${mobile ? "w-full" : "w-40"}`}>
      {/* Animated border when loading */}
      {loading && (
        <span
          className="absolute inset-0 rounded-lg pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(90deg, #3b82f6, #06b6d4, #6366f1, #3b82f6)",
            backgroundSize: "200% 100%",
            animation: "shimmerBorder 1.2s linear infinite",
            padding: "2px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        disabled={loading}
        className={`
          w-full appearance-none outline-none transition-all duration-200
          ${mobile
            ? "pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700"
            : "pl-12 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:border-gray-400"
          }
          ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* Icon area: spinner when loading, globe icon when idle */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center ${
          mobile ? "left-3" : "left-3"
        }`}
      >
        {loading ? (
          <svg
            className="animate-spin text-blue-500"
            width={mobile ? 16 : 18}
            height={mobile ? 16 : 18}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeOpacity="0.25"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <Languages
            size={mobile ? 16 : 18}
            className="text-blue-500"
          />
        )}
      </div>

      {/* "Translating..." pill that floats below the selector */}
      {loading && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-20 whitespace-nowrap ${
            mobile ? "-bottom-7" : "-bottom-7"
          }`}
          style={{ animation: "fadeInPill 0.2s ease" }}
        >
          {/* Three bouncing dots */}
          <span
            className="w-1.5 h-1.5 bg-white rounded-full inline-block"
            style={{ animation: "bounce 0.8s infinite 0s" }}
          />
          <span
            className="w-1.5 h-1.5 bg-white rounded-full inline-block"
            style={{ animation: "bounce 0.8s infinite 0.15s" }}
          />
          <span
            className="w-1.5 h-1.5 bg-white rounded-full inline-block"
            style={{ animation: "bounce 0.8s infinite 0.3s" }}
          />
          <span>Translating</span>
        </div>
      )}

      {/* Inline keyframes */}
      <style>{`
        @keyframes shimmerBorder {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes fadeInPill {
          from { opacity: 0; transform: translate(-50%, 4px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40%           { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );

  return (
    <nav data-no-translate className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full px-6 py-4 relative flex items-center">
        {/* LEFT: Logo + Social */}
        <div className="flex-1 relative group flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto cursor-pointer object-contain"
          />

          {/* Social Icons — desktop */}
          <div className="absolute left-0 top-48 hidden lg:flex flex-col gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                style={{ backgroundColor: s.bg }}
                className="w-10 h-10 flex items-center justify-center rounded-md text-white shadow-md hover:scale-110 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* CENTER: Nav — desktop */}
        <ul className="hidden lg:flex gap-8 text-gray-500 font-medium absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-sky-400 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT: Language + CTA — desktop */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          {/* Desktop language selector — extra bottom padding when loading so pill has space */}
          <div className={loading ? "pb-8" : ""}>
            <LanguageSelector mobile={false} />
          </div>

          <button className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition flex items-center gap-2">
            {nav.demo}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden ml-auto text-gray-600 p-1 rounded-md hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 pt-4 pb-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center py-3 px-2 text-gray-600 font-medium rounded-lg hover:bg-sky-50 hover:text-sky-500 transition"
            >
              {item.name}
            </a>
          ))}

          <div className="border-t border-gray-100 my-3" />

          {/* Mobile language selector — extra bottom margin when loading so pill has space */}
          <div className={loading ? "mb-8" : ""}>
            <LanguageSelector mobile={true} />
          </div>

          <button className="w-full py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            {nav.demo}
          </button>

          <div className="border-t border-gray-100 my-3" />

          {/* Social Icons Row — mobile */}
          <div className="flex justify-evenly items-center pt-6">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                style={{ backgroundColor: s.bg }}
                className="w-9 h-9 flex items-center justify-center rounded-md text-white hover:scale-110 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;