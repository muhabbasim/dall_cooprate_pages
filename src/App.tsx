import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { dispatch, useSelector } from "./store/Store";
import { ThemeSettings } from "./theme/Theme";
import RTL from "./layouts/full/shared/customizer/RTL";
import Router from "./routes/Router";
import { AppState } from "./store/Store";
import { useEffect } from "react";
import { setDir, setLanguage } from "./store/customizer/CustomizerSlice";
import ScrollToTop from "./components/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/global.scss'
import i18n from "./utils/i18n";
import { Languages } from "./data/LanguageData";

function App() {
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang = Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[0];

  const languageAdjustment = () => {
    if (customizer.isLanguage === 'ar') {
      dispatch(setLanguage('ar'))
      dispatch(setDir('rtl'))
    } else if (customizer.isLanguage === 'en'){
      dispatch(setLanguage('en'))
      dispatch(setDir('ltr'))
    }
  }

  
  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
    
  }, [currentLang]);

  useEffect(() => {
    languageAdjustment()
  },[])

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={customizer.activeDir}>
        <CssBaseline />
        <ScrollToTop>{routing}</ScrollToTop>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
