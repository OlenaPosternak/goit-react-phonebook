import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
        Phonebook welcome page{' '}
        <Typography
          component="span"
          variant="body"
          role="img"
          aria-label="Greeting icon"
        >
          💁‍♀️
        </Typography>
      </Typography>
    </Container>
  );
};

export default HomePage;
