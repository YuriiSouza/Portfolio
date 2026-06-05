"use client"

import Link from "next/link"
import { LineChart, Code } from "lucide-react"

/**
 * Alterna entre as duas personas do site.
 * @param {"finance"|"dev"} active - persona atualmente exibida.
 * @param {"light"|"dark"} variant - esquema de cores do contêiner do toggle.
 */
export function PersonaSwitcher({ active, variant = "light" }) {
  const isLight = variant === "light"

  const trackClass = isLight
    ? "bg-slate-100 border border-slate-200"
    : "bg-gray-800/80 border border-gray-700"

  const activeClass = isLight
    ? "bg-emerald-600 text-white shadow-sm"
    : "bg-blue-600 text-white shadow-sm"

  const idleClass = isLight
    ? "text-slate-500 hover:text-slate-900"
    : "text-gray-400 hover:text-white"

  const pill = (id, href, label, Icon) => (
    <Link
      href={href}
      aria-current={active === id ? "page" : undefined}
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
        active === id ? activeClass : idleClass
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  )

  return (
    <div className={`inline-flex items-center gap-1 rounded-full p-1 ${trackClass}`}>
      {pill("finance", "/planejador", "Finanças", LineChart)}
      {pill("dev", "/dev", "Dev", Code)}
    </div>
  )
}
