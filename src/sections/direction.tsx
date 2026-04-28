const BLOCKS = [
  {
    label: "시대",
    text: "지금은 자신을 직업명 하나로 정의하기 어려운 시대라고 생각합니다. 혼자 여러 역할을 감당해야 하거나, 자기 일의 구조를 새로 만들어야 하지만 어디서부터 시작해야 할지 모르는 사람들도 그 흐름 안에 있습니다.",
  },
  {
    label: "구조",
    text: "시작점이 보이지 않거나, 사람마다 받아들이는 맥락이 달라 함께 움직이지 못하거나, 막연함이 누적되어 무엇부터 해야 할지 가늠하지 못하는 상황이 반복됩니다.",
  },
  {
    label: "흐름",
    text: "사람의 맥락을 먼저 읽고, 그 위에 구조를 얹어, 바로 움직일 수 있는 단계로 옮기는 흐름. 저는 이 흐름에 가까이 서서 문제를 함께 풀어가고 싶습니다.",
  },
] as const

export function DirectionSection() {
  return (
    <section id="direction" className="section section-divider">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-12 lg:gap-20">
          <div className="md:sticky md:top-28 md:pt-6 md:pl-1 lg:pt-7">
            <h2 className="section-title leading-[1.05]">
              앞으로 풀고
              <br />
              싶은 문제
            </h2>
          </div>

          <div className="space-y-5 md:space-y-6">
            {BLOCKS.map((block, index) => (
              <article
                key={block.label}
                className="space-y-4 rounded-2xl border border-[var(--olive-line)] bg-card p-6 md:space-y-5 md:p-8 lg:p-9"
              >
                <p className="text-sm font-medium tracking-wide text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")} — {block.label}
                </p>
                <p className="reading">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
