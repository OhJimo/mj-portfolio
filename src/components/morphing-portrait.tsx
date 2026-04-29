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
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

import profileAbout from "@/assets/profile/profile-2.webp"
import profileIntro from "@/assets/profile/profile-3.webp"

type MorphCoords = {
  sx: number
  sy: number
  ex: number
  ey: number
  w: number
  h: number
  introDocY: number
  aboutDocY: number
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
        introDocY: i.top + window.scrollY,
        aboutDocY: a.top + window.scrollY,
      })
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [isActive, introRef, aboutRef, mainRef])

  const { scrollY } = useScroll()

  const progress = useTransform(() => {
    if (!coords) return 0
    const vh = window.innerHeight
    const start = Math.max(0, coords.introDocY + coords.h / 2 - vh / 2)
    const end = coords.aboutDocY + coords.h / 2 - vh / 2
    const span = end - start
    if (span <= 0) return 0
    const s = scrollY.get()
    return Math.max(0, Math.min(1, (s - start) / span))
  })

  const rotateY = useTransform(progress, [0, 1], [0, 180])
  const x = useTransform(progress, [0, 1], [coords?.sx ?? 0, coords?.ex ?? 0])
  const y = useTransform(progress, [0, 1], [coords?.sy ?? 0, coords?.ey ?? 0])

  if (!isActive || !coords) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-30"
      style={{
        width: coords.w,
        height: coords.h,
        x,
        y,
      }}
    >
      <motion.div
        className="size-full"
        style={{
          rotateY,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
          transformOrigin: "center",
        }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-muted"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={profileIntro}
            alt=""
            className="block h-full w-full object-cover"
            style={{ objectPosition: "center 8%" }}
          />
        </div>
        <div
          className="absolute inset-0 overflow-hidden rounded-[2rem] bg-muted"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={profileAbout}
            alt=""
            className="block h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
