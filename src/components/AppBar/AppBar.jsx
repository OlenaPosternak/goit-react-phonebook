import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';

import { Header } from './AppBar.styled';

export const AppBarHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header sx={{ maxWidth: 1600 }} position="static">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
