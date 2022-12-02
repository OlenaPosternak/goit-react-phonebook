import ContactForm from '../components/phoneBook/ContactForm/ContactForm ';
import { ContactsList } from '../components/phoneBook/ContactsList/ContactsList';
import { Filter } from '../components/phoneBook/Filter/Filter';
import { Container } from '@mui/material';

const ContactsPage=()=> {
  return (
    <Container sx={{mt:{ xs: '5px', sm: '20px' } }}>
      <ContactForm />
      <Filter />
      <ContactsList />
    </Container>
  );
}
export default ContactsPage;
