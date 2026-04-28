import { ReactLenis } from "lenis/react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MorphingPortrait, PortraitMorphProvider, useMainMorphAnchor } from "@/components/portrait-morph"
import { PageGuides } from "@/components/page-guides"
import { AboutSection } from "@/sections/about"
import { ArchiveSection } from "@/sections/archive"
import { ClosingSection } from "@/sections/closing"
import { DirectionSection } from "@/sections/direction"
import { ExperienceSection } from "@/sections/experience"
import { IntroSection } from "@/sections/intro"
import { PracticeSection } from "@/sections/practice"

function PortfolioContent() {
  const registerMain = useMainMorphAnchor()

  return (
    <main ref={registerMain} className="relative">
      <IntroSection />

      <AboutSection />

      <ExperienceSection />

      <PracticeSection />

      <ArchiveSection />

      <DirectionSection />

      <ClosingSection />

      <MorphingPortrait />
    </main>
  )
}

export function App() {
  return (
    <ReactLenis root>
      <PortraitMorphProvider>
        <PageGuides />
        <Header />

        <PortfolioContent />
      </PortraitMorphProvider>

      <Footer />
    </ReactLenis>
  )
}

export default App
