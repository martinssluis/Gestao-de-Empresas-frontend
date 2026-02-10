import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useColorMode } from '../../context/ColorModeContext.jsx';

export default function Login() {
  const navigate = useNavigate();
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Box
      className={styles.estiloLogin}
      sx={{ bgcolor: 'background.default', color: 'text.primary' }}
    >
      <section>
        <Box
          component="main"
          className={styles.loginContainer}
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <IconButton
            className={styles.themeToggle}
            color="inherit"
            aria-label={mode === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            onClick={toggleColorMode}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.default',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            {mode === 'dark' ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          <h1>Login</h1>
          <Box
            component="form"
            className={styles.form}
            sx={{
              '& input': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                border: '1px solid',
                borderColor: 'divider',
              },
              '& input::placeholder': {
                color: 'text.secondary',
                opacity: 1,
              },
              '& input:focus': {
                borderColor: 'primary.main',
                outline: 'none',
                boxShadow: (theme) =>
                  `0 0 0 2px ${theme.palette.primary.main}33`,
              },
            }}
          >
            <input
              className={styles.inputs}
              type="text"
              placeholder="Usuário"
            />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Senha"
            />
            <Button
              className={styles.buttons}
              type="button"
              variant="contained"
              onClick={() => navigate('/app/dashboard')}
              sx={{ textTransform: 'none' }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </section>
    </Box>
  );
}
