import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { selectError } from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
}
