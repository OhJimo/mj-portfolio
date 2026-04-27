const NAV_ITEMS = [
  { label: "시작", href: "#intro" },
  { label: "경험", href: "#experience" },
  { label: "기반", href: "#practice" },
  { label: "기록", href: "#archive" },
  { label: "방향", href: "#direction" },
  { label: "연락", href: "#closing" },
] as const

export function Header() {
  return (
    <header className="sticky top-4 z-50 px-4 pt-4 md:px-6">
      <nav
        aria-label="주요 메뉴"
        className="container-portfolio shadow-subtle flex items-center justify-between gap-4 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur"
      >
        <a href="#intro" className="flex items-center gap-3">
          {/* TODO: 프로필 사진 */}
          <span
            aria-hidden
            className="size-8 shrink-0 rounded-full bg-muted"
          />
          {/* TODO: 본인 이름 */}
          <span className="font-medium">이름</span>
        </a>
        <ul className="hidden items-center gap-5 text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
