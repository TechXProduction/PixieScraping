import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import {
 FormControl,
 FormControlLabel,
 Checkbox,
 InputLabel,
 Select,
 MenuItem,
 Button,
 TextField,
 Typography,
 Backdrop,
 CircularProgress,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

//-------------------- Actions --------------------------
import { getInterceptos } from '../../state/actions/intercepto';
import { postVivienda } from '../../state/actions/vivienda';
import { getContadorAction } from '../../state/actions/contador';

//-------------------- Components --------------------------
import PopUp from './PopUp';

const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 ...theme.typography.body2,
 padding: theme.spacing(2),
 textAlign: 'center',
 color: theme.palette.text.secondary,
}));

////////////////////////////
const Formulario = () => {
 const dispatch = useDispatch();
 const { intercepto } = useSelector((state) => state.intercepto);
 const { contador } = useSelector((state) => state.contador);

 const [loadingCalculo, setLoadingCalculo] = useState(false);
 const [open, setOpen] = useState(false);
 const handleOpen = () => {
  setOpen(true);
 };
 const handleClose = () => {
  setOpen(false);
 };

 const [resultadoFinal, setResultadoFinal] = useState(0);
 const [formularioData, setFormularioData] = useState({
  Domicilio: '',
  M2: '',
  M2_Construccion: '',
  COS: '',
  CUS: '',
  Seguridad: '',
  Edad: '',
  No_Cuartos: '',
  No_banos: '',
  M2_Cochera: '',
  minisplit_2ton: '',
  minisplit_1_5ton: '',
  minisplit_1ton: '',
  No_recamaras: '',
  Dos_Plantas: '',
  Ubicacion: '',
  Nivel_Socioeconomico: '',
  Uso_Suelo: '',
  Obra_Negra: false,
  Opinion_Valor_Precio_Final: '',
 });

 const handleCalcular = () => {
  event.preventDefault();

  intercepto?.intercepto.map((el) => {
   setResultadoFinal(
    ((formularioData.M2 - el.M2_resta) / el.M2_division) * el.M2 +
     ((formularioData.M2_Construccion - el.M2_Construccion_resta) /
      el.M2_Construccion_division) *
      el.M2_Construccion +
     ((formularioData.COS - el.COS_resta) / el.COS_division) * el.COS +
     ((formularioData.CUS - el.CUS_resta) / el.CUS_division) * el.CUS +
     ((formularioData.Seguridad - el.Seguridad_resta) / el.Seguridad_division) *
      el.Seguridad +
     ((formularioData.Edad - el.Edad_resta) / el.Edad_division) * el.Edad +
     ((formularioData.No_Cuartos - el.No_Cuartos_resta) /
      el.No_Cuartos_division) *
      el.No_Cuartos +
     ((formularioData.No_banos - el.No_banos_resta) / el.No_banos_division) *
      el.No_banos +
     ((formularioData.M2_Cochera - el.M2_Cochera_resta) /
      el.M2_Cochera_division) *
      el.M2_Cochera +
     ((formularioData.minisplit_2ton - el.minisplit_2ton_resta) /
      el.minisplit_2ton_division) *
      el.minisplit_2ton +
     ((formularioData.minisplit_1_5ton - el.minisplit_1_5ton_resta) /
      el.minisplit_1_5ton_division) *
      el.minisplit_1_5ton +
     ((formularioData.minisplit_1ton - el.minisplit_1ton_resta) /
      el.minisplit_1ton_division) *
      el.minisplit_1ton +
     ((formularioData.No_recamaras - el.No_recamaras_resta) /
      el.No_recamaras_division) *
      el.No_recamaras +
     (formularioData.Dos_Plantas === '1' ? 1 * el.Dos_Plantas_1 : 0) +
     (formularioData.Dos_Plantas === '0' ? el.Dos_Plantas_0 : 0) +
     (formularioData.Ubicacion === '1' ? 1 * el.Ubicacion_1 : 0) + // Norte
     (formularioData.Ubicacion === '2' ? 1 * el.Ubicacion_2 : 0) + // Sur
     (formularioData.Ubicacion === '3' ? 1 * el.Ubicacion_3 : 0) + // Oriente
     (formularioData.Ubicacion === '4' ? 1 * el.Ubicacion_4 : 0) + // Poniente
     (formularioData.Ubicacion === '5' ? 1 * el.Ubicacion_5 : 0) + // Norponiente
     (formularioData.Nivel_Socioeconomico === '1'
      ? 1 * el.Nivel_Socioeconomico_1
      : 0) + // Bajo
     (formularioData.Nivel_Socioeconomico === '2'
      ? 1 * el.Nivel_Socioeconomico_2
      : 0) + // Medio Bajo
     (formularioData.Nivel_Socioeconomico === '3'
      ? 1 * el.Nivel_Socioeconomico_3
      : 0) + // Medio alto
     (formularioData.Nivel_Socioeconomico === '4'
      ? 1 * el.Nivel_Socioeconomico_4
      : 0) + //alto
     el.Intercepto,
   );
  });

  setFormularioData((prevState) => ({
   ...prevState,
   Opinion_Valor_Precio_Final: resultadoFinal,
  }));

  setOpen(true);
 };
 console.log(resultadoFinal);
 console.log(formularioData);

 const handleChange = (event) => {
  const { name, value, type, checked } = event.target;

  if (type === 'checkbox') {
   setFormularioData((prevState) => ({
    ...prevState,
    [name]: checked,
   }));
  }
  if (name === 'Domicilio') {
   setFormularioData((prevState) => ({
    ...prevState,
    [name]: value,
   }));
  } else {
   // Si el valor es numérico, conviértelo a número
   const parsedValue = value; //=== ""? null : parseFloat(value);

   setFormularioData((prevState) => ({
    ...prevState,
    [name]: parsedValue,
   }));
  }
 };
 console.log(contador);

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (contador.contador.numero === 5) {
   try {
    setLoadingCalculo(true);
    await axios.get('http://localhost:4000/user/entrada');
    setLoadingCalculo(false);
    dispatch(postVivienda(formularioData));
   } catch (error) {
    console.log(error);
    alert('ocurrio un error');
   }
  } else {
   dispatch(postVivienda(formularioData));
  }
 };

 useEffect(() => {
  dispatch(getInterceptos());
  dispatch(getContadorAction());
 }, [dispatch]);

 useEffect(() => {
  setFormularioData((prevState) => ({
   ...prevState,
   Opinion_Valor_Precio_Final: resultadoFinal,
  }));
 }, [resultadoFinal]);

 console.log(intercepto.intercepto);
 return (
  <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
   <Grid sx={{ display: 'flex', width: '95%', justifyContent: 'center' }}>
    <form
     onSubmit={handleSubmit}
     style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
     }}>
     <Typography
      sx={{
       marginTop: '18px',
       fontWeight: 600,
       fontSize: '38px',
       color: 'rgba(0, 0, 0, 0.87)',
      }}>
      Software de Predictivo para Valor Final del Inmueble
     </Typography>
     <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index'}>
       <FormControl sx={{ width: '100%', marginBottom: '10px' }}>
        <InputLabel
         htmlFor='Domicilio'
         shrink={Boolean(formularioData.Domicilio)}>
         Domicilio
        </InputLabel>
        <TextField
         name='Domicilio'
         value={formularioData.Domicilio}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index0'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='M2'
         shrink={Boolean(formularioData.M2)}>
         M2 del terreno
        </InputLabel>
        <TextField
         name='M2'
         value={formularioData.M2}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index1'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='M2_Construccion'
         shrink={Boolean(formularioData.M2)}>
         M2 Construccion
        </InputLabel>
        <TextField
         name='M2_Construccion'
         value={formularioData.M2_Construccion}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index2'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='COS'
         shrink={Boolean(formularioData.COS)}>
         COS
        </InputLabel>
        <TextField
         name='COS'
         value={formularioData.COS}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index3'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='CUS'
         shrink={Boolean(formularioData.CUS)}>
         CUS
        </InputLabel>
        <TextField
         name='CUS'
         value={formularioData.CUS}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index4'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='Seguridad'
         shrink={Boolean(formularioData.Seguridad)}>
         Seguridad
        </InputLabel>
        <TextField
         name='Seguridad'
         value={formularioData.Seguridad}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index5'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='Edad'
         shrink={Boolean(formularioData.Edad)}>
         Edad
        </InputLabel>
        <TextField
         name='Edad'
         value={formularioData.Edad}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index6'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='No_Cuartos'
         shrink={Boolean(formularioData.No_Cuartos)}>
         No. Cuartos
        </InputLabel>
        <TextField
         name='No_Cuartos'
         value={formularioData.No_Cuartos}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index7'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='No_banos'
         shrink={Boolean(formularioData.No_banos)}>
         No. Baños
        </InputLabel>
        <TextField
         name='No_banos'
         value={formularioData.No_banos}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index8'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='M2_Cochera'
         shrink={Boolean(formularioData.M2_Cochera)}>
         M2 de Cochera
        </InputLabel>
        <TextField
         name='M2_Cochera'
         value={formularioData.M2_Cochera}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index9'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='minisplit_2ton'
         shrink={Boolean(formularioData.minisplit_2ton)}>
         Minisplit de 2 Ton
        </InputLabel>
        <TextField
         name='minisplit_2ton'
         value={formularioData.minisplit_2ton}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index10'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='minisplit_1_5ton'
         shrink={Boolean(formularioData.minisplit_1_5ton)}>
         Minisplit de 1.5 Ton
        </InputLabel>
        <TextField
         name='minisplit_1_5ton'
         value={formularioData.minisplit_1_5ton}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index11'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='minisplit_1ton'
         shrink={Boolean(formularioData.minisplit_1ton)}>
         Minisplit de 1 Ton
        </InputLabel>
        <TextField
         name='minisplit_1ton'
         value={formularioData.minisplit_1ton}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index12'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel
         htmlFor='No_recamaras'
         shrink={Boolean(formularioData.No_recamaras)}>
         No. Recamaras
        </InputLabel>
        <TextField
         name='No_recamaras'
         value={formularioData.No_recamaras}
         onChange={handleChange}
         type='text'
         required
         fullWidth
        />
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index13'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel htmlFor='Dos_Plantas'>Dos Plantas</InputLabel>
        <Select
         name='Dos_Plantas'
         value={formularioData.Dos_Plantas}
         onChange={handleChange}
         fullWidth
         required>
         <MenuItem value='1'>Si</MenuItem>
         <MenuItem value='0'>No</MenuItem>
        </Select>
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index14'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel htmlFor='Ubicacion'>Ubicación</InputLabel>
        <Select
         name='Ubicacion'
         value={formularioData.Ubicacion}
         onChange={handleChange}
         fullWidth
         required>
         <MenuItem value='1'>Norte</MenuItem>
         <MenuItem value='2'>Sur</MenuItem>
         <MenuItem value='3'>Oriente</MenuItem>
         <MenuItem value='4'>Poniente</MenuItem>
         <MenuItem value='5'>Norponiente</MenuItem>
        </Select>
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index15'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel htmlFor='Nivel_Socioeconomico'>
         Nivel Socioeconómico
        </InputLabel>
        <Select
         name='Nivel_Socioeconomico'
         value={formularioData.Nivel_Socioeconomico}
         onChange={handleChange}
         fullWidth
         required>
         <MenuItem value='1'>Bajo</MenuItem>
         <MenuItem value='2'>Medio bajo</MenuItem>
         <MenuItem value='3'>Medio alto</MenuItem>
         <MenuItem value='4'>Alto</MenuItem>
        </Select>
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index16'}>
       <FormControl sx={{ width: '100%' }}>
        <InputLabel htmlFor='Uso_Suelo'>Uso del Suelo</InputLabel>
        <Select
         name='Uso_Suelo'
         value={formularioData.Uso_Suelo}
         onChange={handleChange}
         fullWidth
         required>
         <MenuItem value='Residencial'>Residencial</MenuItem>
         <MenuItem value='Comercial'>Comercial</MenuItem>
         <MenuItem value='Industrial'>Industrial</MenuItem>
         <MenuItem value='Mixto'>Mixto</MenuItem>
        </Select>
       </FormControl>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index17'}>
       <FormControlLabel
        sx={{ width: '100%' }}
        control={
         <Checkbox
          name='Obra_Negra'
          checked={formularioData.Obra_Negra}
          onChange={handleChange}
         />
        }
        label='Obra Negra'
       />
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index18'}></Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index19'}>
       <Button
        onClick={handleCalcular}
        variant='contained'
        sx={{ backgroundColor: '#2e55a0;', width: '100%', color: 'white' }}
        type='click'>
        Calcular
       </Button>
       <PopUp
        open={open}
        onClose={handleClose}
        handleSubmit={handleSubmit}
        formularioData={formularioData}
       />
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index20'}></Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index22'}></Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index22'}>
       <Typography sx={{ fontWeight: 500, fontSize: '18px' }}>
        Precio final : $ {resultadoFinal}
       </Typography>
      </Grid>

      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       key={'index22'}>
       <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>
        Próxima retroalimentación :{' '}
        {contador?.contador?.numero ? contador.contador.numero : 0} / 5
       </Typography>
      </Grid>
     </Grid>
    </form>
   </Grid>
   <Backdrop open={loadingCalculo}>
    <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
     <Typography
      color={'white'}
      fontSize={'26px'}>
      Retroalimentando algoritmo, por favor espere...
     </Typography>
     <CircularProgress />
    </Grid>
   </Backdrop>
  </Grid>
 );
};

export default Formulario;
