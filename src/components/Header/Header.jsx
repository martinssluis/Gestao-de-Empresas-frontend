import SwipeableDrawer from '../SideBar/SwipeableDrawer.jsx';
import logoLight from '/logoLight.png';
import logoDark from '/logoDark.png';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';

const pages = [''];
const settings = ['Meu perfil', 'Minha conta', 'Sair'];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const currentLogo = isDark ? logoDark : logoLight;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton size="large" onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ color: isDark ? '#ffffff' : '#6b7280' }} />
          </IconButton>

          <Box
            component="img"
            src={currentLogo}
            alt="Logo NexOrder"
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: 40,
              mr: 1,
            }}
          />
          <Box
            component="img"
            src={currentLogo}
            alt="Logo"
            sx={{
              display: { xs: 'flex', md: 'none' },
              height: 35,
              mr: 1,
            }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, ml: 'auto' }}>
            <Tooltip title="Abrir configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Mohamed Lee" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        <SwipeableDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
