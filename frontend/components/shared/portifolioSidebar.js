"use client"

import { useState } from "react"
import { User, Code, Briefcase, FileText, Mail, Home, Database, BarChart2, Layers, Award } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/shared/mode-toggle"

export function PortfolioSidebar() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <h1 className="text-xl font-bold">Meu Portfolio</h1>
          </div>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "home"} onClick={() => scrollToSection("home")}>
              <Home />
              <span>Início</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "about"} onClick={() => scrollToSection("about")}>
              <User />
              <span>Sobre Mim</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "tech-stack"} onClick={() => scrollToSection("tech-stack")}>
              <Layers />
              <span>Stack Tecnológica</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "projects"} onClick={() => scrollToSection("projects")}>
              <Database />
              <span>Projetos</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activeSection === "case-studies"}
              onClick={() => scrollToSection("case-studies")}
            >
              <BarChart2 />
              <span>Estudos de Caso</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "experience"} onClick={() => scrollToSection("experience")}>
              <Briefcase />
              <span>Experiência</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activeSection === "certifications"}
              onClick={() => scrollToSection("certifications")}
            >
              <Award />
              <span>Certificações</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "blog"} onClick={() => scrollToSection("blog")}>
              <FileText />
              <span>Blog</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton isActive={activeSection === "contact"} onClick={() => scrollToSection("contact")}>
              <Mail />
              <span>Contato</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
