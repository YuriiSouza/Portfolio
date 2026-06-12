import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import DevPortfolio from "@/components/dev/dev-portfolio";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Yuri Souza — Engenheiro de Software",
  description:
    "Yuri Souza — Engenheiro de Software. Sistemas de gestão, automação e dados. Goiás, Brasil.",
};

export default function DevPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <DevPortfolio />
    </div>
  );
}
