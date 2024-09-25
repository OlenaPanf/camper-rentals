import {
  BsDiagram3,
  BsWind,
  BsFuelPump,
  BsCupHot,
  BsUiRadios,
} from 'react-icons/bs';

export default function Features() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <BsDiagram3 />
            <p>Automatic</p>
          </li>
          <li>
            <BsWind />
            <p>AC</p>
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
            <BsUiRadios />
            <p>Radio</p>
          </li>
        </ul>
      </div>
      <div>
        <h4>Vehicle details</h4>
        <div>
          <div>
            <p>Form</p>
            <p>Panel truck</p>
          </div>

          <div>
            <p>Length</p>
            <p>5.4 m</p>
          </div>

          <div>
            <p>Width</p>
            <p>2.01 m</p>
          </div>

          <div>
            <p>Height</p>
            <p>2.05 m</p>
          </div>

          <div>
            <p>Tank</p>
            <p>132 I</p>
          </div>
          <div>
            <p>Consumption</p>
            <p>12.4l/100km</p>
          </div>
        </div>
      </div>
    </div>
  );
}
