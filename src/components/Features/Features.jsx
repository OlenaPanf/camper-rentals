import { useSelector } from 'react-redux';
import {
  BsDiagram3,
  BsWind,
  BsFuelPump,
  BsCupHot,
  BsUiRadios,
} from 'react-icons/bs';

export default function Features({ id }) {
  const camper = useSelector(state =>
    state.campers.campers.find(camper => camper.id === id)
  );
  // const {
  //   location,
  //   ac,

  //   kitchen,
  //   tv,
  //   bathroom,
  //   form,
  //   engine,
  //   transmission,

  //   fuel,
  // } = camper; // Деструктуризація властивостей кемпера

  if (!camper) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <ul>
          <li>
            <BsDiagram3 />
            <p>{camper.form}</p>
          </li>
          <li>
            <BsWind />
            <p>{camper.ac ? 'Yes' : 'No'}</p>
          </li>
          <li>
            <BsFuelPump />
            <p>{camper.fuel}</p>
          </li>
          <li>
            <BsCupHot />
            <p>{camper.kitchen ? 'Yes' : 'No'}</p>
          </li>
          <li>
            <BsUiRadios />
            <p>{camper.radio ? 'Yes' : 'No'}</p>
          </li>
        </ul>
      </div>
      <div>
        <h4>Vehicle details</h4>
        <div>
          <div>
            <p>Form</p>
            <p>{camper.form}</p>
          </div>

          <div>
            <p>Length</p>
            <p>{camper.length} m</p>
          </div>

          <div>
            <p>Width</p>
            <p>{camper.width} m</p>
          </div>

          <div>
            <p>Height</p>
            <p>{camper.height} m</p>
          </div>

          <div>
            <p>Tank</p>
            <p>{camper.tank} L</p>
          </div>
          <div>
            <p>Consumption</p>
            <p>{camper.consumption} l/100km</p>
          </div>
        </div>
      </div>
    </div>
  );
}
