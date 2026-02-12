import { useMemo } from 'react';
import { useAuthLanguage } from '../context/AuthLanguageProvider';
import { translations } from './translations';

function getTranslationValue(language, key) {
  return key
    .split('.')
    .reduce((accumulator, currentKey) => accumulator?.[currentKey], translations[language]);
}

export function useI18n() {
  const { language } = useAuthLanguage();

  const t = useMemo(
    () => (key) => getTranslationValue(language, key) ?? getTranslationValue('pt-BR', key) ?? key,
    [language]
  );

  return { language, t };
}
