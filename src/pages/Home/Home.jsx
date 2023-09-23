import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

//-------------------- Components --------------------------
import NavBar from '../../components/NavBar/NavBar';
import Formulario from '../../components/FormularioCalculo/FormularioCalculo';

///////////////////////

const CenteredBox = styled(Box)({
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'center',
 justifyContent: 'center',
 height: '80vh',
});

const BlueButton = styled(Button)({
 fontSize: '2em',
 backgroundColor: '#2e55a0',
 color: 'white',
 padding: '10px 20px',
 margin: '10px',
 width: '20em', // Ajusta el ancho de los botones según tus necesidades
});

const Home = () => {
 const userData = JSON.parse(sessionStorage.getItem('userData'));

 return (
  <div>
   <NavBar />
   <CenteredBox>
    {userData.user.admin ? (
     <Link to='/usuarios'>
      <BlueButton>Ir al Panel Admin</BlueButton>
     </Link>
    ) : (
     <></>
    )}
    {userData.user.scrapeAuth ? (
     <Link to='/scrape'>
      <BlueButton>Ir al scrape del usuario</BlueButton>
     </Link>
    ) : (
     <></>
    )}

    {userData.user.appraisalAuth ? (
     <Link to='/calculator'>
      <BlueButton>Ir a la calculadora</BlueButton>
     </Link>
    ) : (
     <></>
    )}

    {userData.user.appraisalAuth ? (
     <Link to='/viviendas'>
      <BlueButton>Ir a las viviendas</BlueButton>
     </Link>
    ) : (
     <></>
    )}
   </CenteredBox>
  </div>
 );
};

export default Home;
