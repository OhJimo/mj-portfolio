const TIMELINE = [
  {
    year: "2007 — 2008",
    text: "21살, 전통 소목수의 길을 찾아 도제식 수업의 기회를 얻으며 이후의 모든 도전의 출발점을 만들었습니다.",
  },
  {
    year: "2011 — 2014",
    text: "소목수와 피아노 조율을 거치며 정교함과 디테일을 끝까지 다듬는 감각을 익혔습니다.",
  },
  {
    year: "2015 — 2019",
    text: "골프장 캐디, 스키장 패트롤, 보험 설계, 노점 판매를 거치며 서비스 감각과 현장 대응력, 신뢰를 쌓는 방식을 몸으로 배웠습니다.",
  },
  {
    year: "2021 — 2025",
    text: "비즈니스 학습 코칭 매니저로 일하며 문제를 정리하고 실행 가능한 구조로 바꾸는 일을 해왔습니다.",
  },
  {
    year: "2020 — 2024",
    text: "공동 저서, 전시, 공연, 공모전 도전을 통해 창작을 실제 결과물로 남겨왔습니다.",
  },
  {
    year: "2025 —",
    text: "개인 프로젝트와 웹 기반 서비스를 직접 만들며 구현 경험을 넓혀가고 있습니다.",
  },
  {
    year: "2026 —",
    text: "숭실사이버대학교 유통서비스학과에서 유통, 서비스, 고객 경험, 창업을 학업으로 이어가고 있습니다.",
  },
] as const

import bookWritingBusiness from "@/assets/projects/book-writing-business.webp"
import exhibitionNa2024 from "@/assets/projects/exhibition-na-2024.webp"
import improvShow from "@/assets/projects/improv-show.webp"
import gameRank from "@/assets/projects/game-rank.webp"
import landingLin from "@/assets/projects/landinglin.webp"
import fbAdHelper from "@/assets/projects/fb-ad-helper.webp"

type Project = {
  title: string
  meta?: string
  description: string
  href?: string
  image?: string
  imageObjectPosition?: string
  imageVariant?: "cover" | "logo"
}

const CREATIVE_PROJECTS: Project[] = [
  {
    title: "『글쓰기 못하면 사업하지 마라』",
    meta: "2021",
    description:
      "공저자로 참여하여 글쓰기와 사업 실행에 대한 관점을 함께 정리했습니다.",
    href: "https://product.kyobobook.co.kr/detail/S000001945002",
    image: bookWritingBusiness,
    imageObjectPosition: "center top",
  },
  {
    title: "공동 미술 전시 2회",
    meta: "2021 · 2024",
    description:
      "두 차례의 공동 전시 중 2024년 NA Project 전시 자료입니다.",
    image: exhibitionNa2024,
    href: "https://youtu.be/CU5pWyEt8Ww?si=D38Apc_y0wja9mUi",
    imageObjectPosition: "center bottom",
  },
  {
    title: "임프라브 공연",
    meta: "2020 — 2025",
    description:
      "즉흥극 무대에서 사람과 상황을 빠르게 읽고 표현으로 잇는 감각을 익혔습니다.",
    href: "https://youtu.be/LbtRAgU8n2A?si=ADFypqNl4NLHIS9g",
    image: improvShow,
  },
]

const WEB_PROJECTS: Project[] = [
  {
    title: "GAME RANK",
    description:
      "여러 게임 순위를 한곳에서 모아볼 수 있도록 만든 웹 프로젝트.",
    href: "https://oz-gamerank.vercel.app/",
    image: gameRank,
    imageVariant: "logo",
  },
  {
    title: "LandingLin",
    description:
      "노션 페이지를 분석 가능한 랜딩 페이지로 전환하는 서비스.",
    href: "https://landinglin.com/",
    image: landingLin,
    imageVariant: "logo",
  },
  {
    title: "FB 광고 라이브러리 도우미",
    description:
      "크롬 웹스토어에 배포한 확장 프로그램.",
    href: "https://chromewebstore.google.com/detail/fb-%EA%B4%91%EA%B3%A0-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%8F%84%EC%9A%B0%EB%AF%B8/gjfjmdnbcambfkhldbjeojdahnfehkdl",
    image: fbAdHelper,
    imageVariant: "logo",
  },
]

export function ArchiveSection() {
  return (
    <section id="archive" className="section section-divider">
      <div className="container-portfolio">
        <h2 className="section-title">
          쌓아온 기록
        </h2>

        <ul className="mt-12 space-y-5 md:mt-16 md:space-y-6">
          {TIMELINE.map((item) => (
            <li
              key={item.text}
              className="grid grid-cols-[5.5rem_1fr] gap-6 md:grid-cols-[7rem_1fr] md:gap-10"
            >
              <span className="pt-[0.15em] text-sm font-medium tracking-wide text-muted-foreground tabular-nums">
                {item.year}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <ProjectGroup
          heading="창작 프로젝트"
          projects={CREATIVE_PROJECTS}
          className="mt-20 md:mt-24"
        />
        <ProjectGroup
          heading="웹 기반 서비스"
          projects={WEB_PROJECTS}
          className="mt-16 md:mt-20"
        />
      </div>
    </section>
  )
}

function ProjectGroup({
  heading,
  projects,
  className,
}: {
  heading: string
  projects: Project[]
  className?: string
}) {
  return (
    <div className={className}>
      <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.3] tracking-tight">
        {heading}
      </h3>
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const cardClass =
    "hover-card block overflow-hidden rounded-2xl border border-black/5 bg-card"

  const inner = (
    <>
      <div
        className={`flex aspect-[4/3] items-center justify-center overflow-hidden ${
          project.imageVariant === "logo" ? "bg-white" : "bg-muted"
        }`}
      >
        {project.image ? (
          project.imageVariant === "logo" ? (
            <img
              src={project.image}
              alt=""
              className="max-h-[78%] max-w-[78%] object-contain"
              loading="lazy"
              draggable={false}
            />
          ) : (
            <img
              src={project.image}
              alt=""
              className="h-full w-full object-cover"
              style={
                project.imageObjectPosition
                  ? { objectPosition: project.imageObjectPosition }
                  : undefined
              }
              loading="lazy"
              draggable={false}
            />
          )
        ) : (
          <span className="text-sm text-muted-foreground">이미지 추가 예정</span>
        )}
      </div>
      <div className="space-y-3 p-5 md:space-y-4 md:p-6">
        {project.meta && (
          <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            {project.meta}
          </p>
        )}
        <h4 className="text-base leading-tight font-semibold md:text-lg">
          {project.title}
        </h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {project.href && (
          <span className="inline-flex items-center gap-1 text-sm font-medium">
            외부 링크
            <span aria-hidden>→</span>
          </span>
        )}
      </div>
    </>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={cardClass}
      >
        {inner}
      </a>
    )
  }

  return (
    <article className={cardClass}>
      {inner}
    </article>
  )
}
