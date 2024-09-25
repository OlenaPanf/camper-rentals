import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';

export default function CamperList({ cards }) {
  return (
    <ul className={css.container}>
      {cards.map(card => (
        <li key={card.id}>
          <CamperCard card={card} />
        </li>
      ))}
    </ul>
  );
}
