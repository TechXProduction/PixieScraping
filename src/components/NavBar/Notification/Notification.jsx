import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Notification({ notification }) {
 const [showNotifications, setShowNotifications] = useState(false);
 const [selectedNotification, setSelectedNotification] = useState(null);
 const navigate = useNavigate();

 const handleNotificationsClick = (notification) => {
  setSelectedNotification(notification);
  setShowNotifications(false);
  // Realizar cualquier lógica adicional antes de redirigir
  navigate('/usuarios');
 };

 return (
  <AppBar
   position='static'
   sx={{
    alignItems: 'center',
    maxWidth: '20px',
    background: 'none',
    boxShadow: 'none',
   }}>
   <Toolbar>
    <IconButton
     sx={{ backgroundColor: '#2e55a0' }}
     color='inherit'
     onClick={() => setShowNotifications(!showNotifications)}>
     <Badge
      badgeContent={notification?.users?.length}
      color='error'>
      <Notifications />
     </Badge>
    </IconButton>
   </Toolbar>
   {showNotifications && (
    <div
     style={{ position: 'absolute', background: '#5270a1', color: 'white' }}>
     {notification?.users?.map((notification2) => (
      <div
       key={notification2.id}
       onClick={() => handleNotificationsClick(notification2)}
       style={{ cursor: 'pointer' }}>
       <Typography color={'#08F167'}> {notification2.email}</Typography>{' '}
       <Typography>Quiere unirse</Typography>
      </div>
     ))}
    </div>
   )}
  </AppBar>
 );
}

export default Notification;
