import css from './Main.module.css';

export default function Main() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <button aria-label="Submit" type="button" className={css.button}>
        View Now
      </button>
    </div>
  );
}
