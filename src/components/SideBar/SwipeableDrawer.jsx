import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';

export default function SwipeableTemporaryDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const menuItems = [
    { text: t('menu.dashboard'),path: "/app/dashboard",icon: <InboxIcon />},
    { text: t('menu.financial'),path: "/app/financial",icon: <MailIcon /> }, // Sugestão: deixar de stand-by
    { text: t('menu.stock'),path: "/app/stockdash", icon: <InboxIcon /> },
    { text: t('menu.employees'),path: "/app/employeesdash", icon: <MailIcon /> },// Sugestão: deixar de stand-by
    { text: t('menu.settings'), path: '/app/settings', icon: <SettingsIcon /> },
  ];

  const handleLogout = () => {
    const keysToRemove = [
      'token',
      'auth',
      'user',
      'session',
      'jwt',
      'accessToken',
      'refreshToken',
    ];

    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });

    sessionStorage.clear();
    navigate('/');
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        height: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={t('menu.logout')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
    >
      {list('left')}
    </SwipeableDrawer>
  );
}
