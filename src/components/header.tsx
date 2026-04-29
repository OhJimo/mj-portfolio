import { useEffect, useState } from "react"
import { useLenis } from "lenis/react"
import { List as MenuIcon, X as CloseIcon } from "@phosphor-icons/react"

import profileAvatar from "@/assets/profile/profile-1.webp"
import { NAV_ITEMS } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const [hideNav, setHideNav] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useLenis(({ scroll, direction }) => {
    if (scroll <= 0) setHideNav(false)
    else if (direction > 0) setHideNav(true)
    else if (direction < 0) setHideNav(false)
  })

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [isMenuOpen])

  return (
    <>
      <div
        aria-hidden
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      />
      <header className="pointer-events-none fixed inset-x-0 top-2 z-50 flex justify-center px-3 pt-2 md:top-4 md:px-4 md:pt-4">
      <nav
        aria-label="주요 메뉴"
        className={cn(
          "shadow-subtle pointer-events-auto flex flex-col overflow-hidden border border-[var(--olive-line)] bg-background/80 backdrop-blur transition-all",
          // Mobile state — pill morphs to card
          isMenuOpen
            ? "max-h-[600px] w-[360px] rounded-[1.25rem] duration-[550ms] ease-[cubic-bezier(0.83,0,0.17,1)]"
            : "max-h-[46px] w-[152px] rounded-[23px] duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          // Desktop overrides — always pill, content-based
          "md:!w-auto md:!max-h-none md:!rounded-full",
        )}
      >
        <div className="flex shrink-0 items-center justify-between gap-2.5 py-1.5 pl-2 pr-1.5 md:py-2 md:pr-6">
          <a href="#intro" className="contents">
            <span className="block size-8 shrink-0 overflow-hidden rounded-full transition-colors duration-200 hover:opacity-90 md:size-9">
              <img
                src={profileAvatar}
                alt=""
                className="block h-full w-full origin-top scale-150 object-cover object-top"
              />
            </span>
            <span
              className={cn(
                "text-sm font-medium leading-none transition-opacity duration-200 hover:text-[var(--olive-accent)] md:!inline md:text-base md:!opacity-100",
                isMenuOpen ? "opacity-0" : "opacity-100",
              )}
            >
              메리제인
            </span>
          </a>
          <ul
            className={cn(
              "ml-7 hidden items-center gap-6 overflow-hidden text-base md:flex",
              "transition-[max-width,opacity,margin] ease-[cubic-bezier(0.22,1,0.36,1)]",
              hideNav
                ? "ml-0 max-w-0 opacity-0 duration-[900ms]"
                : "max-w-[600px] opacity-100 duration-[1200ms]",
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
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--olive-accent)] text-white transition-colors duration-200 active:scale-95 md:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon size={16} weight="bold" />
            ) : (
              <MenuIcon size={16} weight="bold" />
            )}
          </button>
        </div>
        <ul className="flex flex-col items-center gap-3 px-6 pt-2 pb-8 text-lg font-medium md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-1 transition-colors duration-200 hover:text-[var(--olive-accent)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    </>
  )
}
