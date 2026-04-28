import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

type Bounds = {
  sx: number
  sy: number
  ex: number
  ey: number
  svx: number
  svy: number
  sw: number
  sh: number
  scrollEnd: number
}

type PortraitMorphContextValue = {
  registerMain: (el: HTMLElement | null) => void
  registerIntroAnchor: (el: HTMLSpanElement | null) => void
  registerAboutAnchor: (el: HTMLDivElement | null) => void
  hideIntroStaticImage: boolean
  enabled: boolean
  bounds: Bounds | null
}

const PortraitMorphContext = createContext<PortraitMorphContextValue | null>(null)

const INTRO_IMAGE = "https://picsum.photos/seed/mj-portrait/600/750"

export const MORPH_PERSPECTIVE = 1400
export const ABOUT_LANDING_ROTATE_Y = -18
export const ABOUT_LANDING_ROTATE_Z = 2
const DESKTOP_QUERY = "(min-width: 768px)"

function usePortraitMorphContext() {
  const context = useContext(PortraitMorphContext)

  if (!context) {
    throw new Error("Portrait morph components must be used within PortraitMorphProvider")
  }

  return context
}

export function PortraitMorphProvider({ children }: { children: React.ReactNode }) {
  const [mainEl, setMainEl] = useState<HTMLElement | null>(null)
  const [introAnchorEl, setIntroAnchorEl] = useState<HTMLSpanElement | null>(null)
  const [aboutAnchorEl, setAboutAnchorEl] = useState<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [bounds, setBounds] = useState<Bounds | null>(null)

  const registerMain = useCallback((el: HTMLElement | null) => {
    setMainEl((current) => (current === el ? current : el))
  }, [])

  const registerIntroAnchor = useCallback((el: HTMLSpanElement | null) => {
    setIntroAnchorEl((current) => (current === el ? current : el))
  }, [])

  const registerAboutAnchor = useCallback((el: HTMLDivElement | null) => {
    setAboutAnchorEl((current) => (current === el ? current : el))
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY)

    const syncEnabled = (matches: boolean) => {
      setEnabled(matches)
    }

    syncEnabled(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      syncEnabled(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useLayoutEffect(() => {
    if (!enabled || !mainEl || !introAnchorEl || !aboutAnchorEl) {
      setBounds(null)
      return
    }

    let frame = 0
    let timeout100 = 0
    let timeout500 = 0

    const measure = () => {
      const mainRect = mainEl.getBoundingClientRect()
      const introRect = introAnchorEl.getBoundingClientRect()
      const aboutRect = aboutAnchorEl.getBoundingClientRect()

      const mainDocX = mainRect.left + window.scrollX
      const mainDocY = mainRect.top + window.scrollY
      const introDocX = introRect.left + window.scrollX
      const introDocY = introRect.top + window.scrollY
      const aboutDocX = aboutRect.left + window.scrollX
      const aboutDocY = aboutRect.top + window.scrollY

      setBounds({
        sx: introDocX - mainDocX,
        sy: introDocY - mainDocY,
        ex: aboutDocX - mainDocX,
        ey: aboutDocY - mainDocY,
        svx: introRect.left,
        svy: introRect.top,
        sw: introRect.width,
        sh: introRect.height,
        scrollEnd: Math.max(aboutDocY + aboutRect.height / 2 - window.innerHeight / 2, 1),
      })
    }

    const scheduleMeasure = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(measure)
    }

    scheduleMeasure()

    const resizeObserver = new ResizeObserver(() => {
      scheduleMeasure()
    })

    resizeObserver.observe(mainEl)
    resizeObserver.observe(introAnchorEl)
    resizeObserver.observe(aboutAnchorEl)

    window.addEventListener("resize", scheduleMeasure)

    if ("fonts" in document) {
      void document.fonts.ready.then(() => {
        scheduleMeasure()
      })
    }

    timeout100 = window.setTimeout(scheduleMeasure, 100)
    timeout500 = window.setTimeout(scheduleMeasure, 500)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout100)
      window.clearTimeout(timeout500)
      window.removeEventListener("resize", scheduleMeasure)
      resizeObserver.disconnect()
    }
  }, [aboutAnchorEl, enabled, introAnchorEl, mainEl])

  const value = useMemo(
    () => ({
      registerMain,
      registerIntroAnchor,
      registerAboutAnchor,
      hideIntroStaticImage: enabled && bounds !== null,
      enabled,
      bounds,
    }),
    [bounds, enabled, registerAboutAnchor, registerIntroAnchor, registerMain],
  )

  return <PortraitMorphContext.Provider value={value}>{children}</PortraitMorphContext.Provider>
}

export function useMainMorphAnchor() {
  return usePortraitMorphContext().registerMain
}

export function useIntroPortraitAnchor() {
  const { registerIntroAnchor, hideIntroStaticImage } = usePortraitMorphContext()

  return {
    anchorRef: registerIntroAnchor,
    hideStaticImage: hideIntroStaticImage,
  }
}

export function useAboutPortraitAnchor() {
  return {
    anchorRef: usePortraitMorphContext().registerAboutAnchor,
  }
}

export function MorphingPortrait() {
  const { bounds, enabled } = usePortraitMorphContext()
  const { scrollY } = useScroll()

  const scrollEnd = bounds?.scrollEnd ?? 1
  const x = useTransform(scrollY, [0, scrollEnd], [bounds?.sx ?? 0, bounds?.ex ?? 0], { clamp: true })
  const y = useTransform(scrollY, [0, scrollEnd], [bounds?.sy ?? 0, bounds?.ey ?? 0], { clamp: true })
  const spinY = useTransform(
    scrollY,
    [0, scrollEnd * 0.25, scrollEnd * 0.5, scrollEnd * 0.75, scrollEnd * 0.9, scrollEnd * 0.96],
    [0, 45, 90, 135, 180, 180],
    { clamp: true },
  )
  const landingY = useTransform(scrollY, [0, scrollEnd * 0.8, scrollEnd * 0.94], [0, 0, -18], {
    clamp: true,
  })
  const rotateZ = useTransform(scrollY, [0, scrollEnd * 0.8, scrollEnd * 0.94], [0, 0, 2], {
    clamp: true,
  })

  if (!enabled || !bounds) {
    return null
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-20"
      style={{
        x,
        y,
        width: bounds.sw,
        height: bounds.sh,
        perspective: MORPH_PERSPECTIVE,
        willChange: "transform",
      }}
    >
      <motion.div className="relative h-full w-full" style={{ rotateZ, willChange: "transform" }}>
        <motion.div className="relative h-full w-full" style={{ rotateY: landingY, transformStyle: "preserve-3d", willChange: "transform" }}>
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-2xl"
            style={{
              rotateY: spinY,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <div className="absolute inset-0" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
              <img src={INTRO_IMAGE} alt="" className="h-full w-full object-cover" />
            </div>
            <div
              className="absolute inset-0"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <img src={INTRO_IMAGE} alt="" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
