import {
  BsSuitHeart,
  BsFillStarFill,
  BsMap,
  BsDiagram3,
  BsFuelPump,
  BsCupHot,
  BsWind,
} from 'react-icons/bs';
import css from './CamperCard.module.css';

export default function CamperCard() {
  return (
    <div className={css.container}>
      <img src="" alt="" width="292" height="320" className={css.img} />
      <div className={css.card}>
        <div className={css.heading}>
          <h3 className={css.title}>Mavericks</h3>
          <div className={css.price}>
            <h3 className={css.title}>€8000</h3>
            <BsSuitHeart className={css.iconHeart} />
          </div>
        </div>
        <div className={css.info}>
          <ul className={css.listInfo}>
            <li className={css.itemInfo}>
              <BsFillStarFill className={css.iconInfo} />
              <p className={css.textInfo}>4.4(2 Reviews)</p>
            </li>
            <li className={css.itemInfo}>
              <BsMap className={css.iconInfo} />
              <p className={css.textInfo}>Kyiv, Ukraine</p>
            </li>
          </ul>
        </div>
        <p className={css.text}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        <div className={css.options}>
          <ul className={css.listOptions}>
            <li className={css.itemOptions}>
              <BsDiagram3 className={css.iconOptions} />
              <p className={css.textOptions}>Automatic</p>
            </li>
            <li className={css.itemOptions}>
              <BsFuelPump className={css.iconOptions} />
              <p className={css.textOptions}>Petrol</p>
            </li>
            <li className={css.itemOptions}>
              <BsCupHot className={css.iconOptions} />
              <p className={css.textOptions}>Kitchen</p>
            </li>
            <li className={css.itemOptions}>
              <BsWind className={css.iconOptions} />
              <p className={css.textOptions}>AC</p>
            </li>
          </ul>
        </div>
        <button aria-label="Submit" type="button" className={css.button}>
          Show more
        </button>
      </div>
    </div>
  );
}
