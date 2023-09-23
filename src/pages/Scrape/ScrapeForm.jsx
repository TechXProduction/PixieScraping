import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
 Button,
 TextField,
 Box,
 Grid,
 Typography,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

//-------------------- Actions --------------------------
import { getScrape } from '../../state/actions/scrape';

//-------------------- Assets --------------------------
//import BgImage from '../../assets/BG1.png'
//import GoogleVector from '../../assets/Social Icons.png'
import imageLogin from '../../assets/LoginImage.webp';

//-------------------- Components --------------------------
import ScrapeResult from './scrapeResult';
import NavBar from '../../components/NavBar/NavBar';

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

const initialValuesForm = {
 nombre: '',
 año: '',
 asunto: '',
};

const FormSchema = Yup.object().shape({
 nombre: Yup.string().required('Debes colocar un nombre'),
 año: Yup.number(),
 asunto: Yup.number(),
});

function ScrapeForm() {
 const theme = useTheme();
 const loginFont = theme.palette.primary.loginFont;
 const loginbackground = theme.palette.background.login;
 const logininput = theme.palette.background.logininput;
 //  const navigate = useNavigate();

 const [loading, setLoading] = useState(false);
 const [data, setData] = useState();

 //  const dispatch = useDispatch();

 // const handleSubmit = (event) => {
 //   event.preventDefault();
 //   const data = new FormData(event.currentTarget);
 //   console.log({
 //     email: data.get('email'),
 //     password: data.get('password'),
 //   });
 // };

 // aca va la conexion con el back

 const handleFormSubmit = async (values) => {
  setLoading(true);
  const formData = new FormData();
  for (let value in values) {
   formData.append(value, values[value]);
  }

  let nombre = formData.get('nombre');
  let asunto = formData.get('asunto');
  let año = formData.get('año');

  // console.log('ENVIE ESTO DESDE FRONT: ', {
  //  nombre: nombre,
  //  asunto: asunto,
  //  año: año,
  // });

  try {
   const response = await axios.post('http://localhost:4000/scrape', {
    nombre,
    asunto,
    año,
   });
   //  console.log('DATAAA ', response.data);
   setData(response.data);
   setLoading(false);
  } catch (err) {
   console.log(err.message);
  }
 };

 const dataRemove = () => {
  setData(null);
 };

 return (
  <div>
   <NavBar />
   <Grid
    container
    component='main'
    sx={{
     alignItems: 'center',
     background: loginbackground,
     justifyContent: 'center',
    }}>
    <Grid
     item
     xs={12}
     sm={12}
     md={5}
     elevation={6}
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
       align='center'
       sx={{
        fontSize: '30px',
        fontWeight: '600',
        color: loginFont,
        marginBottom: '18px',
       }}>
       Busqueda
      </Typography>
      <Typography
       component='h1'
       variant='h5'
       align='center'
       sx={{
        fontSize: '14px',
        fontWeight: '400',
        color: loginFont,
        lineHeight: '20px',
        marginBottom: '18px',
       }}>
       busca antecedentes de la persona en el STJ y la ubicacion de la parcela
      </Typography>
      <Box sx={{ mt: 1 }}>
       <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesForm}
        validationSchema={FormSchema}>
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
           Nombre
          </Typography>
          <TextField
           sx={{ marginBottom: '27px', background: logininput }}
           required
           fullWidth
           id='nombre'
           label='Ingresa el nombre a buscar'
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.nombre}
           name='nombre'
           error={Boolean(touched.nombre) && Boolean(errors.nombre)}
           helperText={touched.nombre && errors.nombre}
          />
          <Typography
           sx={{
            fontWeight: '500',
            fontSize: '14px',
            color: loginFont,
            marginBottom: '2px',
           }}>
           Asunto
          </Typography>
          <TextField
           sx={{ marginBottom: '22px', background: logininput }}
           fullWidth
           type='number'
           name='asunto'
           label='Ingresa el N° de expediente'
           id='asunto'
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.asunto}
           error={Boolean(touched.asunto) && Boolean(errors.asunto)}
           helperText={touched.asunto && errors.asunto}
          />
          <Typography
           sx={{
            fontWeight: '500',
            fontSize: '14px',
            color: loginFont,
            marginBottom: '2px',
           }}>
           Año
          </Typography>
          <TextField
           sx={{ marginBottom: '22px', background: logininput }}
           fullWidth
           name='año'
           label='Ingresa el año'
           type='number'
           id='año'
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.año}
           error={Boolean(touched.año) && Boolean(errors.año)}
           helperText={touched.año && errors.año}
          />
          {/* <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Recuerdame"
                    /> */}

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
           Buscar
          </Button>

          {/* <Button
           type='button'
           fullWidth
           variant='outlined'
           onClick={dataRemove}
           sx={{
            color: loginFont,
            fontSize: '12px',
            fontWeight: '600',
            marginTop: '8px',
            marginBottom: '24px',
            background: logininput,
            textTransform: 'none',
           }}>
           Borrar Datos
          </Button> */}

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

    {data ? <ScrapeResult data={data} /> : <></>}
   </Grid>
  </div>
 );
}

export default ScrapeForm;
