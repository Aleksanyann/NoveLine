import React, { useState } from "react";

export default function Navbar({ language, setLanguage }) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hy", name: "Armenian", flag: "🇦🇲" },
  ];

  return (
    <nav
      className="border-b shadow-sm"
      style={{
        backgroundColor: "#f9f5ec",
        borderColor: "#e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a
          href="/"
          className="text-3xl font-bold tracking-[0.2em] text-black"
          style={{ fontFamily: "'Bellefair', serif" }}
        >
          Nové Line
        </a>

        <div className="flex items-center gap-4">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white text-black border-gray-300 shadow-sm hover:bg-gray-100 transition"
            >
              <span className="text-lg">
                {languages.find((l) => l.code === language)?.flag}
              </span>
            </button>

            {showLanguageMenu && (
              <div className="absolute right-0 mt-3 w-44 rounded-2xl border bg-white shadow-xl overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-100 transition ${
                      language === lang.code ? "bg-gray-100" : ""
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
