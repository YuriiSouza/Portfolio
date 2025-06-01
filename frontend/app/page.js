import { AboutMe } from "@/components/sections/aboutMe"
import { TechStack } from "@/components/sections/techStack"
import { Projects } from "@/components/sections/projects"
import { CaseStudies } from "@/components/sections/caseStudies"
import { Experience } from "@/components/sections/experience"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Blog } from "@/components/sections/blog"
import { Hero } from "@/components/sections/hero"
import { HeaderNavigation } from "@/components/shared/headerNavigation"

export default function Home() {
  return (
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
        <Blog />
        <Contact />
      </div>
    </main>
  )
}
