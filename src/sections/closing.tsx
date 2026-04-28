import { EMAIL } from "@/lib/contact"

export function ClosingSection() {
  return (
    <section id="closing" className="section section-divider">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(260px,0.78fr)_minmax(0,1fr)] md:items-center md:gap-12 lg:gap-16">
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-black/6">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/mj-closing/720/900"
                  alt=""
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/18 via-black/5 to-transparent" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="reading max-w-none space-y-6 md:space-y-7">
              <div className="space-y-5 text-[clamp(1.3rem,2.1vw,1.75rem)] font-medium leading-[1.55] tracking-tight text-foreground/95 md:space-y-6">
                <p>여러 현장과 창작 경험을 바탕으로, 사용자 맥락을 이해하는 감각을 길러왔습니다.</p>
                <p>복잡한 문제를 실행 가능한 해결책으로 정리하는 힘도 함께 쌓아왔습니다.</p>
                <p>이 감각을 바탕으로 실제 문제를 다루는 팀에 기여하고 싶습니다.</p>
              </div>

              <p className="text-muted-foreground">
                포지션 제안이나 채용 관련 이야기가 있다면 이메일로 연락 주시면 좋겠습니다.
              </p>

              <div className="border-t border-[var(--olive-line-soft)] pt-5">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-base font-medium transition-colors duration-200 hover:text-[var(--olive-accent)]"
                >
                  <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </span>
                  <span>{EMAIL}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
