import { ReactLenis } from "lenis/react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  MorphingPortrait,
  MorphProvider,
  useMorphMainRef,
} from "@/components/morphing-portrait"
import { PageGuides } from "@/components/page-guides"
import { AboutSection } from "@/sections/about"
import { ArchiveSection } from "@/sections/archive"
import { ClosingSection } from "@/sections/closing"
import { DirectionSection } from "@/sections/direction"
import { ExperienceSection } from "@/sections/experience"
import { IntroSection } from "@/sections/intro"
import { PracticeSection } from "@/sections/practice"

function AppShell() {
  const mainRef = useMorphMainRef()
  return (
    <>
      <PageGuides />
      <Header />

      <main ref={mainRef} className="relative">
        <IntroSection />

        <AboutSection />

        <ExperienceSection />

        <PracticeSection />

        <ArchiveSection />

        <DirectionSection />

        <ClosingSection />

        <MorphingPortrait />
      </main>

      <Footer />
    </>
  )
}

export function App() {
  return (
    <ReactLenis root>
      <MorphProvider>
        <AppShell />
      </MorphProvider>
    </ReactLenis>
  )
}

export default App
