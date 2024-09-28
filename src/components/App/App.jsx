import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/campersSlice';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Main from '../Main/Main';
// import CamperCard from '../CamperCard/CamperCard';
// import CamperList from '../CamperList/CamperList';
// import Details from '../Details/Details';
// import SearchBox from '../SearchBox/SearchBox';
// import Features from '../Features/Features';
// import ContactForm from '../ContactForm/ContactForm';
import Catalog from '../Catalog/Catalog';

import './App.css';

export default function App() {
  const dispatch = useDispatch();

  // Отримуємо список кемперів при завантаженні компонента
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <div>
        {/* <Router>
          <Routes>
            <Route path="/" element={<CamperList cards={campers} />} />
            <Route path="/camper/:id" element={<Details />} />
          </Routes>
        </Router> */}

        {/* <Main /> */}
        {/* <CamperCard /> */}
        <Catalog />
        {/* <CamperList /> */}
        {/* <SearchBox /> */}
        {/* <Features /> */}
        {/* <ContactForm /> */}
      </div>
      {/* 1.p */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/campers/:id" element={<CamperDetail />} />
        </Routes>
      </Router> */}
      {/* 2.c */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/campers/:id" element={<CamperPage />} />
        </Routes>
      </Router> */}
    </>
  );
}
