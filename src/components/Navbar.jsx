import React, { useState } from "react";

export default function Navbar({ isDark, setIsDark, language, setLanguage }) {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hy", name: "Armenian", flag: "🇦🇲" },
  ];

  return (
    <nav
      className={`${isDark ? "bg-slate-800 border-slate-700" : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"} text-white shadow-2xl transition-colors duration-300 border-b`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a
          href="/"
          className="text-3xl font-bold tracking-[0.2em] text-white"
          style={{ fontFamily: "'Bellefair', serif" }}
        >
          Nové Line
        </a>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isDark
                  ? "bg-slate-700 hover:bg-slate-600"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
            >
              <span className="text-lg">
                {languages.find((l) => l.code === language)?.flag}
              </span>
              <span>{languages.find((l) => l.code === language)?.name}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showLanguageMenu ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {showLanguageMenu && (
              <div
                className={`absolute right-0 mt-2 w-44 rounded-lg shadow-2xl overflow-hidden z-50 ${
                  isDark ? "bg-slate-700" : "bg-slate-600"
                }`}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-2 transition-all duration-200 ${
                      language === lang.code
                        ? isDark
                          ? "bg-slate-800 text-white"
                          : "bg-slate-700 text-white"
                        : isDark
                          ? "hover:bg-slate-800"
                          : "hover:bg-slate-700"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {language === lang.code && (
                      <svg
                        className="w-4 h-4 ml-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative inline-flex items-center w-14 h-7 rounded-full p-0.5 transition-colors duration-300 cursor-pointer"
            style={{ backgroundColor: isDark ? "#334155" : "#cbd5e1" }}
            onClick={() => setIsDark(!isDark)}
          >
            <div
              className={`absolute w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
                isDark ? "right-0.5 bg-slate-700" : "left-0.5 bg-white"
              }`}
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-slate-300"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-yellow-500"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6m-15.78 7.78l4.24-4.24m5.08-5.08l4.24-4.24" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
