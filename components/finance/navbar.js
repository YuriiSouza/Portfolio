"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { LineChart, Menu, X, MessageCircle } from "lucide-react"
import { PersonaSwitcher } from "@/components/shared/personaSwitcher"
import { whatsappLink } from "@/lib/config"

const navItems = [
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "como-funciona", label: "Como funciona" },
]

export function FinanceNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (element) element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-slate-200 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/planejador" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <LineChart className="h-5 w-5" />
          </span>
          <span className="text-base font-bold text-slate-900">
            Yuri Peixoto
            <span className="hidden font-normal text-slate-500 sm:inline">
              {" "}
              · Planejamento Financeiro
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
          <div className="mx-2">
            <PersonaSwitcher active="finance" variant="light" />
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar conversa
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Conversar</span>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="relative block h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-[opacity,transform] duration-150 ease-out-strong ${
                  isMenuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-[opacity,transform] duration-150 ease-out-strong ${
                  isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`absolute inset-x-0 top-full origin-top border-t border-slate-200 bg-white/95 backdrop-blur-md transition-[opacity,transform] ease-out-strong motion-reduce:translate-y-0 motion-reduce:scale-100 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 scale-100 opacity-100 duration-200"
            : "pointer-events-none -translate-y-1 scale-[0.97] opacity-0 duration-150"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          <div className="pb-2">
            <PersonaSwitcher active="finance" variant="light" />
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="rounded-md px-3 py-2 text-left text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
