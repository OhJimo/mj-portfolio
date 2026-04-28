import { useState } from "react"
import { useLenis } from "lenis/react"

import profileAvatar from "@/assets/profile/profile-1.webp"
import { NAV_ITEMS } from "@/lib/navigation"
import { cn } from "@/lib/utils"

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
          className="flex items-center gap-2.5 transition-colors duration-200 hover:text-[var(--olive-accent)]"
        >
          <span className="size-9 shrink-0 overflow-hidden rounded-full">
            <img
              src={profileAvatar}
              alt=""
              className="h-full w-full origin-top scale-150 object-cover object-top"
            />
          </span>
          <span className="text-base font-medium">메리제인</span>
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
                className="whitespace-nowrap transition-colors duration-200 hover:text-[var(--olive-accent)]"
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
