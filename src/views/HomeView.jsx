// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContactList from 'components/contactList';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function HomeView() {
  const auth = useSelector(state => state.auth.isLoaded);
  const error = useSelector(state => state.auth.error);

  return (
    <>
      {error && toast(`${error}`)}
      {auth ? (
        <ContactList />
      ) : (
        <>
          <div>
            <h1 style={{ marginTop: '112px' }}>Wellcome to YourPHONEBOOK!</h1>
            <p>
              <Link to="login">LogIn</Link> to enter in YourPHONEBOOK.
            </p>
            <p>
              {' '}
              Or <Link to="register">Register </Link> and create YourPHONEBOOK
              right now !
            </p>
          </div>
        </>
      )}

      <Toaster />
    </>
  );
}

export default HomeView;
