import { useSelector } from 'react-redux';
import ContactList from 'components/contactList';
import toast, { Toaster } from 'react-hot-toast';

function ContactsView() {
  const auth = useSelector(state => state.auth.isLoaded);
  const error = useSelector(state => state.auth.error);

  return (
    <>
      {error && toast(`${error}`)}
      {auth && <ContactList />}
      <Toaster />
    </>
  );
}

export default ContactsView;
