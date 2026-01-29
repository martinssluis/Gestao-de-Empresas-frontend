import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Stock from './pages/Stock/Stock.jsx';
import Financial from './pages/Financial/Financial.jsx';
import Collaborators from './pages/Collaborators/Collaborators.jsx';


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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
