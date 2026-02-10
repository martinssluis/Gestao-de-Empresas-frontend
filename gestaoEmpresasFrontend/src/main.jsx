import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Stock from './pages/Stock/Stock.jsx';
import Financial from './pages/Financial/Financial.jsx';
import Collaborators from './pages/Collaborators/Collaborators.jsx';
import {
  ColorModeContext,
  useColorModeState,
} from './context/ColorModeContext.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
    {
    index: true,
    element: <Navigate to={"dashboard"}/>
    },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "stock",
    element: <Stock /> 
  },
  { 
    path: "collaborators",
    element: <Collaborators />
  },
  { 
    path: "financial",
    element: <Financial /> 
  }]
  } 
]);

function Root() {
  const { mode, toggleColorMode } = useColorModeState();
  const theme = React.useMemo(
    () => createTheme({ palette: { mode } }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
