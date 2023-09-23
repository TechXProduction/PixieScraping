import axios from 'axios';
import swal from 'sweetalert';
import { getIntercepto } from '../slices/interceptoSlice';

const svHost = import.meta.env.VITE_SV_HOST;

export const getInterceptos = () => async (dispatch) => {
 try {
  let res = await axios.get(`${svHost}/user/intercepto`);
  dispatch(getIntercepto(res.data));
 } catch (error) {
  console.log(error);
 }
};
