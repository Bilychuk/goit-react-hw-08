import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export default function App() {
  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
  const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
  const RegisterPage = lazy(() =>
    import('../../pages/RegisterPage/RegisterPage')
  );
  const ContactsPage = lazy(() =>
    import('../../pages/ContactsPage/ContactsPage')
  );

  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user please wait...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/users/signup"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo={'/'} />
            }
          />
          <Route
            path="/users/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo={'/contacts'}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={<ContactsPage />}
                redirectTo={'/users/login'}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
