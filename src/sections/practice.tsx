import { useEffect, useRef, useState } from "react"

import lectureImage from "@/assets/practice/lecture.webp"
import soongsilCyberUniv from "@/assets/practice/soongsil-cyber-univ.webp"
import workspaceImage from "@/assets/practice/workspace.webp"

const PRACTICE_IMAGES = [
  {
    src: soongsilCyberUniv,
  },
  {
    src: workspaceImage,
    objectPosition: "44% 28%",
    scale: 1.08,
  },
  {
    src: lectureImage,
  },
] as const

const TRACK_IMAGES = [
  PRACTICE_IMAGES[PRACTICE_IMAGES.length - 1],
  ...PRACTICE_IMAGES,
  PRACTICE_IMAGES[0],
] as const

const TRACK_STEP = 100 / TRACK_IMAGES.length

const AUTOPLAY_INTERVAL_MS = 5000

export function PracticeSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(1)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const pendingStepRef = useRef<-1 | 0 | 1>(0)

  useEffect(() => {
    PRACTICE_IMAGES.forEach((image) => {
      const preloadImage = new window.Image()
      preloadImage.src = image.src
    })
  }, [])

  useEffect(() => {
    if (isPaused) return

    const intervalId = window.setInterval(() => {
      setIsAnimating(true)
      setTransitionEnabled(true)
      setDisplayIndex((prev) => prev + 1)
      setActiveIndex((prev) => (prev + 1) % PRACTICE_IMAGES.length)
    }, AUTOPLAY_INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isPaused])

  const flushPending = () => {
    const pendingStep = pendingStepRef.current
    if (pendingStep === 0) return

    pendingStepRef.current = 0

    if (pendingStep === 1) {
      moveBy(1)
      return
    }

    moveBy(-1)
  }

  const unlockAfterLoopJump = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true)
        setIsAnimating(false)
        flushPending()
      })
    })
  }

  const moveBy = (step: 1 | -1) => {
    setIsAnimating(true)
    setTransitionEnabled(true)
    setDisplayIndex((prev) => prev + step)
    setActiveIndex((prev) =>
      (prev + step + PRACTICE_IMAGES.length) % PRACTICE_IMAGES.length,
    )
  }

  const handlePrev = () => {
    if (isAnimating) {
      pendingStepRef.current = -1
      return
    }

    moveBy(-1)
  }

  const handleNext = () => {
    if (isAnimating) {
      pendingStepRef.current = 1
      return
    }

    moveBy(1)
  }

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return
    if (isAnimating) return

    setIsAnimating(true)
    setTransitionEnabled(true)
    setActiveIndex(index)
    setDisplayIndex(index + 1)
  }

  const handleTransitionEnd = () => {
    if (displayIndex === 0) {
      setTransitionEnabled(false)
      setDisplayIndex(PRACTICE_IMAGES.length)
      unlockAfterLoopJump()
      return
    }

    if (displayIndex === PRACTICE_IMAGES.length + 1) {
      setTransitionEnabled(false)
      setDisplayIndex(1)
      unlockAfterLoopJump()
      return
    }

    setIsAnimating(false)
    flushPending()
  }

  return (
    <section id="practice" className="section section-divider">
      <div className="container-portfolio">
        <div className="space-y-12 md:space-y-16">
          <h2 className="section-title">
            지금 쌓고 있는 기반
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(280px,0.78fr)_minmax(0,1fr)] md:items-start md:gap-12 lg:gap-16">
            <div className="order-2 md:order-1">
              <div
                className="overflow-hidden rounded-[2rem] border border-black/6"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocusCapture={() => setIsPaused(true)}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setIsPaused(false)
                  }
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.95rem] bg-muted">
                  <div
                    className="flex h-full will-change-transform"
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                      width: `${TRACK_IMAGES.length * 100}%`,
                      transform: `translate3d(-${displayIndex * TRACK_STEP}%, 0, 0)`,
                      transition: transitionEnabled
                        ? "transform 360ms cubic-bezier(0.22, 1, 0.36, 1)"
                        : "none",
                    }}
                  >
                    {TRACK_IMAGES.map((image, index) => (
                      <div
                        key={`${image.src}-${index}`}
                        className="h-full shrink-0 overflow-hidden"
                        style={{ width: `${TRACK_STEP}%` }}
                      >
                        <img
                          src={image.src}
                          alt=""
                          className="h-full w-full object-cover"
                          style={
                            "objectPosition" in image || "scale" in image
                              ? {
                                  objectPosition:
                                    "objectPosition" in image ? image.objectPosition : undefined,
                                  transform:
                                    "scale" in image ? `scale(${image.scale})` : undefined,
                                  transformOrigin:
                                    "scale" in image ? "top left" : undefined,
                                }
                              : undefined
                          }
                          loading="eager"
                          draggable={false}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/22 via-black/6 to-transparent" />

                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="이전 이미지"
                    className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer appearance-none items-center justify-center rounded-full border border-white/35 bg-background/82 text-lg text-foreground transition-[transform,background-color] duration-200 hover:bg-background active:scale-95"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="다음 이미지"
                    className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer appearance-none items-center justify-center rounded-full border border-white/35 bg-background/82 text-lg text-foreground transition-[transform,background-color] duration-200 hover:bg-background active:scale-95"
                  >
                    →
                  </button>

                  <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
                    {PRACTICE_IMAGES.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => handleDotClick(index)}
                        aria-label={`${index + 1}번 이미지 보기`}
                        aria-pressed={activeIndex === index}
                        className="flex cursor-pointer appearance-none items-center justify-center"
                      >
                        <span
                          className={`block rounded-full transition-all duration-200 ${
                            activeIndex === index
                              ? "h-2.5 w-7 bg-white"
                              : "size-2.5 bg-white/55"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="reading max-w-none space-y-5 md:space-y-6">
                <p className="font-medium text-foreground/90">
                  돌이켜보면 저는 여러 일을 거쳐왔고, 그때마다 필요한 것을 스스로 배워왔습니다. 지금도 학업과 독학을 통해 그 흐름을 이어가고 있습니다.
                </p>
                <p>
                  현재는 숭실사이버대학교 유통서비스학과 1학년으로 재학하며, 유통과 서비스의 구조, 고객 경험, 창업 실행을 더 입체적으로 이해하는 기반을 쌓고 있습니다.
                </p>
                <p>
                  동시에 인문학, 기술, AI, 창작을 함께 공부하며 일과 사람을 보는 감각을 넓혀가고 있습니다. 3년째 인문학 학습을 꾸준히 이어오고 있고, 지금도 관련 공부를 계속하고 있습니다.
                </p>
                <p>
                  2025년 오즈코딩스쿨 개발 부트캠프를 수료한 이후에는 개인 프로젝트와 자율 학습 안에서 문제를 웹서비스와 디지털 도구로 직접 구현해보고 있습니다. AI 역시 경험과 문제의식을 구조화하고, 가설을 검토하며, 구현으로 옮기는 과정에서 직접 부딪히며 쓰고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
