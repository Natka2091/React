import './App.css'
import { ConverterSection } from './components/converter/Converter';
import {Header} from './components/header/Header';
import { Hero } from "./components/hero/Hero";

export function App() {
  return (
    <>
    <Header />
    <Hero />
    <ConverterSection />
    </>
  );
}



