import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//-------------------- Actions --------------------------
import { getUsers } from '../../state/actions/user';
import { getVivienda } from '../../state/actions/vivienda';
import { deleteVivienda } from '../../state/actions/vivienda';

//-------------------- Components --------------------------
import NavBar from '../../components/NavBar/navBar';

/////////////////////////
const Viviendas = () => {
 const dispatch = useDispatch();
 const { user } = useSelector((state) => state.user);
 const { vivienda } = useSelector((state) => state.vivienda);

 console.log(vivienda);
 const handleConfirmEmail = (id) => {
  dispatch(changeEmailConfirm(id));
  dispatch(getUsers());
 };

 const handleBanear = (id) => {
  dispatch(deleteVivienda(id));
  dispatch(getVivienda());
 };

 useEffect(() => {
  dispatch(getUsers());
  dispatch(getVivienda());
 }, [dispatch]);

 const [rows, setRows] = React.useState(
  vivienda.viviendas ? vivienda.viviendas : [],
 );

 const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'Domicilio', headerName: 'Domicilio', width: 200 },
  { field: 'createdAt', headerName: 'Creado', width: 180 },
  {
   field: 'Opinion_Valor_Precio_Final',
   headerName: 'Opinion Valor Precio Final',
   width: 180,
  },
  { field: 'M2', headerName: 'M2', width: 20 },
  { field: 'M2_Construccion', headerName: 'M2 Construccion', width: 120 },
  { field: 'Ubicacion', headerName: 'Ubicacion', width: 80 },
  { field: 'COS', headerName: 'COS', width: 80 },
  { field: 'CUS', headerName: 'Ubicacion', width: 80 },
  { field: 'Seguridad', headerName: 'Seguridad', width: 80 },
  { field: 'No_Cuartos', headerName: 'No_Cuartos', width: 80 },
  { field: 'No_banos', headerName: 'No_banos', width: 80 },
  { field: 'Dos_Plantas', headerName: 'Dos_Plantas', width: 80 },
  { field: 'M2_Cochera', headerName: 'M2_Cochera', width: 80 },
  { field: 'minisplit_2ton', headerName: 'minisplit_2ton', width: 120 },
  { field: 'minisplit_1_5ton', headerName: 'minisplit_1_5ton', width: 120 },
  { field: 'minisplit_1ton', headerName: 'minisplit_1ton', width: 120 },
  { field: 'No_recamaras', headerName: 'No_recamaras', width: 120 },
  {
   field: 'Nivel_Socioeconomico',
   headerName: 'Nivel_Socioeconomico',
   width: 120,
  },

  { field: 'Edad', headerName: 'Edad', width: 120 },
  // {
  //   field: 'emailVerified',
  //   headerName: 'Habilitado',
  //   type: 'boolean',
  //   width: 120,
  //   editable: true, // Permite la edición del campo
  //   renderCell: (params) => (
  //     <input
  //       type="checkbox"
  //       checked={params.value}
  //       onChange={() => handleConfirmEmail(params.row.id)}
  //     />
  //   ),
  // },
  {
   field: 'banned',
   headerName: 'Eliminar',
   type: 'boolean',
   width: 120,
   renderCell: (params) => (
    <button
     onClick={() => {
      const confirmarEliminacion = window.confirm(
       '¿Seguro que quieres eliminar la vivienda?',
      );
      if (confirmarEliminacion) {
       handleBanear(params.row.id);
      }
     }}
     style={{
      background: 'red',
      borderRadius: '1px solid black',
      color: 'white',
     }}>
     Eliminar
    </button>
   ),
  },
 ];

 return (
  <div>
   <NavBar />
   <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <Box sx={{ display: 'flex', width: '90%' }}>
     <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
       rows={vivienda.viviendas ? vivienda.viviendas : rows}
       columns={columns}
       pageSize={10}
       disableSelectionOnClick // Deshabilita la selección de filas al hacer clic
      />
     </Box>
    </Box>
   </Box>
  </div>
 );
};

export default Viviendas;
