import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

export default function App() {
  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
  const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
  const RegisterPage = lazy(() =>
    import('../../pages/RegisterPage/RegisterPage')
  );
  const ContactsPage = lazy(() =>
    import('../../pages/ContactsPage/ContactsPage')
  );
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/signup" element={<RegisterPage />} />
          <Route path="/users/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
