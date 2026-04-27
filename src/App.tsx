import { Header } from "@/components/header"
import { IntroSection } from "@/sections/intro"

export function App() {
  return (
    <>
      <Header />

      <main>
        <IntroSection />

        <section id="experience" className="section">
          <div className="container-portfolio">
            {/* TODO: Narrative Experience (sticky stacked cards) */}
          </div>
        </section>

        <section id="practice" className="section">
          <div className="container-portfolio">
            {/* TODO: Learning and Practice */}
          </div>
        </section>

        <section id="archive" className="section">
          <div className="container-portfolio">
            {/* TODO: Evidence and Archive */}
          </div>
        </section>

        <section id="direction" className="section">
          <div className="container-portfolio">
            {/* TODO: Problem and Direction */}
          </div>
        </section>

        <section id="closing" className="section">
          <div className="container-portfolio">
            {/* TODO: Closing */}
          </div>
        </section>
      </main>

      {/* TODO: Footer */}
    </>
  )
}

export default App
