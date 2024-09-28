import { useSelector } from 'react-redux';
import CamperCard from '../CamperCard/CamperCard';
import {
  selectCampers,
  selectLoading,
  selectError,
} from '../../redux/campers/campersSlice';
import css from './CamperList.module.css';

export default function CamperList() {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <p>Loading campers...</p>;
  }

  if (error) {
    return <p>Error loading campers: {error}</p>;
  }

  if (!campers || campers.length === 0) {
    return <p>No campers found</p>;
  }

  return (
    <ul className={css.container}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
