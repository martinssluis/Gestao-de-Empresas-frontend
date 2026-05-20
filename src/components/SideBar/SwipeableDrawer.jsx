import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MuiSwipeableDrawer from '@mui/material/SwipeableDrawer';
import Tooltip from '@mui/material/Tooltip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

import { Link, useNavigate } from 'react-router-dom';
import { useI18n } from '../../i18n/useI18n';

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const navigate = useNavigate();
  const { t } = useI18n();

  const menuItems = [
    {
      text: t('menu.dashboard'),
      title: t('menu.dashboard'),
      path: '/app/dashboard',
      icon: <DashboardOutlinedIcon />,
    },
    {
      text: t('menu.financial'),
      title: t('menu.financial'),
      path: '/app/financial',
      icon: <LocalAtmOutlinedIcon />,
    },
    {
      text: t('menu.employees'),
      title: t('menu.employees'),
      path: '/app/employeesdash',
      icon: <GroupsIcon />,
    },
    {
      text: t('menu.stock'),
      title: t('menu.stock'),
      path: '/app/stockdash',
      icon: <Inventory2OutlinedIcon />,
    },
    {
      text: t('menu.settings'),
      title: t('menu.settings'),
      path: '/app/settings',
      icon: <SettingsIcon />,
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/');
  };

  return (
    <>
      {/* --------- ESTILO DESKTOP ------ */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: collapsed ? 80 : 200,
          height: '100vh',
          position: 'fixed',
          zIndex: 1201,
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: 'width 0.3s ease',
        }}
      >
        {/*  BOTÃO DA SIDEBAR  */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-end',
            px: 1,
            minHeight: 64,
          }}
        >
          <IconButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        {/* LISTA DE BOTÕES */}
        <List sx={{ mt: 1 }}>
          {menuItems.map((item) => (
            <ListItem
              sx={{ display: 'block', paddingLeft: '7px' }}
              key={item.text}
              disablePadding
            >
              <Tooltip enterDelay={1500} title={item.title}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: collapsed ? 'center' : 'initial',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: 'center',
                      mr: collapsed ? 'auto' : 3,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: collapsed ? 0 : 1,
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                    }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>

        {/* LOGOUT */}
        <Box sx={{ mt: 'auto', mb: 2 }}>
          <ListItem
            disablePadding
            sx={{ display: 'block', paddingLeft: '7px' }}
          >
            <Tooltip enterDelay={1500} title={t('menu.logout')}>
              <ListItemButton
                onClick={handleLogout}
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: collapsed ? 'center' : 'flex-start',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center',
                    mr: collapsed ? 'auto' : 3,
                  }}
                >
                  <LogoutIcon />
                </ListItemIcon>

                <ListItemText
                  primary={t('menu.logout')}
                  sx={{
                    opacity: collapsed ? 0 : 1,
                    transition: 'opacity 0.2s ease',
                  }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        </Box>
      </Box>

      {/* --------- ESTILO MOBILE ------ */}
      <MuiSwipeableDrawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpen={() => setMobileOpen(true)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{
            width: 210,
            bgcolor: 'background.paper',
            height: '100%',
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>

                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <ListItemButton
            onClick={handleLogout}
            sx={{ position: 'absolute', bottom: '0' }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={t('menu.logout')} />
          </ListItemButton>
        </Box>
      </MuiSwipeableDrawer>
    </>
  );
}
