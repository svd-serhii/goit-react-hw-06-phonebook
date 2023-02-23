import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filter/filter-slice';

const Filter = () => {
  const filterRdx = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={styles.labelFilter}>
      Find contacts by name
      <input
        className={styles.inputFilter}
        type="text"
        value={filterRdx}
        onChange={({ currentTarget }) =>
          dispatch(setFilter(currentTarget.value))
        }
        placeholder="Enter name here"
      />
    </label>
  );
};

export default Filter;
