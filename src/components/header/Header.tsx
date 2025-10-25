import './style.css'
import React from 'react';
import {
  styled,
  Toolbar,
  Container,
  Box,
  Stack,
  useMediaQuery,
  IconButton,
  Drawer,
  Theme,
} from '@mui/material';
import Logo from 'src/layouts/full/shared/logo/Logo';
import Navigations from './Navigations';
import MobileSidebar from './MobileSidebar';
import { IconMenu2 } from '@tabler/icons-react';
import { cn } from 'src/lib/utils';
import { useLocation } from 'react-router';



const LpHeader = (props: any) => {

  const location = useLocation();
  const pathName = location.pathname
  const isCat = pathName.includes('category')

  const ToolbarStyled = styled(Toolbar)(() => ({
    width: '100%',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
  }));

  //   sidebar
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [y, setY] = React.useState(window.scrollY);

  const toggleBar = y >= 80

  const handleNavigation = React.useCallback(
    (e: Event | any) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [],
  );

  // console.log(toggleBar)

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div  
      // position="fixed" 
      // elevation={toggleBar ? 8 : 0}
      className={cn('fixed z-50 left-0 right-0 bg-transparent transition-all py-2', toggleBar &&  "bg-[#efefef] shadow", isCat && "border-b bg-white")}
    >
      <Container maxWidth={'lg'}>
        <ToolbarStyled>
          <Logo data={props} toggleBar={toggleBar} />
          <Box flexGrow={1} />
          {lgDown ? (
            <IconButton color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <IconMenu2 size="20" />
            </IconButton>
          ) : null}
          {lgUp ? (
            <Stack spacing={1} direction="row" alignItems="center">
              <Navigations data={props}  toggleBar={toggleBar}/>
            </Stack>
          ) : null}

        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            border: '0 !important',
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
        color='white'
      >
        <MobileSidebar toggleBar={toggleBar}/>
      </Drawer>
    </div>
  );
};

export default LpHeader;
