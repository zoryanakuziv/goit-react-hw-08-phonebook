import Navbar from './navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/authOperations';
import BottomBar from './rightBar/rightBar';

const AddContactView = lazy(() => import('views/AddContactView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LogInView'));
const HomeView = lazy(() => import('views/HomeView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const isrefreshing = useSelector(state => state.auth.isRefresh);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="add" element={<AddContactView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />

          <Route path="*" element={<HomeView />} />
        </Routes>
      </Suspense>
      <BottomBar />
    </>
  );
};
