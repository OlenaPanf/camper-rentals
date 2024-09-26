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
import css from './SearchBox.module.css';

export default function SearchBox() {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <p className={css.text}>Location</p>
        <div className={css.location}>
          <BsMap className={css.locationIcon} />
          <p className={css.locationText}>Kyiv, Ukraine</p>
        </div>
      </div>
      <p className={css.textFilter}>Filters</p>
      <div className={css.equipmentBox}>
        <h3 className={css.title}>Vehicle equipment</h3>
        <div className={css.equipment}>
          <ul className={css.equipmentList}>
            <li className={css.equipmentItem}>
              <BsWind className={css.iconBox} />
              <p className={css.textBox}>AC</p>
            </li>
            <li className={css.equipmentItem}>
              <BsDiagram3 className={css.iconBox} />
              <p className={css.textBox}>Automatic</p>
            </li>
            <li className={css.equipmentItem}>
              <BsCupHot className={css.iconBox} />
              <p className={css.textBox}>Kitchen</p>
            </li>
            <li className={css.equipmentItem}>
              <HiOutlineTv className={css.iconBox} />
              <p className={css.textBox}>TV</p>
            </li>
            <li className={css.equipmentItem}>
              <BsDroplet className={css.iconBox} />
              <p className={css.textBox}>Bathroom</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.typeBox}>
        <h3 className={css.title}>Vehicle type</h3>
        <div className={css.type}>
          <ul className={css.typeList}>
            <li className={css.typeItem}>
              <BsGrid1X2 className={css.iconBox} />
              <p className={css.textBox}>Van</p>
            </li>
            <li className={css.typeItem}>
              <BsGrid className={css.iconBox} />
              <p className={css.textBox}>Fully Integrated</p>
            </li>
            <li className={css.typeItem}>
              <BsGrid3X3Gap className={css.iconBox} />
              <p className={css.textBox}>Alcove</p>
            </li>
          </ul>
        </div>
      </div>
      <button aria-label="Submit" type="button" className={css.button}>
        Search
      </button>
    </div>
  );
}
