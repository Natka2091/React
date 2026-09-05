import './App.css';
import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { ConverterPage } from './pages/ConverterPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/converter" element={<ConverterPage />} />
    </Routes>
  );
}