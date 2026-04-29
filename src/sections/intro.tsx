import profileIntro from "@/assets/profile/profile-3.webp"
import { useMorphIntroRef } from "@/components/morphing-portrait"

const CARD_WIDTH = "clamp(220px,24vw,340px)"
const CARD_HEIGHT = "clamp(275px,30vw,425px)"
const SIDE_SUB_COPY_GAP = "0.85rem"

export function IntroSection() {
  const introRef = useMorphIntroRef()
  return (
    <section
      id="intro"
      className="section pt-24 pb-8 md:flex md:min-h-[88vh] md:items-center md:pt-20 md:pb-20 lg:min-h-[90vh]"
    >
      <div className="container-portfolio w-full">
        <div className="mx-auto flex max-w-[18.5rem] flex-col items-center text-center md:hidden">
          <div>
            <p className="mb-2 text-[0.95rem] font-medium leading-[1.2] tracking-[-0.02em] text-muted-foreground">
              전통 소목수부터 학습 매니저까지
            </p>
            <h1 className="pt-1 text-[clamp(1.7rem,10.5vw,3rem)] font-bold leading-[0.96] tracking-tight">
              다양한 직군
            </h1>
          </div>

          <div className="mt-5 mx-auto aspect-[4/5] w-[min(68vw,18rem)] overflow-hidden rounded-[2rem] bg-muted">
            <img
              src={profileIntro}
              alt="메리제인 프로필 이미지"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 8%" }}
            />
          </div>

          <div className="mt-5">
            <h2 className="text-[clamp(1.7rem,10.5vw,3rem)] font-bold leading-[0.96] tracking-tight">
              다양한 창작
            </h2>
            <p className="mt-1 text-[0.95rem] font-medium leading-[1.2] tracking-[-0.02em] text-muted-foreground">
              책에서 전시, 무대까지
            </p>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-6 lg:gap-10">
          <div className="relative text-center md:pr-3 md:text-right lg:pr-6" style={{ minHeight: CARD_HEIGHT }}>
            <div className="md:absolute md:top-1/2 md:right-0 md:block md:-translate-y-1/2">
              <span
                className="text-[clamp(0.95rem,1.1vw,1.25rem)] font-medium leading-[1.2] tracking-[-0.02em] text-muted-foreground md:absolute md:right-0 md:bottom-full md:max-w-[22ch] md:text-right md:whitespace-nowrap"
                style={{ marginBottom: SIDE_SUB_COPY_GAP }}
              >
                전통 소목수부터 학습 매니저까지
              </span>
              <span className="text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight whitespace-nowrap">
                다양한 직군
              </span>
            </div>
          </div>

          <span
            ref={introRef as React.Ref<HTMLSpanElement>}
            aria-hidden
            className="mx-auto block aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
            style={{ width: CARD_WIDTH }}
          >
            <img
              src={profileIntro}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 8%" }}
            />
          </span>

          <div className="relative text-center md:pl-3 md:text-left lg:pl-6" style={{ minHeight: CARD_HEIGHT }}>
            <div className="md:absolute md:top-1/2 md:left-0 md:block md:-translate-y-1/2">
              <span className="text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight whitespace-nowrap">
                다양한 창작
              </span>
              <span
                className="text-[clamp(0.95rem,1.1vw,1.25rem)] font-medium leading-[1.2] tracking-[-0.02em] text-muted-foreground md:absolute md:left-0 md:top-full md:max-w-[16ch] md:text-left"
                style={{ marginTop: SIDE_SUB_COPY_GAP }}
              >
                책에서 전시, 무대까지
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
