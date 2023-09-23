import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
 Box,
 IconButton,
 ListItemText,
 Typography,
 ListItem,
 List,
 useTheme,
 useMediaQuery,
 Drawer,
 AppBar,
 Slide,
 CssBaseline,
} from '@mui/material';
import {
 Search,
 Message,
 DarkMode,
 LightMode,
 Notifications,
 Help,
 Close,
 Menu as MenuHamb,
 AccountCircleRounded,
} from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

//-------------------- Assets --------------------------
import UserIcon from './userIcon';
import NavLogo from './../../assets/Logo_PXBR_Blanco-09.webp';

//-------------------- Components --------------------------
import Notification from './Notification/Notification';
import FlexBetween from './flexBetween/flexBetween';

///////////////////////////////
const NavBarNoLogin = () => {
 const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

 const handleOpenMenu = () => {
  setIsMobileMenuToggled(true);
 };

 const handleCloseMenu = () => {
  setIsMobileMenuToggled(false);
 };

 const handleRegisterClick = () => {
  navigate('/register');
 };

 const handleLoginClick = () => {
  navigate('/login');
 };

 const theme = useTheme();

 const background = 'white';

 const alt = '#2e55a0';
 const font = 'black';

 return (
  <AppBar position='static'>
   <CssBaseline />
   <FlexBetween
    padding='0'
    backgroundColor={alt}
    width='100%'>
    <FlexBetween gap='1.75rem'>
     <Typography
      fontWeight='bold'
      fontSize='clamp(1rem, 2rem, 2.25rem)'
      color='primary'
      onClick={() => navigate('/')}
      sx={{
       '&:hover': {
        transition: '0.3s',
        backgroundColor: '#748fba',
        cursor: 'pointer',
        borderRadius: '15px',
       },
      }}>
      {isNonMobileScreens ? (
       <img
        src={NavLogo}
        alt='img not found'
        width='300rem'
       />
      ) : (
       <img
        src={NavLogo}
        alt='img not found'
        width='180rem'
       />
      )}
     </Typography>
    </FlexBetween>

    {/* DESKTOP NAV */}

    {isNonMobileScreens ? (
     <FlexBetween gap='2rem'>
      <RouterLink
       to='/register'
       style={{ textDecoration: 'none' }}>
       <Typography sx={{ color: 'white', marginRight: '50px' }}>
        Crear Cuenta
       </Typography>
      </RouterLink>

      <RouterLink
       to='/login'
       style={{ textDecoration: 'none' }}>
       <Typography sx={{ color: 'white', marginRight: '100px' }}>
        Iniciar
       </Typography>
      </RouterLink>
     </FlexBetween>
    ) : (
     <div>
      <IconButton onClick={handleOpenMenu}>
       <MenuHamb />
      </IconButton>
     </div>
    )}

    {/* MOBILE NAV */}
    {!isNonMobileScreens && isMobileMenuToggled && (
     <Drawer
      anchor='right'
      open={isMobileMenuToggled}
      onClose={handleCloseMenu}
      TransitionComponent={Slide}
      TransitionProps={{
       direction: 'left',
       timeout: { enter: 500, exit: 500 },
      }}>
      <Box
       position='fixed'
       right='0'
       bottom='0'
       height='100%'
       zIndex='10'
       maxWidth='500px'
       minWidth='250px'
       backgroundColor={background}>
       {/* CLOSE ICON */}
       <Box
        display='flex'
        justifyContent='flex-end'
        p='1rem'>
        <IconButton onClick={handleCloseMenu}>
         <Close />
        </IconButton>
       </Box>

       {/* MENU ITEMS */}

       <FlexBetween
        display='flex'
        flexDirection='column'
        justifyContent='center'
        gap='3rem'>
        {/* <Notification /> */}
        <UserIcon
         onLoginClick={handleLoginClick}
         onRegisterClick={handleRegisterClick}
        />

        {/* <IconButton
         onClick={() => dispatch(setMode())}
         sx={{ fontSize: '25px' }}>
         {theme.palette.mode === 'dark' ? (
          <DarkMode sx={{ color: font, fontSize: '25px' }} />
         ) : (
          <LightMode sx={{ color: font, fontSize: '25px' }} />
         )}
        </IconButton> */}
       </FlexBetween>
      </Box>
     </Drawer>
    )}
   </FlexBetween>
  </AppBar>
 );
};

export default NavBarNoLogin;
