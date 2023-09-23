import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './App.css';

const svHost = import.meta.env.VITE_SV_HOST;

//-------------------- Assets --------------------------
import { themeSettings } from './utils/theme';

//-------------------- Pages --------------------------
import Login from './pages/Login/logInForm.jsx';
import RegisterForm from './pages/Register/registerForm.jsx';
import Home from './pages/Home/Home.jsx';
import Usuarios from './pages/UsuariosAdmin/Usuarios.jsx';
import NotFound from './pages/404/NotFound.jsx';
import ScrapeForm from './pages/scrape/ScrapeForm.jsx';
import Viviendas from './pages/Viviendas/Viviendas.jsx';
import Calculator from './pages/Calculator/Calculator.jsx';

/////////////////////
const App = () => {
 const mode = useSelector((state) => state.mode.mode);
 const theme = createTheme(themeSettings(mode));

 const userDataString = sessionStorage.getItem('userData');
 const userData = userDataString ? JSON.parse(userDataString) : null;
 const isUserLoggedIn = userData && userData.user && userData.token;
 //  console.log('USER DATAAA', userData);
 const isUserAdmin = isUserLoggedIn && userData.user.admin;
 const isUserBanned = isUserLoggedIn && userData.user.banned;

 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true); // Inicialmente establecido en true

 const location = useLocation();

 // llamado a la api cada vez que cambiamos de rutas
 const fetchUser = async () => {
  if (isUserLoggedIn) {
   try {
    const token = userData.token;
    // console.log(token, 'tokeeeee');
    const response = await axios.get(`${svHost}/user/protected`, {
     headers: {
      Authorization: `Bearer ${token}`,
     },
    });
    setUser(response.data.user);
   } catch (error) {
    setUser(null);
   } finally {
    setLoading(false);
   }
  } else {
   setLoading(false);
  }
 };

 useEffect(() => {
  fetchUser();
 }, []); // Sin dependencias, se ejecuta solo una vez al montar el componente

 useEffect(() => {
  fetchUser();
 }, [location.pathname]); // Se ejecuta cuando cambia la ruta

 if (loading) {
  return <div>Loading...</div>;
 }

 const logueado = isUserLoggedIn && user?.id === userData?.user.id;
 const esAdmin = isUserAdmin && user?.admin;
 const scrapeAuth = isUserLoggedIn && user?.scrapeAuth;
 const appraisalAuth = isUserLoggedIn && user?.appraisalAuth;

 return (
  <div className='App'>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes>
     <Route
      path='/'
      element={logueado ? <Home /> : <Navigate to='/login' />}
     />
     {!isUserLoggedIn && (
      <Route
       path='/login'
       element={<Login />}
      />
     )}
     {!isUserLoggedIn && (
      <Route
       path='/register'
       element={<RegisterForm />}
      />
     )}
     {esAdmin && (
      <Route
       path='/usuarios'
       element={<Usuarios />}
      />
     )}
     {logueado && scrapeAuth && (
      <Route
       path='/scrape'
       element={<ScrapeForm />}
      />
     )}
     {logueado && appraisalAuth && (
      <Route
       path='/calculator'
       element={<Calculator />}
      />
     )}
     {logueado && appraisalAuth && (
      <Route
       path='/viviendas'
       element={<Viviendas />}
      />
     )}

     <Route
      path='*'
      element={<NotFound />}
     />
    </Routes>
   </ThemeProvider>
  </div>
 );
};

export default App;
