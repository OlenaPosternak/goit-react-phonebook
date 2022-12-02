import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarHeader } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';
import { Paper } from '@mui/material';

export const Layout = () => {
  return (
    <Paper sx={{ height: '100vh' }}>
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Paper>
  );
};
