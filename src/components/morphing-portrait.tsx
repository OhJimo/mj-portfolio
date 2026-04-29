import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react"
import { useReducedMotion } from "framer-motion"

import profileIntro from "@/assets/profile/profile-3.webp"

type MorphCoords = {
  sx: number
  sy: number
  ex: number
  ey: number
  w: number
  h: number
}

type MorphValue = {
  introRef: RefObject<HTMLElement | null>
  aboutRef: RefObject<HTMLElement | null>
  mainRef: RefObject<HTMLElement | null>
  isActive: boolean
}

const MorphContext = createContext<MorphValue | null>(null)

function useMorphContext() {
  const ctx = useContext(MorphContext)
  if (!ctx) throw new Error("useMorph* must be used within MorphProvider")
  return ctx
}

export function MorphProvider({ children }: { children: ReactNode }) {
  const introRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const mainRef = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  const isActive = isDesktop && !reduce

  return (
    <MorphContext.Provider value={{ introRef, aboutRef, mainRef, isActive }}>
      {children}
    </MorphContext.Provider>
  )
}

// Hooks live alongside the component by trio decision (§12 단일 파일).
// react-refresh requires component-only exports for HMR; safe to disable here.
/* eslint-disable react-refresh/only-export-components */
export const useMorphIntroRef = () => useMorphContext().introRef
export const useMorphAboutRef = () => useMorphContext().aboutRef
export const useMorphMainRef = () => useMorphContext().mainRef
/* eslint-enable react-refresh/only-export-components */

export function MorphingPortrait() {
  const { introRef, aboutRef, mainRef, isActive } = useMorphContext()
  const [coords, setCoords] = useState<MorphCoords | null>(null)

  useLayoutEffect(() => {
    if (!isActive) return
    const calc = () => {
      const m = mainRef.current?.getBoundingClientRect()
      const i = introRef.current?.getBoundingClientRect()
      const a = aboutRef.current?.getBoundingClientRect()
      if (!m || !i || !a) return
      setCoords({
        sx: i.left - m.left,
        sy: i.top - m.top,
        ex: a.left - m.left,
        ey: a.top - m.top,
        w: i.width,
        h: i.height,
      })
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [isActive, introRef, aboutRef, mainRef])

  if (!isActive || !coords) return null

  const debugOutline = import.meta.env.DEV ? "1px solid red" : undefined

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-30 overflow-hidden rounded-2xl bg-muted"
      style={{
        left: coords.sx,
        top: coords.sy,
        width: coords.w,
        height: coords.h,
        outline: debugOutline,
      }}
    >
      <img
        src={profileIntro}
        alt=""
        className="block h-full w-full object-cover"
        style={{ objectPosition: "center 8%" }}
      />
    </div>
  )
}
