import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

//-------------------- Actions --------------------------
import {
 getUsers,
 changeEmailConfirm,
 banear,
 appraisalAuth,
 scrapeAuth,
} from '../../state/actions/user';

//-------------------- Components --------------------------
import NavBar from '../../components/NavBar/navBar';

////////////////////////
const Usuarios = () => {
 const dispatch = useDispatch();
 const { user } = useSelector((state) => state.user);

 const handleConfirmEmail = (id) => {
  dispatch(changeEmailConfirm(id));
  dispatch(getUsers());
 };

 const handleBanear = (id) => {
  dispatch(banear(id));
  dispatch(getUsers());
 };

 const handleAppraisalAuth = (id) => {
  dispatch(appraisalAuth(id));
  dispatch(getUsers());
 };

 const handleScrapeAuth = (id) => {
  dispatch(scrapeAuth(id));
  dispatch(getUsers());
 };

 useEffect(() => {
  dispatch(getUsers());
 }, [dispatch]);

 //  console.log(user);

 const [rows, setRows] = React.useState(user.users ? user.users : []);

 const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'username', headerName: 'Nombre', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
   field: 'emailVerified',
   headerName: 'Habilitado',
   type: 'boolean',
   width: 120,
   editable: true, // Permite la edición del campo
   renderCell: (params) => (
    <input
     type='checkbox'
     checked={params.value}
     onChange={() => handleConfirmEmail(params.row.id)}
    />
   ),
  },
  {
   field: 'appraisalAuth',
   headerName: 'Tasación',
   type: 'boolean',
   width: 120,
   editable: true, // Permite la edición del campo
   renderCell: (params) => (
    <input
     type='checkbox'
     checked={params.value}
     onChange={() => handleAppraisalAuth(params.row.id)}
    />
   ),
  },
  {
   field: 'scrapeAuth',
   headerName: 'Scrape',
   type: 'boolean',
   width: 120,
   editable: true, // Permite la edición del campo
   renderCell: (params) => (
    <input
     type='checkbox'
     checked={params.value}
     onChange={() => handleScrapeAuth(params.row.id)}
    />
   ),
  },
  {
   field: 'banned',
   headerName: 'Eliminar',
   type: 'boolean',
   width: 120,
   renderCell: (params) => (
    <button
     onClick={() => {
      const confirmarEliminacion = window.confirm(
       '¿Seguro que quieres eliminar el usuario?',
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
    <Box sx={{ display: 'flex', width: '90%', overflowX: 'auto' }}>
     <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
       rows={user.users ? user.users : rows}
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

export default Usuarios;
