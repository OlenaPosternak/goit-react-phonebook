import { Outlet } from 'react-router-dom';
import { AppBarHeader } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';
import { Paper } from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ParticlesBack from './Particles.jsx';

export const Layout = () => {
  return (
    <>
      <Paper sx={{ minHeight: '100vh', backgroundColor: '#336699'}}>
        <AppBarHeader/>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          theme="light"
        />
      </Paper>
      <ParticlesBack />
    </>
  );
};
