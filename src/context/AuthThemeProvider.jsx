import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const STORAGE_KEY = 'authThemeMode';

const AuthThemeContext = React.createContext(null);

function getInitialMode() {
  const savedMode = window.localStorage.getItem(STORAGE_KEY);
  return savedMode === 'dark' ? 'dark' : 'light';
}

export function AuthThemeProvider({ children }) {
  const [mode, setModeState] = React.useState(getInitialMode);

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = React.useCallback((nextMode) => {
    if (nextMode === 'light' || nextMode === 'dark') {
      setModeState(nextMode);
    }
  }, []);

  const theme = React.useMemo(
    () => createTheme({ palette: { mode } }),
    [mode]
  );

  const value = React.useMemo(
    () => ({ mode, setMode }),
    [mode, setMode]
  );

  return (
    <AuthThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AuthThemeContext.Provider>
  );
}

export function useAuthTheme() {
  const context = React.useContext(AuthThemeContext);

  if (!context) {
    throw new Error('useAuthTheme precisa ser usado dentro de AuthThemeProvider');
  }

  return context;
}
