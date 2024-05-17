import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <PageTitle>Home</PageTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          One place for all your contacts!
          <span role="img" aria-label="Greeting icon">
            ☎️
          </span>
        </h1>
      </div>
    </>
  );
}
