import { AboutMe } from "@/components/sections/aboutMe"
import { TechStack } from "@/components/sections/techStack"
import { Projects } from "@/components/sections/projects"
import { CaseStudies } from "@/components/sections/caseStudies"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { HeaderNavigation } from "@/components/shared/headerNavigation"

export const metadata = {
  title: "Yuri Souza — Desenvolvedor FullStack",
  description:
    "Desenvolvedor de software com foco em backend, dados e automação. Sistemas de gestão, integrações e soluções que geram valor para empresas.",
}

export default function DevHome() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto">
        <main className="pt-16">
          <HeaderNavigation />
          <Hero />
          <div className="space-y-24 px-4 py-8">
            <AboutMe />
            <TechStack />
            <Projects />
            <CaseStudies />
            <Experience />
            <Certifications />
            {/* <Blog /> */}
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}
