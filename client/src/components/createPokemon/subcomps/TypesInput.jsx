import { useSelector } from "react-redux";
import styles from "./subcomps.module.css";

/* eslint-disable react/prop-types */
const TypesInput = ({ handleTypes }) => {
  const types = useSelector((state) => state.types);

  return (
    <div className={styles.containerSelect}>
      <h5>types</h5>
      {types.length ? (
        <select className={styles.radioDiv} onChange={handleTypes}>
          {types?.map((type) => (
            <option value={type.id} key={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

export default TypesInput;
