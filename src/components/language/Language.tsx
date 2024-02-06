import React from 'react'
import { Avatar, IconButton, Menu, MenuItem, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Languages } from 'src/data/LanguageData';
import { AppState, useDispatch, useSelector } from 'src/store/Store';
import { setDir, setLanguage } from 'src/store/customizer/CustomizerSlice';
import { RxGlobe } from "react-icons/rx";
import { cn } from 'src/lib/utils';
import { useLocation } from 'react-router';

type Props = {
  toggleBar: boolean;
}
const Language = ({toggleBar} : Props) => {
  
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const location = useLocation();
  const pathName = location.pathname
  const isCat = pathName.includes('category')


  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang = Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[0];


  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChageLanguage = ( value:string ) => {

    dispatch(setLanguage(value))  
    if ( value === 'ar' ) {
      dispatch(setDir('rtl'))
    } else if ( value === 'en' ) {
      dispatch(setDir('ltr'))
    }
    
    localStorage.setItem('language', JSON.stringify(value))
  }

  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
    
  }, [currentLang]);

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className='flex gap-1 justify-center items-center'
      >
        <RxGlobe className={cn('text-white text-lg', toggleBar && "text-black", !toggleBar && isCat && 'text-black')}/>
        <div className='flex items-center justify-center'>
          <span className={cn('text-white text-lg', toggleBar && "text-black", !toggleBar && isCat && 'text-black')}>{currentLang.value === 'en' ? "En" : (currentLang.value === 'ar' && "Ar")}</span>
        </div>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            width: '170px',
            marginTop: '10px',
            borderRadius: '5px'
          },
        }}
        
      >
        {Languages.map((option, index) => (
          <MenuItem
            key={index}
            sx={{ py: 1, px: 3}}
            onClick={() => handleChageLanguage(option.value)}
          >
            <Stack  direction="row" spacing={1} alignItems="center">
              <Avatar src={option.icon} alt={option.icon} sx={{ width: 25, height: 25 }} />
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
