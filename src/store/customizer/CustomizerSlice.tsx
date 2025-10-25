import { createSlice } from '@reduxjs/toolkit';
import { getDirectionFromLanguage, getLanguageFromStorage } from 'src/utils/languageUtils';

interface StateType {
  activeDir?: string | any;
  activeMode?: string; // This can be light or dark
  activeTheme?: string; // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  isLanguage?: string;
  isCardShadow?: boolean;

}


const currentLang = getLanguageFromStorage();
const currentDir = getDirectionFromLanguage(currentLang);

const initialState: StateType = {
  activeDir: currentDir,
  activeMode: 'light',
  activeTheme: 'BLUE_THEME',
  isLanguage: currentLang,

};

export const CustomizerSlice = createSlice({
  name: 'customizer',
  initialState,
  reducers: {
    setTheme: (state: StateType, action) => {
      state.activeTheme = action.payload;
    },
    setDarkMode: (state: StateType, action) => {
      state.activeMode = action.payload;
    },
    setDir: (state: StateType, action) => {
      state.activeDir = action.payload;
    },
    setLanguage: (state: StateType, action) => {
      state.isLanguage = action.payload;
      state.activeDir = getDirectionFromLanguage(action.payload)
    },
   
  },
});

export const {
  setTheme,
  setDarkMode,
  setDir,
  setLanguage,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
