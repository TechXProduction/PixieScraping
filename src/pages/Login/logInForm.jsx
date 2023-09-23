import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
 Avatar,
 Button,
 CssBaseline,
 TextField,
 FormControlLabel,
 Checkbox,
 Paper,
 Box,
 Grid,
 Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

//-------------------- Actions --------------------------
import { logIn } from '../../state/actions/user';

//-------------------- Assets --------------------------
//import BgImage from '../../assets/BG1.png'
//import GoogleVector from '../../assets/Social Icons.png'
import imageLogin from '../../assets/LoginImage.webp';

//-------------------- Components --------------------------
import NavBarNoLogin from '../../components/NavBar/navBarNoLogin';

////////////////////////////
function Copyright(props) {
 return (
  <Typography
   variant='body2'
   color='text.secondary'
   align='center'
   {...props}>
   {'Copyright © '}
   <Link
    color='inherit'
    href='https://www.pixiebr.com/'>
    PixieBr
   </Link>{' '}
   {new Date().getFullYear()}
   {'.'}
  </Typography>
 );
}

const initialValuesLogin = {
 email: '',
 password: '',
};

const loginSchema = Yup.object().shape({
 email: Yup.string().email('mail inválido').required('Debes colocar un email'),
 password: Yup.string().required('Debes colocar la contraseña'),
});

function LogInForm() {
 const theme = useTheme();
 const loginFont = theme.palette.primary.loginFont;
 const loginbackground = theme.palette.background.login;
 const logininput = theme.palette.background.logininput;
 const navigate = useNavigate();

 const [loading, setLoading] = useState(false);

 const dispatch = useDispatch();

 // const handleSubmit = (event) => {
 //   event.preventDefault();
 //   const data = new FormData(event.currentTarget);
 //   console.log({
 //     email: data.get('email'),
 //     password: data.get('password'),
 //   });
 // };

 const handleFormSubmit = (values) => {
  setLoading(true);
  const data = new FormData();
  for (let value in values) {
   data.append(value, values[value]);
  }
  console.log({
   email: data.get('email'),
   password: data.get('password'),
  });

  let email = data.get('email');
  let password = data.get('password');

  dispatch(logIn({ email, password }));

  setTimeout(() => {
   setLoading(false);
  }, 2000);
 };

 return (
  <div>
   <NavBarNoLogin />
   <Grid
    container
    component='main'
    sx={{ alignItems: 'center', background: loginbackground }}>
    <Grid
     item
     md={7}
     sx={{
      display: { xs: 'none', md: 'flex', sm: 'none' },
      justifyContent: 'center',
     }}>
     <Grid
      sx={{
       display: 'flex',
       maxWidth: '568px',
       maxHeight: '497px',
       justifyContent: 'center',
       display: 'flex',
      }}>
      <Box minWidth={'500px'}>
       <img src={imageLogin}></img>
      </Box>
     </Grid>
    </Grid>

    <Grid
     item
     xs={12}
     sm={12}
     md={5}
     elevation={6}
     square
     sx={{ justifyContent: 'center', display: 'flex' }}>
     <Box
      sx={{
       my: 8,
       mx: 4,
       display: 'flex',
       flexDirection: 'column',

       maxWidth: '400px',
       maxHeight: '497px',
      }}>
      <Typography
       component='h1'
       variant='h5'
       sx={{
        fontSize: '30px',
        fontWeight: '600',
        color: loginFont,
        marginBottom: '18px',
       }}>
       Bienvenido a PixieBr
      </Typography>
      <Typography
       component='h1'
       variant='h5'
       sx={{
        fontSize: '14px',
        fontWeight: '400',
        color: loginFont,
        lineHeight: '20px',
        marginBottom: '18px',
       }}>
       ¿No tienes una cuenta?{' '}
       <Link
        to='/register'
        style={{ textDecoration: 'underline', color: '#00D5FA' }}>
        Crea una cuenta.
       </Link>
       Tomara solo unos minutos
      </Typography>
      <Box sx={{ mt: 1 }}>
       <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesLogin}
        validationSchema={loginSchema}>
        {({
         values,
         errors,
         touched,
         handleBlur,
         handleChange,
         handleSubmit,
         setFieldValue,
         resetForm,
        }) => (
         <Box
          component='form'
          onSubmit={handleSubmit}>
          <Typography
           sx={{
            fontWeight: '500',
            fontSize: '14px',
            color: loginFont,
            marginBottom: '2px',
           }}>
           Email
          </Typography>
          <TextField
           sx={{ marginBottom: '27px', background: logininput }}
           required
           fullWidth
           id='email'
           label='Ingresa tu email'
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.email}
           name='email'
           autoComplete='email'
           error={Boolean(touched.email) && Boolean(errors.email)}
           helperText={touched.email && errors.email}
          />
          <Typography
           sx={{
            fontWeight: '500',
            fontSize: '14px',
            color: loginFont,
            marginBottom: '2px',
           }}>
           Contraseña
          </Typography>
          <TextField
           sx={{ marginBottom: '22px', background: logininput }}
           required
           fullWidth
           name='password'
           label='Ingresa tu contraseña'
           type='password'
           id='password'
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.password}
           autoComplete='current-password'
           error={Boolean(touched.password) && Boolean(errors.password)}
           helperText={touched.password && errors.password}
          />
          {/* <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Recuerdame"
                    /> */}
          <Grid
           sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '6px',
            marginBottom: '20px',
           }}>
           <Link
            to='/login'
            style={{ textDecoration: 'underline', color: '#00D5FA' }}>
            ¿Olvidaste tu contraseña?
           </Link>
          </Grid>
          <Button
           type='submit'
           fullWidth
           variant='outlined'
           sx={{
            color: loginFont,
            fontSize: '12px',
            fontWeight: '600',
            marginTop: '8px',
            marginBottom: '24px',
            background: logininput,
            textTransform: 'none',
           }}>
           Iniciar sesión
          </Button>

          {loading ? (
           <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
           </Box>
          ) : (
           <></>
          )}

          <Copyright sx={{ mt: 5 }} />
         </Box>
        )}
       </Formik>
      </Box>
     </Box>
    </Grid>
   </Grid>
  </div>
 );
}

export default LogInForm;