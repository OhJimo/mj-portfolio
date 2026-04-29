import profileAbout from "@/assets/profile/profile-2.webp"
import { useIsMorphActive, useMorphAboutRef } from "@/components/morphing-portrait"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const aboutRef = useMorphAboutRef()
  const isMorphActive = useIsMorphActive()
  return (
    <section id="about" className="section section-divider">
      <div className="container-portfolio">
        <div className="space-y-6 md:space-y-16">
          <h2 className="section-title">소개</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
            <div className="space-y-4 md:space-y-8">
              <h2 className="text-[clamp(1.1rem,4vw,1.5rem)] font-bold leading-[1.32] tracking-[-0.02em] lg:text-[clamp(1.5rem,3vw,2rem)]">
                여러 현장과 창작 경험을 바탕으로, 정해진 카테고리로는 설명되지 않는 일의 방향을 만들어가고 있습니다.
              </h2>
              <div className="reading space-y-4 text-[0.98rem] md:space-y-6 md:text-[1.0625rem]">
                <p>
                  저는 전통 소목수를 시작으로, 신문 배달, 피아노 조율사, 골프장 캐디, 스키장 패트롤, 보험 설계사, 노점 양말 판매, 비즈니스 학습 코칭 매니저까지 서로 다른 현장을 거쳐왔습니다.
                </p>
                <p>
                  겉으로는 흩어진 경력처럼 보이지만, 제게는 모두 사람의 상황을 읽고 문제를 구조화하며, 실제로 움직일 수 있는 방식으로 문제를 풀어가는 감각을 익혀온 시간이었습니다.
                </p>
              </div>
            </div>
            <div
              ref={aboutRef as React.Ref<HTMLDivElement>}
              className={cn(
                "mx-auto block aspect-[4/5] w-[clamp(180px,24vw,340px)] overflow-hidden rounded-[2rem] bg-muted lg:-mt-10 lg:mx-0",
                isMorphActive && "opacity-0",
              )}
              style={{
                transform: isMorphActive
                  ? undefined
                  : "perspective(900px) rotate(2deg) rotateY(-18deg)",
                transformOrigin: "center center",
              }}
            >
              <img
                src={profileAbout}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
