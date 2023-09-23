import axios from 'axios';
import swal from 'sweetalert';
import { getNotifications } from '../slices/notificationSlice';

const svHost = import.meta.env.VITE_SV_HOST;

export const getNotification = () => async (dispatch) => {
 try {
  let userData = JSON.parse(sessionStorage.getItem('userData'));
  let token = userData.user.token;
  let res = await axios.get(`${svHost}/user/notification`, {
   headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
   },
  });
  dispatch(getNotifications(res.data));
 } catch (error) {
  console.log(error);
 }
};
