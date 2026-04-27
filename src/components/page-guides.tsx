export function PageGuides() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-y-0 left-[var(--guide-x)] w-[1.5px] bg-border/70" />
      <div className="absolute inset-y-0 right-[var(--guide-x)] w-[1.5px] bg-border/70" />
    </div>
  )
}
