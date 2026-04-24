import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider } from '../context/LanguageContext';
import HomePage from './components/HomePage';
import PricePage from './components/PricePage';
import AboutPage from './components/AboutPage';
import AdminPage from './components/AdminPage';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideChatbot = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AnimatePresence>
      {!hideChatbot && <Chatbot />}
    </div>
  );
}
