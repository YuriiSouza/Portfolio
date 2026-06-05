import { FinanceNavbar } from "@/components/finance/navbar"
import { FinanceHero } from "@/components/finance/hero"
import { FinanceAbout } from "@/components/finance/about"
import { FinanceServices } from "@/components/finance/services"
import { FinanceDifferentiators } from "@/components/finance/differentiators"
import { FinanceProcess } from "@/components/finance/process"
import { FinanceCTA } from "@/components/finance/cta"
import { FinanceFooter } from "@/components/finance/footer"

export const metadata = {
  title: "Yuri Peixoto — Planejamento Financeiro Pessoal",
  description:
    "Planejador financeiro com abordagem baseada em dados. Diagnóstico, organização do orçamento, eliminação de dívidas, reserva de emergência, investimentos e acompanhamento contínuo. Resultados rápidos e práticos.",
}

export default function PlanejadorPage() {
  return (
    <div className="min-h-screen bg-white">
      <FinanceNavbar />
      <main>
        <FinanceHero />
        <FinanceAbout />
        <FinanceServices />
        <FinanceDifferentiators />
        <FinanceProcess />
        <FinanceCTA />
      </main>
      <FinanceFooter />
    </div>
  )
}
