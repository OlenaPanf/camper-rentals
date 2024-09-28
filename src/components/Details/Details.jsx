// import { useState } from 'react';
// import Features from '../Features/Features';
// import Reviews from '../Reviews/Reviews';
// import ContactForm from '../ContactForm/ContactForm';

// export default function Details({ camperId }) {
//   const [showFeatures, setShowFeatures] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowFeatures(true)}>Features</button>
//       <button onClick={() => setShowFeatures(false)}>Reviews</button>

//       {showFeatures ? (
//         <Features id={camperId} />
//       ) : (
//         <Reviews camperId={camperId} />
//       )}
//       <ContactForm />
//     </div>
//   );
// }

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCamperById,
  selectCamper,
  selectLoading,
  selectError,
} from '../../redux/campers/camperSlice';
import CamperCard from '../CamperCard/CamperCard';
import { useParams } from 'react-router-dom';

export default function Details() {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { id } = useParams(); // Отримуємо ID з параметрів маршруту

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return <p>No camper found</p>;

  return (
    <div>
      <CamperCard card={camper} />
    </div>
  );
}
