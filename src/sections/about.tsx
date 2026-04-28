export function AboutSection() {
  return (
    <section id="about" className="section section-divider">
      <div className="container-portfolio">
        <div className="space-y-12 md:space-y-16">
          <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-tight">소개</p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-12 lg:gap-16">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.35]">
                여러 현장과 창작 경험을 바탕으로, 정해진 카테고리로는 설명되지 않는 일의 방향을 만들어가고 있습니다.
              </h2>
              <div className="reading space-y-6">
                <p>
                  저는 전통 소목수를 시작으로, 신문 배달, 피아노 조율사, 골프장 캐디, 스키장 패트롤, 보험 설계사, 노점 양말 판매, 비즈니스 학습 코칭 매니저까지 서로 다른 현장을 거쳐왔습니다.
                </p>
                <p>
                  겉으로는 흩어진 경력처럼 보이지만, 제게는 모두 사람의 상황을 읽고 문제를 구조화하며, 실제로 움직일 수 있는 방식으로 문제를 풀어가는 감각을 익혀온 시간이었습니다.
                </p>
              </div>
            </div>
            <div
              className="mx-auto block aspect-[4/5] w-[clamp(220px,24vw,340px)] overflow-hidden rounded-[2rem] bg-muted md:-mt-6 md:mx-0 lg:-mt-10"
              style={{
                transform: "perspective(1400px) rotate(2deg) rotateY(-18deg)",
                transformOrigin: "center center",
              }}
            >
              <img
                src="https://picsum.photos/seed/mj-about/600/750"
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
