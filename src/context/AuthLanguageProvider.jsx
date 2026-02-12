import * as React from 'react';

const STORAGE_KEY = 'authLanguage';
const DEFAULT_LANGUAGE = 'pt-BR';
const VALID_LANGUAGES = ['pt-BR', 'en'];

const AuthLanguageContext = React.createContext(null);

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return VALID_LANGUAGES.includes(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
}

export function AuthLanguageProvider({ children }) {
  const [language, setLanguageState] = React.useState(getInitialLanguage);

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = React.useCallback((nextLanguage) => {
    if (VALID_LANGUAGES.includes(nextLanguage)) {
      setLanguageState(nextLanguage);
    }
  }, []);

  const value = React.useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );

  return <AuthLanguageContext.Provider value={value}>{children}</AuthLanguageContext.Provider>;
}

export function useAuthLanguage() {
  const context = React.useContext(AuthLanguageContext);

  if (!context) {
    throw new Error('useAuthLanguage precisa ser usado dentro de AuthLanguageProvider');
  }

  return context;
}
