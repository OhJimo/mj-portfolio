import { ReactLenis } from "lenis/react"

import { Header } from "@/components/header"
import { PageGuides } from "@/components/page-guides"
import { IntroSection } from "@/sections/intro"
import { AboutSection } from "@/sections/about"
import { ExperienceSection } from "@/sections/experience"
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

        <section id="archive" className="section section-divider">
          <div className="container-portfolio">
            {/* TODO: Evidence and Archive */}
          </div>
        </section>

        <section id="direction" className="section section-divider">
          <div className="container-portfolio">
            {/* TODO: Problem and Direction */}
          </div>
        </section>

        <section id="closing" className="section section-divider">
          <div className="container-portfolio">
            {/* TODO: Closing */}
          </div>
        </section>
      </main>

      {/* TODO: Footer */}
    </ReactLenis>
  )
}

export default App
