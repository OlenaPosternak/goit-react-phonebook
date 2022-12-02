import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

import { Header } from './AppBar.styled';
// import { Switch } from '@mui/material';

export const AppBarHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const handleChange = event => {
  //     setDarkMode(event.target.checked);
  //     console.log(darkMode);
  //   };

  return (
    <Header position="static">
      <Navigation />
      {/* <Switch cheked={darkMode} onChange={handleChange} /> */}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
