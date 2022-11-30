import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar.jsx';
// import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div >
      <AppBar />
      <Outlet />
      {/* <Suspense fallback={null}> */}
      
      {/* </Suspense> */}
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
