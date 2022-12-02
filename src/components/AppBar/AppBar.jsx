import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

import { Header } from './AppBar.styled';
import { Switch } from '@mui/material';
// import theme from 'components/theme';
// import { useEffect } from 'react';

export const AppBarHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = event => {
    setDarkMode(event.target.checked);
    console.log(darkMode)
  };

//   useEffect(() => {
//     if (darkMode) {
//       theme.palette.mode = 'dark';
//     }
//   }, [darkMode]);

  return (
    <Header position="static">
      <Navigation />
      <Switch cheked={darkMode} onChange={handleChange} />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
