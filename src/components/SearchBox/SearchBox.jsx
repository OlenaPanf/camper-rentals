import {
  BsMap,
  BsWind,
  BsDiagram3,
  BsCupHot,
  BsDroplet,
  BsGrid1X2,
  BsGrid,
  BsGrid3X3Gap,
} from 'react-icons/bs';
import { HiOutlineTv } from 'react-icons/hi2';

export default function SearchBox() {
  return (
    <div>
      <div>
        <p>Location</p>
        <div>
          <BsMap />
          <p>Kyiv, Ukraine</p>
        </div>
      </div>
      <p>Filters</p>
      <div>
        <h4>Vehicle equipment</h4>
        <div>
          <ul>
            <li>
              <BsWind />
              <p>AC</p>
            </li>
            <li>
              <BsDiagram3 />
              <p>Automatic</p>
            </li>
            <li>
              <BsCupHot />
              <p>Kitchen</p>
            </li>
            <li>
              <HiOutlineTv />
              <p>TV</p>
            </li>
            <li>
              <BsDroplet />
              <p>Bathroom</p>
            </li>
          </ul>
        </div>
        <div>
          <h4>Vehicle type</h4>
          <div>
            <ul>
              <li>
                <BsGrid1X2 />
                <p>Van</p>
              </li>
              <li>
                <BsGrid />
                <p>Fully Integrated</p>
              </li>
              <li>
                <BsGrid3X3Gap />
                <p>Alcove</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button aria-label="Submit" type="button">
        Search
      </button>
    </div>
  );
}
