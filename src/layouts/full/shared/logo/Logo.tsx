// import { useSelector } from 'src/store/Store';
import { Link, useLocation } from 'react-router-dom';
// import { AppState } from 'src/store/Store';
import { styled } from '@mui/material';
import { cn } from 'src/lib/utils';
import { DataProps } from 'src/data/DataProps';
import { useSelector } from 'src/store/Store';


type Props = {
  toggleBar: boolean;
  data: DataProps;
}

const Logo = ({ toggleBar, data }: Props) => {

  const location = useLocation();
  const pathName = location.pathname.split('/')[1]
  const category = location.pathname
  const isCat = category.includes('category')
  
  const rtl = useSelector(state => state.customizer.activeDir === 'rtl')
  const LinkStyled = styled(Link)(() => ({
    overflow: 'hidden',
    display: 'block',
  }));

  return (
    <LinkStyled
      to={`/${pathName}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
      }}
    >
      <img src={data?.logo} alt="logo" 
        className={cn('w-16', toggleBar && 'text-black')}
      />
      <h1 className={cn('text-white m-0 font-bold text-3xl uppercase', toggleBar && 'text-black', !toggleBar && isCat && 'text-black')}>
        {rtl ? data?.logo_name_ar : data?.logo_name_en}
      </h1>
    </LinkStyled>
  );
};

export default Logo;
