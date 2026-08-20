import './App.css'
import { Header } from './components/header/Header';
import { Hero } from "./components/hero/Hero";
import { Converter } from './components/converter/Converter';
import { Footer } from "./components/footer/Footer";

export function App() {
  return (
    <>
    <Header />
    <Hero />
    <Converter />
    <Footer />
    </>
  );
}



