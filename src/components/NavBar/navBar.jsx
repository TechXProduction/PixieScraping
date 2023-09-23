import React, { useState, useEffect } from 'react';
import {
 Box,
 IconButton,
 Typography,
 useTheme,
 useMediaQuery,
 Drawer,
 AppBar,
 Slide,
 CssBaseline,
} from '@mui/material';
import {
 Close,
 Menu as MenuHamb,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

//-------------------- Actions --------------------------
import { getNotification } from '../../state/actions/notification';


//-------------------- Assets --------------------------
import NavLogo from './../../assets/Logo_PXBR_Blanco-09.webp';

//-------------------- Components --------------------------
import UserIcon from './userIcon';
import FlexBetween from './flexBetween/flexBetween';
import Notification from './Notification/Notification';

///////////////////////
const NavBar = () => {
 const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

 const { notification } = useSelector((state) => state.notification);

 const userData = JSON.parse(sessionStorage.getItem('userData'));
 //console.log(userData.user.user.admin)

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

 useEffect(() => {
  dispatch(getNotification());
 }, [dispatch]);

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
      {userData.user.admin ? (
       <Notification notification={notification} />
      ) : (
       <></>
      )}

      {userData.user.admin === true ? (
       <RouterLink
        to='/usuarios'
        style={{ textDecoration: 'none' }}>
        <Typography sx={{ color: 'white' }}>Usuarios</Typography>
       </RouterLink>
      ) : (
       <></>
      )}

      <RouterLink
       to='/calculator'
       style={{ textDecoration: 'none' }}>
       <Typography sx={{ color: 'white' }}>Calculadora</Typography>
      </RouterLink>

      <RouterLink
       to='/viviendas'
       style={{ textDecoration: 'none' }}>
       <Typography sx={{ color: 'white' }}>Viviendas</Typography>
      </RouterLink>

      <RouterLink
       to='/scrape'
       style={{ textDecoration: 'none' }}>
       <Typography sx={{ color: 'white' }}>Scrape</Typography>
      </RouterLink>

      <UserIcon
       onLoginClick={handleLoginClick}
       onRegisterClick={handleRegisterClick}
      />
      
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
        <IconButton
         onClick={handleCloseMenu}
         color='primary'>
         <Close />
        </IconButton>
       </Box>

       {/* MENU ITEMS */}

       <FlexBetween
        display='flex'
        flexDirection='column'
        justifyContent='center'
        gap='3rem'>
        <UserIcon
         onLoginClick={handleLoginClick}
         onRegisterClick={handleRegisterClick}
        />

        {userData.user.admin ? (
         <Notification notification={notification} />
        ) : (
         <></>
        )}

        {userData.user.admin === true ? (
         <RouterLink
          to='/usuarios'
          style={{ textDecoration: 'none' }}>
          <Typography sx={{ color: 'black' }}>Usuarios</Typography>
         </RouterLink>
        ) : (
         <></>
        )}

        <RouterLink
         to='/calculator'
         style={{ textDecoration: 'none' }}>
         <Typography sx={{ color: 'black' }}>Calculadora</Typography>
        </RouterLink>

        <RouterLink
         to='/viviendas'
         style={{ textDecoration: 'none' }}>
         <Typography sx={{ color: 'black' }}>Viviendas</Typography>
        </RouterLink>

        <RouterLink
         to='/scrape'
         style={{ textDecoration: 'none' }}>
         <Typography sx={{ color: 'black' }}>Scrape</Typography>
        </RouterLink>
       </FlexBetween>
      </Box>
     </Drawer>
    )}
   </FlexBetween>
  </AppBar>
 );
};

export default NavBar;
