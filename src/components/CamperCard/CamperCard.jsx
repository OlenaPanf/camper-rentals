import { useSelector } from 'react-redux';
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

export default function CamperCard({ id }) {
  const camper = useSelector(state =>
    state.campers.campers.find(camper => camper.id === id)
  );

  if (!camper) return <p>Loading...</p>;

  return (
    <div className={css.container}>
      <img
        src={camper.tumb}
        alt={camper.name}
        width="292"
        height="320"
        className={css.img}
      />
      <div className={css.card}>
        <div className={css.heading}>
          <h3 className={css.title}>{camper.name}</h3>
          <div className={css.price}>
            <h3 className={css.title}>€{camper.price}</h3>
            <BsSuitHeart className={css.iconHeart} />
          </div>
        </div>
        <div className={css.info}>
          <ul className={css.listInfo}>
            <li className={css.itemInfo}>
              <BsFillStarFill className={css.iconInfo} />
              <p className={css.textInfo}>
                {camper.rating} ({camper.reviews} Reviews)
              </p>
            </li>
            <li className={css.itemInfo}>
              <BsMap className={css.iconInfo} />
              <p className={css.textInfo}>{camper.location}</p>
            </li>
          </ul>
        </div>
        <p className={css.text}>{camper.description}</p>
        <div className={css.options}>
          <ul className={css.listOptions}>
            <li className={css.itemOptions}>
              <BsDiagram3 className={css.iconOptions} />
              {/* <p className={css.textOptions}>Automatic</p> */}
              <p className={css.textOptions}>{camper.transmission}</p>
            </li>
            <li className={css.itemOptions}>
              <BsFuelPump className={css.iconOptions} />
              {/* <p className={css.textOptions}>Petrol</p> */}
              <p className={css.textOptions}>{camper.fuel}</p>
            </li>
            <li className={css.itemOptions}>
              <BsCupHot className={css.iconOptions} />
              {/* <p className={css.textOptions}>Kitchen</p> */}
              <p className={css.textOptions}>{camper.kitchen ? 'Yes' : 'No'}</p>
            </li>
            <li className={css.itemOptions}>
              <BsWind className={css.iconOptions} />
              {/* <p className={css.textOptions}>AC</p> */}
              <p className={css.textOptions}>{camper.ac ? 'Yes' : 'No'}</p>
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
