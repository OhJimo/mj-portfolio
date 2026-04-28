const NAV_ITEMS = [
  { label: "시작", href: "#intro" },
  { label: "소개", href: "#about" },
  { label: "경험", href: "#experience" },
  { label: "기반", href: "#practice" },
  { label: "기록", href: "#archive" },
  { label: "방향", href: "#direction" },
  { label: "연락", href: "#closing" },
] as const

const EMAIL = "benayou878@gmail.com"

export function Footer() {
  return (
    <footer
      className="relative z-10 overflow-hidden text-white"
      style={{ backgroundColor: "oklch(0.4 0.09 107.4)" }}
    >
      <div className="container-portfolio pt-14 pb-8 md:pt-20 md:pb-10">
        <div className="mb-10 space-y-2 border-b border-white/15 pb-10 md:mb-14 md:space-y-3 md:pb-14">
          <p className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-tight tracking-tight">
            읽고 정리하고 움직이다
          </p>
          <p className="text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
            Maker · Learner · Connector
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1.2fr] md:gap-12 lg:gap-16">
          <div className="space-y-3">
            <p className="text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
              Email
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="cursor-interactive inline-flex text-base font-medium transition-colors duration-200 hover:text-white/70 md:text-lg"
            >
              {EMAIL}
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
              Menu
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:text-base">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="cursor-interactive transition-colors duration-200 hover:text-white/70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
              Copyright
            </p>
            <p className="text-sm leading-relaxed text-white/85 md:text-base">
              © 2026 장명진
              <span className="block text-white/65">
                Jang Myeoung Jin · 메리제인
              </span>
            </p>
          </div>
        </div>

      </div>

      <p
        aria-hidden
        className="pointer-events-none -mb-[0.12em] select-none text-center leading-none"
        style={{
          fontSize: "clamp(3rem, 15.5vw, 14rem)",
          fontWeight: 900,
          letterSpacing: "-0.045em",
          color: "white",
          maskImage:
            "linear-gradient(to bottom, white 0%, white 35%, transparent 78%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, white 0%, white 35%, transparent 78%)",
        }}
      >
        MERIJANE
      </p>
    </footer>
  )
}
