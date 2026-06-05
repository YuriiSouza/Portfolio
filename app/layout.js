import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProviders } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yuri Peixoto de Souza — Planejamento Financeiro & Desenvolvimento de Software",
  description:
    "Planejador financeiro e desenvolvedor de software. Ajudo pessoas a assumirem o controle da própria vida financeira com uma abordagem baseada em dados, planejamento e acompanhamento contínuo.",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body className={`${inter.className}`}>
        <ThemeProviders attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProviders>
      </body>
    </html>
  )
}
