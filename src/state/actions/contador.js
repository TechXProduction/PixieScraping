import axios from 'axios';
import swal from 'sweetalert';
import { getContador } from '../slices/contadorSlice';

const svHost = import.meta.env.VITE_SV_HOST;

export const getContadorAction = () => async (dispatch) => {
 try {
  let res = await axios.get(`${svHost}/user/contador`);
  dispatch(getContador(res.data));
 } catch (error) {
  console.log(error);
 }
};
