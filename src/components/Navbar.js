import { useState } from "react";
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const languages = ["English", "French", "Arabic", "Spanish"];

  const socialLinks = [
    { icon: <FaFacebookF size={16} />, bg: "#1877F2", href: "/" },
    { icon: <FaTwitter size={16} />, bg: "#1DA1F2", href: "/" },
    { icon: <FaInstagram size={16} />, bg: "#E4405F", href: "/" },
    { icon: <FaLinkedinIn size={16} />, bg: "#0A66C2", href: "/" },
    { icon: <FaYoutube size={16} />, bg: "#FF0000", href: "/" },
    { icon: <FaGithub size={16} />, bg: "#171515", href: "/" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full px-6 py-4 relative flex items-center">

        {/* LEFT: Logo + Social */}
        <div className="flex-1 relative group flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto cursor-pointer object-contain"
          />

          {/* Social Icons — show only above 1080px */}
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

        {/* CENTER: Nav — show only above 1080px */}
        <ul className="hidden lg:flex gap-8 text-gray-500 font-medium absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-sky-400 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT: Language + CTA — show only above 1080px */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          <div className="relative w-40">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 appearance-none outline-none focus:ring-0 focus:border-gray-400"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <Languages
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
            />
          </div>

          <button className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition flex items-center gap-2">
            Get a Demo
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

          <div className="relative w-full">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 appearance-none outline-none"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <Languages
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
            />
          </div>

          <button className="w-full py-2.5 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition">
            Get a Demo
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