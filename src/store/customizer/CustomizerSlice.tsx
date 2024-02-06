import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  activeDir?: string | any;
  activeMode?: string; // This can be light or dark
  activeTheme?: string; // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  SidebarWidth?: number;
  MiniSidebarWidth?: number;
  TopbarHeight?: number;
  isCollapse?: boolean;
  isLayout?: string;
  isSidebarHover?: boolean;
  isMobileSidebar?: boolean;
  isHorizontal?: boolean;
  isLanguage?: string;
  isCardShadow?: boolean;
  borderRadius?: number | any;
}

const localStorageLang = localStorage.getItem('language');
const currentLang = localStorageLang ? JSON.parse(localStorageLang) : null;

const initialState: StateType = {
  activeDir: 'ltr',
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
