import Link from "next/link"
import { LineChart, MessageCircle, Linkedin, Github, MapPin, Code, Mail } from "lucide-react"
import { whatsappLink, SOCIAL_LINKS, LOCATION, CORPORATE_EMAIL, CNPJ } from "@/lib/config"

export function FinanceFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <LineChart className="h-5 w-5" />
              </span>
              <span className="text-base font-bold text-slate-900">
                Yuri Peixoto
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Planejamento financeiro baseado em dados, planejamento e
              acompanhamento contínuo para você alcançar seus objetivos.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-emerald-600" />
              {LOCATION}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-slate-900">Contato</span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-700"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:${CORPORATE_EMAIL}`}
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-700"
            >
              <Mail className="h-4 w-4" />
              {CORPORATE_EMAIL}
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-700"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-700"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <Link
              href="/dev"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-emerald-700"
            >
              <Code className="h-4 w-4" />
              Ver trabalho como Dev
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          <p>CNPJ {CNPJ}</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Yuri Peixoto de Souza. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
