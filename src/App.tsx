import { ReactLenis } from "lenis/react"

import { Header } from "@/components/header"
import { PageGuides } from "@/components/page-guides"
import { AboutSection } from "@/sections/about"
import { ArchiveSection } from "@/sections/archive"
import { ClosingSection } from "@/sections/closing"
import { DirectionSection } from "@/sections/direction"
import { ExperienceSection } from "@/sections/experience"
import { IntroSection } from "@/sections/intro"
import { PracticeSection } from "@/sections/practice"

export function App() {
  return (
    <ReactLenis root>
      <PageGuides />
      <Header />

      <main className="relative">
        <IntroSection />

        <AboutSection />

        <ExperienceSection />

        <PracticeSection />

        <ArchiveSection />

        <DirectionSection />

        <ClosingSection />
      </main>

      {/* TODO: Footer */}
    </ReactLenis>
  )
}

export default App
