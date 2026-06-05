import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/config"

export function FinanceCTA() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 px-8 py-14 text-center shadow-xl shadow-emerald-600/20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Pronto para dar o primeiro passo?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-50">
              A conversa inicial é o ponto de partida para você ter mais clareza,
              tranquilidade e liberdade financeira. Vamos conversar?
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar conversa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
