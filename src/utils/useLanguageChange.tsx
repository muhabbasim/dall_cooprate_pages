import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../store/customizer/CustomizerSlice';
import { saveLanguageToStorage } from './languageUtils';

const useLanguageChange = () => {
  const dispatch = useDispatch();

  const handleChangeLanguage = useCallback((value: string) => {
    // Save language to localStorage
    saveLanguageToStorage(value);

    // Update Redux state - direction will be calculated automatically
    dispatch(setLanguage(value));
  }, [dispatch]);

  return handleChangeLanguage;
};

export default useLanguageChange;