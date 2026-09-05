import { ConverterForm } from "../components/converter/ConverterForm";
import { ConverterHistory } from "../components/converter/ConverterHistory";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { Footer } from "../components/footer/Footer";

export function ConverterPage() {
  return (
    <>
        <Header />
        <Hero />
        <ConverterForm />
        <ConverterHistory />
        <Footer />
    </>
  );
}