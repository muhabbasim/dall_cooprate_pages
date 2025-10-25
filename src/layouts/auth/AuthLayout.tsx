import { Outlet, Navigate, useLocation } from "react-router-dom";
import './style.css'
import { useContext, useEffect } from "react";
import { AuthContext } from "src/context/authContext";
import { AppState, useSelector } from "src/store/Store";
import { Languages } from "src/data/LanguageData";
import i18n from "src/utils/i18n";


export default function AuthLayout() {

  const { currentUser } = useContext(AuthContext);
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang = Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[0];

  const location = useLocation();
  // Ensure 'from' is safely typed as a string or fallback to '/'
  const from = (location.state && typeof (location.state as { from?: unknown }).from === "string")
    ? (location.state as { from: string }).from
    : "/";

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
  }, [currentLang]);

  return (
    <main className='auth_containerx w-screen'>
      <div className='w-screen'>
        { currentUser ? <Navigate to={from} /> :  <Outlet/> }
      </div>
    </main>
  )
}