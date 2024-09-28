import { useParams } from 'react-router-dom';
import Details from '../../components/Details/Details';

export default function CamperPage() {
  const { id } = useParams(); // Отримуємо ID з URL

  return (
    <div>
      <Details camperId={id} />
    </div>
  );
}
