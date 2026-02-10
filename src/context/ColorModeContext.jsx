import * as React from 'react';

export const ColorModeContext = React.createContext(null);

export function useColorMode() {
  return React.useContext(ColorModeContext);
}

export function useColorModeState() {
  const getInitialMode = React.useCallback(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }, []);

  const [mode, setMode] = React.useState(getInitialMode);

  React.useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleColorMode = React.useCallback(() => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { mode, toggleColorMode };
}
