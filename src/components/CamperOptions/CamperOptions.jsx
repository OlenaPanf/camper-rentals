import {
  BsDiagram3,
  BsFuelPump,
  BsWind,
  BsDroplet,
  BsCupHot,
  BsDisplay,
  BsUiRadios,
  BsWater,
} from 'react-icons/bs';

import { BiSolidFridge } from 'react-icons/bi';
import { TbMicrowave } from 'react-icons/tb';
import { PiGasCan } from 'react-icons/pi';
import css from './CamperOptions.module.css';

const optionsMap = {
  transmission: { icon: <BsDiagram3 /> },
  engine: { icon: <BsFuelPump /> },
  AC: { icon: <BsWind />, label: 'AC' },
  kitchen: { icon: <BsCupHot />, label: 'Kitchen' },
  bathroom: { icon: <BsDroplet />, label: 'Bathroom' },
  TV: { icon: <BsDisplay />, label: 'TV' },
  radio: { icon: <BsUiRadios />, label: 'Radio' },
  refrigerator: { icon: <BiSolidFridge />, label: 'Refrigerator' },
  microwave: { icon: <TbMicrowave />, label: 'Microwave' },
  gas: { icon: <PiGasCan />, label: 'Gas' },
  water: { icon: <BsWater />, label: 'Water' },
};

export default function CamperOptions({ options }) {
  return (
    <div className={css.options}>
      <ul className={css.listOptions}>
        {Object.keys(optionsMap).map(optionKey => {
          // Спеціальний рендер для transmission та engine
          if (optionKey === 'transmission' || optionKey === 'engine') {
            if (options[optionKey] !== undefined) {
              const { icon } = optionsMap[optionKey];
              return (
                <li key={optionKey} className={css.itemOptions}>
                  {icon}
                  <p className={css.textOptions}>{options[optionKey]}</p>{' '}
                </li>
              );
            }
          }

          // Для інших властивостей (true/false), рендеримо тільки якщо true
          if (options[optionKey] === true) {
            const { icon, label } = optionsMap[optionKey];
            return (
              <li key={optionKey} className={css.itemOptions}>
                {icon}
                <p className={css.textOptions}>{label}</p>{' '}
              </li>
            );
          }

          return null; // Якщо false, не рендеримо
        })}
      </ul>
    </div>
  );
}
