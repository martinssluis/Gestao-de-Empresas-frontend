import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logoLight from '/logoLight.png';
import logoDark from '/logoDark.png';

export default function Header({ collapsed, setMobileOpen }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const currentLogo = isDark ? logoDark : logoLight;

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Toolbar>
        {/* BOTÃO HAMBÚRGUER */}
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* LOGO */}
        <Box
          component={Link}
          to="/app/dashboard"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Box
            component="img"
            src={currentLogo}
            sx={{
              height: 40,
              ml: 1,
              paddingLeft: {
                xs: '5px',
                md: collapsed ? '65px' : '190px',
              },
              transition: 'padding 0.3s ease',
              cursor: 'pointer',
            }}
          />
        </Box>

        {/* ESPAÇO CENTRAL */}
        <Box sx={{ flexGrow: 1 }} />

        {/* USUÁRIO */}
        <Tooltip title="Seu Perfil">
          <IconButton>
            <Avatar />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
