import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <PageTitle>Home</PageTitle>

      <div className={css.container}>
        <h1 className={css.title}>One place for all your contacts!</h1>
        <p>
          Welcome to Phone Book, a simple and efficient contact management app!
          Whether you're keeping track of family, friends, or work contacts,
          Phone Book helps you store, search, and manage phone numbers easily.
        </p>
        <p>Key Features:</p>
        <ul>
          <li>Add Contacts.</li>
          <li>Save names and phone numbers effortlessly.</li>
          <li>Search Contacts.</li>
          <li>Quickly find contacts using the search feature.</li>
          <li>Delete Contacts.</li>
          <li>Remove outdated contacts with one click.</li>
          <li>User-Friendly Interface.</li>
          <li>Simple and intuitive design for all users. </li>
          <li>Fast & Secure.</li>
          <li>Your contact data is stored safely.</li>
        </ul>
        <p>Get Started:</p>
        <ol>
          <li>Add a new contact by entering the name and phone number.</li>
          <li>Use the search bar to find saved contacts instantly.</li>
          <li>Click the delete button to remove unwanted contacts.</li>
        </ol>
        <p>📲 Start managing your contacts with ease today!</p>
        <img
          className={css.image}
          src="/yellow-phone-book-black-on-260nw-148371572.jpg"
        />
      </div>
    </div>
  );
}
