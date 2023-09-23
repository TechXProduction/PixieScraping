import axios from 'axios';
import swal from 'sweetalert';

const svHost = import.meta.env.VITE_SV_HOST;

export const getScrape = (nombre, asunto, año) => async (dispatch) => {
 try {
  let res = await axios.post(`${svHost}/scrape`, {
   headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
   },
   nombre,
   asunto,
   año,
  });
  return res;
 } catch (error) {
  console.log(error);
 }
};
