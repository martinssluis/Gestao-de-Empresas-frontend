import * as React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/SideBar/SwipeableDrawer.jsx';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function AppLayout() {
  const [collapsed, setCollapsed] = React.useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      {/* SIDEBAR DESKTOP */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <Box sx={{ flexGrow: 1 }}>
        {/* HEADER */}
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* CONTEÚDO */}
        <Box
          sx={{
            ml: { xs: 0, md: collapsed ? '80px' : '240px' },
            transition: 'margin 0.3s ease',
            p: 2,
            paddingTop: '55px',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
