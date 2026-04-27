import { useState } from "react"
import { useLenis } from "lenis/react"

import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "시작", href: "#intro" },
  { label: "소개", href: "#about" },
  { label: "경험", href: "#experience" },
  { label: "기반", href: "#practice" },
  { label: "기록", href: "#archive" },
  { label: "방향", href: "#direction" },
  { label: "연락", href: "#closing" },
] as const

export function Header() {
  const [hideNav, setHideNav] = useState(false)

  useLenis(({ scroll, direction }) => {
    if (scroll <= 0) setHideNav(false)
    else if (direction > 0) setHideNav(true)
    else if (direction < 0) setHideNav(false)
  })

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="주요 메뉴"
        className="shadow-subtle flex items-center rounded-full border border-[var(--olive-line)] bg-background/80 py-2 pr-6 pl-2 backdrop-blur transition-[padding] duration-300"
      >
        <a
          href="#intro"
          className="cursor-interactive flex items-center gap-2.5 transition-colors duration-200 hover:text-[var(--olive-accent)]"
        >
          {/* TODO: 프로필 사진 */}
          <span aria-hidden className="size-9 shrink-0 rounded-full bg-muted" />
          {/* TODO: 본인 이름 */}
          <span className="text-base font-medium">이름</span>
        </a>
        <ul
          className={cn(
            "hidden items-center gap-6 overflow-hidden text-base md:flex",
            "transition-[max-width,opacity,margin] ease-[cubic-bezier(0.22,1,0.36,1)]",
            hideNav
              ? "ml-0 max-w-0 opacity-0 duration-[900ms]"
              : "ml-7 max-w-[600px] opacity-100 duration-[1200ms]",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="cursor-interactive whitespace-nowrap transition-colors duration-200 hover:text-[var(--olive-accent)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
