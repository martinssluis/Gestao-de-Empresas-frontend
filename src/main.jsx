import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthLanguageProvider } from './context/AuthLanguageProvider.jsx';
import { AuthThemeProvider } from './context/AuthThemeProvider.jsx';
import AppLayout from './layouts/AppLayout.jsx';
import PublicLayout from './layouts/PublicLayout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Stock from './pages/Stock/Stock.jsx';
import Financial from './pages/Financial/Financial.jsx';
import Collaborators from './pages/Collaborators/Collaborators.jsx';
import Settings from './pages/Settings/Settings.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/app',
    element: (
      <AuthLanguageProvider>
        <AuthThemeProvider>
          <AppLayout />
        </AuthThemeProvider>
      </AuthLanguageProvider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'stock',
        element: <Stock />,
      },
      {
        path: 'collaborators',
        element: <Collaborators />,
      },
      {
        path: 'financial',
        element: <Financial />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
