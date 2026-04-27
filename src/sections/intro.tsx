export function IntroSection() {
  return (
    <section id="intro" className="section pt-12 md:pt-16 lg:pt-20">
      <div className="container-portfolio">
        <h1 className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto_auto_auto] md:justify-center md:gap-4">
          <span className="text-center text-[clamp(1.5rem,4.5vw,3.75rem)] leading-[0.95] tracking-tight whitespace-nowrap md:text-right">
            다양한 직군
          </span>
          <span
            aria-hidden
            className="mx-auto block aspect-[4/5] w-[clamp(220px,24vw,340px)] overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src="https://picsum.photos/seed/mj-portrait/600/750"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-center text-[clamp(1.5rem,4.5vw,3.75rem)] leading-[0.95] tracking-tight whitespace-nowrap md:text-left">
            다양한 창작
          </span>
        </h1>
      </div>
    </section>
  )
}
