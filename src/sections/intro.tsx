import profileIntro from "@/assets/profile/profile-3.webp"

const CARD_WIDTH = "clamp(220px,24vw,340px)"
const CARD_HEIGHT = "clamp(275px,30vw,425px)"

export function IntroSection() {
  return (
    <section
      id="intro"
      className="section flex min-h-[85vh] items-center pt-20 pb-16 md:min-h-[88vh] md:pt-24 md:pb-20 lg:min-h-[90vh]"
    >
      <div className="container-portfolio w-full">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-6 lg:gap-10">
          <div className="relative text-center md:pr-3 md:text-right lg:pr-6" style={{ minHeight: CARD_HEIGHT }}>
            <div className="flex flex-col gap-3.5 md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:items-end">
              <span className="text-[clamp(0.95rem,1.1vw,1.25rem)] font-medium leading-[1.2] tracking-[-0.02em] text-muted-foreground md:max-w-[22ch] md:text-right md:whitespace-nowrap">
                전통 소목수부터 학습 매니저까지
              </span>
              <span className="text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight whitespace-nowrap">
                다양한 직군
              </span>
            </div>
          </div>

          <span
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
            <div className="flex flex-col gap-3.5 md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:items-start">
              <span className="text-[clamp(1.5rem,4.5vw,3.75rem)] font-bold leading-[1.08] tracking-tight whitespace-nowrap">
                다양한 창작
              </span>
              <span className="text-[clamp(0.95rem,1.1vw,1.25rem)] font-medium leading-[1.2] tracking-[-0.02em] text-muted-foreground md:max-w-[16ch] md:text-left">
                책에서 전시, 무대까지
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
