import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function HomeView() {
  const auth = useSelector(state => state.auth.isLoaded);
  const error = useSelector(state => state.auth.error);

  return (
    <>
      {error && toast(`${error}`)}
      {!auth && (
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
