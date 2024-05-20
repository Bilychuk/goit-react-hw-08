import PageTitle from '../../components/PageTitle/PageTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <PageTitle>Home</PageTitle>

      <div className={css.container}>
        <h1 className={css.title}>One place for all your contacts!</h1>
        <img
          className={css.image}
          src="../../../public/yellow-phone-book-black-on-260nw-148371572.jpg"
        />
      </div>
    </div>
  );
}
