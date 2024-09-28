// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import CamperList from '../CamperList/CamperList';
import SearchBox from '../SearchBox/SearchBox';
import css from './Catalog.module.css';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'; // Підключаємо LoadMoreBtn
// import { fetchCampers } from '../../redux/campers/camperSlice';

export default function Catalog() {
  // const dispatch = useDispatch();
  // const { campers, loading, error, hasMore } = useSelector(
  //   state => state.campers
  // ); // Додаємо hasMore для пагінації
  // const currentPage = useSelector(state => state.campers.currentPage);

  // // Викликаємо дію для завантаження кемперів при першому завантаженні компоненту
  // useEffect(() => {
  //   dispatch(fetchCampers(currentPage)); // Передаємо поточну сторінку
  // }, [dispatch, currentPage]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.container}>
      <SearchBox />
      <CamperList />
      {/* {hasMore && <LoadMoreBtn />} Відображаємо кнопку, якщо є ще дані */}
    </div>
  );
}
