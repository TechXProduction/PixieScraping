import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

//-------------------- Assets --------------------------
import ImagenLogo from '../../assets/Logo_PXBR_Blanco-09.webp';

//////////////////////////
const NotFound = () => {
 // console.log("gola")
 return (
  <div style={{ backgroundColor: '#2e55a0', height: '100vh' }}>
   <Box
    sx={{ background: '#2e55a0' }}
    display={'flex'}
    justifyContent={'center'}>
    <Typography
     sx={{
      display: 'flex',
      color: 'white',
      fontSize: '40px',
      width: '100%',
      justifyContent: 'center',
     }}>
     404 - Página no encontrada
    </Typography>
   </Box>
   <Box
    sx={{ background: '#2e55a0' }}
    display={'flex'}
    justifyContent={'center'}>
    <img
     src={ImagenLogo}
     alt='No se encontro la imagen'
    />
   </Box>
   <Box
    sx={{ background: '#2e55a0' }}
    display={'flex'}
    justifyContent={'center'}>
    <Link to='/'>
     <button>Volver a Home</button>
    </Link>
   </Box>
  </div>
 );
};

export default NotFound;
