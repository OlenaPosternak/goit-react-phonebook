import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarHeader } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
