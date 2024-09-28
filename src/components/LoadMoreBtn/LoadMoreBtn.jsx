import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/camperSlice'; // Імпортуємо екшен для завантаження кемперів
import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.campers.currentPage); // Отримуємо поточну сторінку

  const handleClick = () => {
    dispatch(fetchCampers(currentPage + 1)); // Завантажуємо наступну сторінку
  };

  return (
    <button onClick={handleClick} className={css.button}>
      Load More
    </button>
  );
}
