import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProviders } from "@/components/theme-provider"
import { HeaderNavigation } from "@/components/shared/headerNavigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yuri Souza",
  description: "Portfolio profissional",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProviders attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen bg-background">
            <div className="container mx-auto">{children}</div>
          </div>
        </ThemeProviders>
      </body>
    </html>
  )
}
