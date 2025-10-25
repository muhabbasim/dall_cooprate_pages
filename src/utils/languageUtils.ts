/**
 * Utility functions for language and direction management
 */

export const getDirectionFromLanguage = (language: string): 'ltr' | 'rtl' => {
  return language === 'ar' ? 'rtl' : 'ltr';
};

export const getLanguageFromStorage = (): string => {
  const storedLang = localStorage.getItem('dall_lang');
  return storedLang ? JSON.parse(storedLang) : 'en';
};

export const saveLanguageToStorage = (language: string): void => {
  localStorage.setItem('dall_lang', JSON.stringify(language));
};
