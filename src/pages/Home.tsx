import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { ConverterDefault } from "../components/converter/ConverterDefault";
import { Footer } from "../components/footer/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ConverterDefault />
      <Footer />
    </>
  );
}