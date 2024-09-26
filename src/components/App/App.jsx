import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/campers/slice';
import { useParams } from 'react-router-dom';

//import { useState } from 'react'
// import Main from '../Main/Main';
import CamperCard from '../CamperCard/CamperCard';
// import CamperList from '../CamperList/CamperList';
// import SearchBox from '../SearchBox/SearchBox';
// import Features from '../Features/Features';
// import ContactForm from '../ContactForm/ContactForm';
// import Catalog from '../Catalog/Catalog';

import './App.css';

export default function App() {
  const { id } = useParams(); // Отримуємо id з URL
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <div>
        {/* <Main /> */}
        <CamperCard id={id} />
        {/* <Catalog /> */}
        {/* <CamperList /> */}
        {/* <SearchBox /> */}
        {/* <Features /> */}
        {/* <ContactForm /> */}
      </div>
    </>
  );
}
