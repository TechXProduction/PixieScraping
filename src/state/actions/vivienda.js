import axios from 'axios';
import swal from 'sweetalert';
import { getViviendas } from '../slices/viviendaSlice';

const svHost = import.meta.env.VITE_SV_HOST;

export const postVivienda = (dataVivienda) => async (dispatch) => {
 try {
  let res = await axios.post(`${svHost}/user/newvivienda`, dataVivienda);

  if (res.data.message) {
   swal('', res.data.message, 'success');
  } else {
   swal('', 'Vivienda agregada a la Base de datos !', 'success').then(() => {
    window.location.href = '/';
   });
  }
 } catch (e) {
  let respuesta = JSON.parse(e.request.response).message;
  if (respuesta) {
   swal(respuesta);
  } else swal('Ocurrio un error, verifica que los campos esten correctos');
 }
};

export const getVivienda = () => async (dispatch) => {
 try {
  let userData = JSON.parse(sessionStorage.getItem('userData'));
  let token = userData.token;
  let res = await axios.get(`${svHost}/user/viviendas`, {
   headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
   },
  });

  dispatch(getViviendas(res.data));
 } catch (error) {
  console.log(error);
 }
};

export const deleteVivienda = (id) => async (dispatch) => {
 console.log(id, 'XXXXXXXXXXXXXX');
 try {
  let res = await axios.delete(`${svHost}/user/deletevivienda`, {
   data: { id },
  });
  await dispatch(getVivienda());
  if (res.data.message) {
   swal('', res.data.message, 'success');
  } else {
   swal('', 'Vivienda eliminada !', 'success');
   // .then(() => {
   //     window.location.href = "/";
   //})
  }
 } catch (e) {
  let respuesta = JSON.parse(e.request.response).message;
  if (respuesta) {
   swal(respuesta);
  } else swal('Ocurrio un error, contacta soporte');
  console.log(e);
 }
};
