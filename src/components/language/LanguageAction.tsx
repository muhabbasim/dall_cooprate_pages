
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router';
import useLanguageChange from 'src/utils/useLanguageChange';
import { AppState } from 'src/store/Store';
import { Languages } from 'src/data/LanguageData';

type Language = {
  flagname: string;
  icon: string;
  value: string;
};

type Props = {
  className?: string;
  toggleBar?: boolean;
};

// Constants for better maintainability
// const ROUTES = ['/admin/', '/individual/', '/cooperate/', '/dall-user-journy', '/auth/'];

export default function LanguageAction({ className }: Props) {

  // const location = useLocation();
  // const pathname = location.pathname;
  const customizer = useSelector((state: AppState) => state.customizer);
  const langChange = useLanguageChange();

  // Determine which language set to use
  // const BLACKICONROUTES = ROUTES.some(route => pathname.includes(route));
  const languageData =  Languages;
  // const languageData = BLACKICONROUTES ? BlackLanguagesIcon : Languages;
  
  // Find alternative language with proper fallback
  const switchLanguage: Language | undefined = languageData.find(
    (lang) => lang.value !== customizer.isLanguage
  ) || languageData[0];

  const handleChangeLanguage = (value: string) => {
    langChange(value);
  };

  // Early return if no language found
  if (!switchLanguage) {
    return null;
  }

  return (
    <div className={className}>
      <button
        onClick={() => handleChangeLanguage(switchLanguage.value)}
        className='flex gap-1 items-center'
      >
          <img style={{ width: 20, height: 20 }} src={switchLanguage.icon} alt="icon img" />
          <span className='font-bold'>
            {(switchLanguage?.value)?.toUpperCase()}
          </span>
      </button>
    </div>
  )
}

