import {
  BsSuitHeart,
  BsStar,
  BsMap,
  BsDiagram3,
  BsFuelPump,
  BsCupHot,
  BsWind,
} from 'react-icons/bs';

export default function CamperCard() {
  return (
    <div>
      <img src="" alt="" width="292" height="320" />
      <div>
        <div>
          <h3>Mavericks</h3>
          <h3>€8000</h3>
          <BsSuitHeart />
        </div>
        <div>
          <ul>
            <li>
              <BsStar />
              <p>4.4(2 Reviews)</p>
            </li>
            <li>
              <BsMap />
              <p>Kyiv, Ukraine</p>
            </li>
          </ul>
        </div>
        <p>Embrace simplicity and freedom with the Mavericks panel truck...</p>
        <div>
          <ul>
            <li>
              <BsDiagram3 />
              <p>Automatic</p>
            </li>
            <li>
              <BsFuelPump />
              <p>Petrol</p>
            </li>
            <li>
              <BsCupHot />
              <p>Kitchen</p>
            </li>
            <li>
              <BsWind />
              <p>AC</p>
            </li>
          </ul>
        </div>
        <button aria-label="Submit" type="button">
          Show more
        </button>
      </div>
    </div>
  );
}
