import Link from "next/link"
import { LineChart, Code, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Yuri Peixoto de Souza — Escolha por onde começar",
  description:
    "Planejamento financeiro e desenvolvimento de software. Escolha a área que você procura.",
}

export default function Landing() {
  return (
    <main className="flex h-screen w-full flex-col overflow-hidden md:flex-row">
      {/* Persona Financeira — prioridade */}
      <Link
        href="/planejador"
        className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-8 py-16 text-center transition-all duration-500 ease-out md:flex-[1.15] md:hover:flex-[1.5]"
      >
        {/* Detalhe decorativo */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl" />

        <div className="relative z-10 flex max-w-md flex-col items-center">
          <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-transform duration-500 group-hover:scale-110">
            <LineChart className="h-8 w-8" />
          </span>
          <span className="mb-3 rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            Área em destaque
          </span>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Planejamento Financeiro
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Assuma o controle da sua vida financeira com decisões baseadas em
            dados. Resultados rápidos e práticos.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 group-hover:gap-3 group-hover:bg-emerald-700">
            Entrar
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>

      {/* Persona Dev */}
      <Link
        href="/dev"
        className="group relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black px-8 py-16 text-center transition-all duration-500 ease-out md:hover:flex-[1.5]"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 flex max-w-md flex-col items-center">
          <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-transform duration-500 group-hover:scale-110">
            <Code className="h-8 w-8" />
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Desenvolvimento de Software
          </h2>
          <p className="mt-4 text-base text-gray-400 md:text-lg">
            Sistemas de gestão, automação e análise de dados. Soluções robustas
            que geram valor para o seu negócio.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 group-hover:gap-3 group-hover:bg-blue-700">
            Entrar
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </main>
  )
}
