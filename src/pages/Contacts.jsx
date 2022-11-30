import ContactForm from '../components/phoneBook/ContactForm/ContactForm ';
import { ContactsList } from '../components/phoneBook/ContactsList/ContactsList';
import { Filter } from '../components/phoneBook/Filter/Filter';

const ContactsPage=()=> {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
}
export default ContactsPage;
