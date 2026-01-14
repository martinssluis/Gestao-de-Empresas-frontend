import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
