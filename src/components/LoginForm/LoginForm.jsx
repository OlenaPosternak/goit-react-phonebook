import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { Button, TextField, Box } from '@mui/material';
import { Form } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField label="email" variant="outlined" type="email" name="email" />

      <TextField
        label="password"
        variant="outlined"
        type="password"
        name="password"
      />

      <Button
        sx={{ mt: '10px' }}
        color="primary"
        variant="contained"
        type="submit"
      >
        Login{' '}
      </Button>
    </Form>
    </Box>
  );
};
