import { cn } from "@/lib/utils"

const CARD_THEMES = {
  olive: {
    surface: "oklch(0.4 0.09 107.4)",
    numberTone: "rgba(255, 255, 255, 0.14)",
    textOverride: "text-white",
  },
  light: {
    surface: "oklch(0.94 0.008 107)",
    numberTone: "rgba(0, 0, 0, 0.07)",
    textOverride: "",
  },
} as const

const CARDS = [
  {
    number: "01",
    title: "21살, 도전의 출발점",
    theme: "olive",
    body: [
      "고등학교 시절 무형문화재 다큐멘터리를 본 뒤 전통 소목수의 길을 꿈꾸게 되었습니다. 배울 곳도 연고도 없는 상태에서 직접 배움의 문을 두드렸고, 결국 도제식 수업의 기회를 얻었습니다.",
      "이 경험은 제게 무모해 보여도 진심을 가지고 움직이면 길이 열린다는 감각을 남겼습니다.",
    ],
  },
  {
    number: "02",
    title: "기술과 서비스의 감각",
    theme: "light",
    body: [
      "소목수와 피아노 조율에서는 정교함과 섬세함을 배웠고, 골프장 캐디와 스키장 패트롤에서는 상황을 빠르게 읽고 대응하는 서비스 감각을 익혔습니다.",
      "보험 설계와 노점 양말 판매 경험은 판매 역시 결국 신뢰와 관계의 문제라는 사실을 체감했습니다.",
    ],
  },
  {
    number: "03",
    title: "창작과 표현의 경험",
    theme: "olive",
    body: [
      "글쓰기, 그림, 공연은 제게 부가적인 취미가 아니라 생각과 감정을 바깥으로 꺼내는 방식이었습니다. 공동 저서 출간, 임프라브 공연, 미술 전시, 단편소설 공모전 도전은 모두 완성되지 않은 상태에서 시작하고 결과를 만드는 태도를 길러주었습니다.",
      "창작 경험은 지금도 제가 사람과 문제를 해석하는 방식의 중요한 축으로 남아 있습니다.",
    ],
  },
  {
    number: "04",
    title: "사람과 시스템을 이해한 시간",
    theme: "light",
    body: [
      "비즈니스 학습 코칭 매니저로 일하며 가장 크게 배운 것은, 많은 사람들이 의지나 재능이 부족해서가 아니라 어디서부터 시작해야 할지 몰라 멈춘다는 사실이었습니다.",
      "저는 그 간극을 줄이기 위해 고객의 목표와 목소리를 듣고, 막연한 문제를 실행 가능한 단계와 흐름으로 바꾸는 방식으로 일했습니다.",
    ],
  },
] as const

export function ExperienceSection() {
  return (
    <section id="experience" className="section section-divider">
      <div className="container-portfolio">
        <h2 className="section-title">
          나를 만든 경험
        </h2>

        <div className="mt-16 space-y-12 md:mt-20 md:flex md:flex-col md:gap-[28vh] md:space-y-0 md:pb-12 lg:mt-24 lg:gap-[30vh] lg:pb-16">
          {CARDS.map((card, i) => {
            const theme = CARD_THEMES[card.theme]
            return (
              <div
                key={card.number}
                className="md:sticky"
                style={{ top: `${96 + i * 16}px` }}
              >
                <article
                  className={cn(
                    "shadow-subtle relative overflow-hidden rounded-[1.75rem] border border-black/5 p-8 transition-shadow duration-300 hover:shadow-soft md:p-10 lg:p-12",
                    theme.textOverride
                  )}
                  style={{ backgroundColor: theme.surface }}
                >
                  <span
                    className="pointer-events-none absolute right-5 top-5 font-heading text-[clamp(4.5rem,12vw,8rem)] leading-none tracking-[-0.04em] md:right-7 md:top-6"
                    style={{ color: theme.numberTone }}
                  >
                    {card.number}
                  </span>

                  <h3
                    className={cn(
                      "relative z-10 pr-20 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.3] tracking-tight md:pr-28",
                      theme.textOverride
                    )}
                  >
                    {card.title}
                  </h3>
                  <div className="reading relative z-10 mt-6 space-y-4 md:mt-8">
                    {card.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
