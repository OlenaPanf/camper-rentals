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

export default function CamperCard({ camper }) {
  const {
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    transmission,
    fuel,
    kitchen,
    ac,
  } = camper; // Деструктуризація властивостей кемпера

  // Отримуємо thumb з першого елемента gallery
  const thumb = gallery.length > 0 ? gallery[0].thumb : ''; // Перевірка, що gallery не порожня

  // Створюємо масив з об'єктів для кожного огляду
  // const reviewItems = reviews.map(review => ({
  //   reviewer_name: review.reviewer_name,
  //   reviewer_rating: review.reviewer_rating,
  //   comment: review.comment,
  // }));

  return (
    <div className={css.container}>
      <img
        src={thumb}
        alt={name}
        width="292"
        height="320"
        className={css.img}
      />
      <div className={css.card}>
        <div className={css.heading}>
          <h3 className={css.title}>{name}</h3>
          <div className={css.price}>
            <h3 className={css.title}>€{price}</h3>
            <BsSuitHeart className={css.iconHeart} />
          </div>
        </div>
        <div className={css.info}>
          <ul className={css.listInfo}>
            <li className={css.itemInfo}>
              <BsFillStarFill className={css.iconInfo} />
              <p className={css.textInfo}>
                {rating} ({reviews.length} Reviews)
              </p>
            </li>
            <li className={css.itemInfo}>
              <BsMap className={css.iconInfo} />
              <p className={css.textInfo}>{location}</p>
            </li>
          </ul>
        </div>
        <p className={css.text}>{description}</p>
        <div className={css.options}>
          <ul className={css.listOptions}>
            <li className={css.itemOptions}>
              <BsDiagram3 className={css.iconOptions} />
              {/* <p className={css.textOptions}>Automatic</p> */}
              <p className={css.textOptions}>{transmission}</p>
            </li>
            <li className={css.itemOptions}>
              <BsFuelPump className={css.iconOptions} />
              {/* <p className={css.textOptions}>Petrol</p> */}
              <p className={css.textOptions}>{fuel}</p>
            </li>
            <li className={css.itemOptions}>
              <BsCupHot className={css.iconOptions} />
              {/* <p className={css.textOptions}>Kitchen</p> */}
              <p className={css.textOptions}>{kitchen ? 'Yes' : 'No'}</p>
            </li>
            <li className={css.itemOptions}>
              <BsWind className={css.iconOptions} />
              {/* <p className={css.textOptions}>AC</p> */}
              <p className={css.textOptions}>{ac ? 'Yes' : 'No'}</p>
            </li>
          </ul>
        </div>
        <button aria-label="Submit" type="button" className={css.button}>
          Show more
        </button>
        {/* Додаємо посилання на деталі кемпера */}
        {/* <Link to={`/camper/${id}`} className={css.button}>
          Show more
        </Link> */}
      </div>
    </div>
  );
}
