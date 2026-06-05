import { MapPin, Quote, BadgeCheck, Building2 } from "lucide-react"
import { LOCATION } from "@/lib/config"

export function FinanceAbout() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-5">
          {/* Foto */}
          <div className="md:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-emerald-100" />
              <img
                src="/me.jpeg"
                alt="Yuri Peixoto de Souza"
                className="relative aspect-square w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
              Quem vai te ajudar
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Yuri Peixoto de Souza
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Profissional com perfil analítico e visão empreendedora, com a rara
              capacidade de unir três áreas que dificilmente aparecem juntas:{" "}
              <strong className="text-slate-800">gestão e análise de dados</strong>,{" "}
              <strong className="text-slate-800">tecnologia e automação</strong> e{" "}
              <strong className="text-slate-800">
                planejamento financeiro e investimentos
              </strong>
              .
            </p>
            <p className="mt-4 text-slate-600">
              Minha abordagem vai muito além de recomendar investimentos ou cortar
              gastos. Eu busco entender os indicadores por trás dos resultados —
              da mesma forma que empresas analisam lucro, margem e retorno — para
              transformar suas finanças pessoais em um sistema gerenciável, onde
              cada decisão é tomada com base em dados e objetivos claros.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800">
                <BadgeCheck className="h-4 w-4 text-emerald-600" />
                Certificado CPA (ANBIMA)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-800">
                <Building2 className="h-4 w-4 text-emerald-600" />
                Associado à Grão Investimentos
              </span>
            </div>

            <div className="mt-5 flex items-center gap-6">
              <img
                src="/logo_grao.svg"
                alt="Grão Investimentos"
                className="h-9 w-auto"
              />
              <img
                src="/anbima.png"
                alt="ANBIMA"
                className="h-9 w-auto"
              />
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Associado à <strong className="text-slate-700">Grão Investimentos</strong>,
              casa de investimentos reconhecida nacionalmente.
            </p>

            <div className="mt-4 flex items-center gap-2 text-slate-500">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <span>{LOCATION}</span>
            </div>

            <blockquote className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
              <Quote className="h-7 w-7 text-emerald-600" />
              <p className="mt-3 text-lg font-medium italic text-slate-800">
                “Eu ajudo pessoas a assumirem o controle da própria vida
                financeira — organizando suas finanças, eliminando desperdícios,
                construindo patrimônio e criando um plano claro para alcançar seus
                objetivos.”
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
