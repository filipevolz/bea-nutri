import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Objetivos } from "./components/Objetivos";
import { Planos } from "./components/Planos";
import { SobreMim } from "./components/SobreMim";
import { Atendimentos } from "./components/Atendimentos";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Agendar } from "./components/Agendar";
import { Instagram } from "./components/Instagram";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export function App() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Objetivos />
      <SobreMim />
      <Atendimentos />
      <Planos />
      <Reviews />
      <Agendar />
      <Instagram />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}