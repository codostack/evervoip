import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

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

  const languages = ["EN", "FR", "DE", "ES"];

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="w-full px-6 py-4 relative flex items-center">

        {/* LEFT: Logo + Social */}
        <div className="flex-1 relative group">
          <h1 className="text-xl font-bold cursor-pointer">MyApp</h1>

          {/* Social Icons */}
          <div className="absolute left-0 top-12 flex flex-col gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1877F2] text-white shadow-md hover:scale-110 transition">
              <FaFacebookF size={16} />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1DA1F2] text-white shadow-md hover:scale-110 transition">
              <FaTwitter size={16} />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#E4405F] text-white shadow-md hover:scale-110 transition">
              <FaInstagram size={16} />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#0A66C2] text-white shadow-md hover:scale-110 transition">
              <FaLinkedinIn size={16} />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#FF0000] text-white shadow-md hover:scale-110 transition">
              <FaYoutube size={16} />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-[#171515] text-white shadow-md hover:scale-110 transition">
              <FaGithub size={16} />
            </a>

          </div>
        </div>

        {/* CENTER: Nav */}
        <ul className="hidden md:flex gap-8 text-gray-500 font-medium absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-sky-400 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT: Language + Button */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 w-24 appearance-none"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Get a Demo
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden ml-auto text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-50 px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-500 py-1 hover:text-sky-400"
            >
              {item.name}
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 w-24 appearance-none"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>

            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">
              Get a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;