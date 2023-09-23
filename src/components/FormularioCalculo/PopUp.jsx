import React from 'react';
import {
 Button,
 Dialog,
 DialogActions,
 DialogContent,
 DialogTitle,
 FormControl,
 InputLabel,
 MenuItem,
 Select,
 Grid,
 Typography,
} from '@mui/material';

////////////////////////////
const PopUp = (props) => {
 const { open, onClose, handleSubmit, formularioData } = props;

 const handleClose = () => {
  onClose();
 };

 return (
  <Dialog
   open={open}
   onClose={handleClose}>
   <DialogTitle>
    Verifica que todos los datos este correctos y sin errores
   </DialogTitle>
   <DialogContent>Estos datos son correctos?</DialogContent>
   <Grid sx={{ alignItems: 'center' }}>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Domicilio{' '}
      {formularioData.Domicilio ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.Domicilio}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      M2 del terreno{' '}
      {formularioData.M2 ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.M2}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      M2 Construccion{' '}
      {formularioData.M2_Construccion ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.M2_Construccion}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      COS{' '}
      {formularioData.COS ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.COS}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      CUS{' '}
      {formularioData.CUS ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.CUS}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Seguridad{' '}
      {formularioData.Seguridad ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.Seguridad}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Edad{' '}
      {formularioData.Edad ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.Edad}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      No. Cuartos{' '}
      {formularioData.No_Cuartos ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.No_Cuartos}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      No. Baños{' '}
      {formularioData.No_banos ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.No_banos}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      M2 de Cochera{' '}
      {formularioData.M2_Cochera ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.M2_Cochera}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Minisplit de 2 ton{' '}
      {formularioData.minisplit_2ton ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.minisplit_2ton}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Minisplit de 1.5 ton{' '}
      {formularioData.minisplit_1_5ton ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.minisplit_1_5ton}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Minisplit de 1 ton{' '}
      {formularioData.minisplit_1ton ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.minisplit_1ton}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      No. recamaras{' '}
      {formularioData.No_recamaras ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.No_recamaras}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Dos Plantas{' '}
      {formularioData.Dos_Plantas ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.Dos_Plantas}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Ubicacion{' '}
      {formularioData.Ubicacion ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.Ubicacion}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
    <Grid
     item
     xs={3}
     sm={3}
     md={3}
     key={'index22'}>
     <Typography sx={{ fontWeight: 500, fontSize: '10px' }}>
      Nivel Socioeconomico{' '}
      {formularioData.Nivel_Socioeconomico ? (
       <Typography
        fontSize={'10px'}
        color={'orange'}>
        {formularioData.Nivel_Socioeconomico}
       </Typography>
      ) : (
       <Typography
        fontSize={'10px'}
        color={'red'}>
        Vacio
       </Typography>
      )}
     </Typography>
    </Grid>
   </Grid>
   <DialogActions>
    <Button onClick={handleClose}>Cancelar</Button>
    <Button
     onClick={handleSubmit}
     sx={{ color: 'green' }}>
     Guardar en Base de datos
    </Button>
   </DialogActions>
  </Dialog>
 );
};

export default PopUp;
