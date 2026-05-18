export default function Footer({ t }) {
  return (
    <footer
      className="border-t py-6 transition-colors duration-300"
      style={{
        backgroundColor: "#f9f5ec",
        borderColor: "#e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-black">
          {t?.follow || "Follow us on social media"}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.instagram.com/noveelinee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-black transition hover:opacity-70"
            aria-label="Instagram"
          >
            {/* Instagram icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z" />
              <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
            </svg>
          </a>

          <a
            href="https://www.tiktok.com/@noveelinee"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-black transition hover:opacity-70"
            aria-label="TikTok"
          >
            {/* TikTok icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.08 1.61 2.88 2.88 0 0 1 4.07-4.07v-3.45a6.35 6.35 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.33 6.33 0 0 0 5.83-3.56v3.42a9.33 9.33 0 0 1-5.83 2.16 9.34 9.34 0 1 1 9.59-9.34z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
