import { useEffect, useState } from "react"

import { useIntroPortraitAnchor } from "@/components/portrait-morph"

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return isDesktop
}

export function IntroSection() {
  const { anchorRef, hideStaticImage } = useIntroPortraitAnchor()
  const isDesktop = useIsDesktop()

  const colStyle: React.CSSProperties = isDesktop ? { position: "relative" } : {}
  const subLeftStyle: React.CSSProperties = isDesktop
    ? { position: "absolute", right: 0, bottom: "100%", marginBottom: 12, whiteSpace: "nowrap" }
    : {}
  const subRightStyle: React.CSSProperties = isDesktop
    ? { position: "absolute", left: 0, top: "100%", marginTop: 12, whiteSpace: "nowrap" }
    : {}

  return (
    <section
      id="intro"
      className="section flex min-h-[85vh] items-center pt-20 pb-16 md:min-h-[88vh] md:pt-24 md:pb-20 lg:min-h-[90vh]"
    >
      <div className="container-portfolio w-full">
        <h1 className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-10">
          <span
            className="block space-y-4 text-center md:space-y-0 md:text-right"
            style={colStyle}
          >
            <span
              className="block text-xs font-medium tracking-wide text-muted-foreground md:text-sm lg:text-base"
              style={subLeftStyle}
            >
              전통 소목수에서 학습 매니저까지
            </span>
            <span className="block text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold leading-[1.15] tracking-tight whitespace-nowrap">
              다양한 직군
            </span>
          </span>
          <span
            ref={anchorRef}
            aria-hidden
            className="mx-auto block aspect-[4/5] w-[clamp(220px,24vw,340px)] overflow-hidden rounded-2xl bg-muted transition-opacity duration-200"
            style={{ opacity: hideStaticImage ? 0 : 1 }}
          >
            <img
              src="https://picsum.photos/seed/mj-portrait/600/750"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span
            className="block space-y-2 text-center md:space-y-0 md:text-left"
            style={colStyle}
          >
            <span className="block text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold leading-[1.15] tracking-tight whitespace-nowrap">
              다양한 창작
            </span>
            <span
              className="block text-xs font-medium tracking-wide text-muted-foreground md:text-sm lg:text-base"
              style={subRightStyle}
            >
              책에서 전시, 무대까지
            </span>
          </span>
        </h1>
      </div>
    </section>
  )
}
