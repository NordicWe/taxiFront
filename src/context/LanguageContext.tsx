import { createContext, useContext, useState, type ReactNode } from 'react';
import { t, type Lang } from '../utils/i18n';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  tr: typeof t.en;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'sv',
  toggleLang: () => {},
  tr: t.sv,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('sv');

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'sv' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
