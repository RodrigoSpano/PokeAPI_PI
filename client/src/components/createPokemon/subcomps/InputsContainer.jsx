import RangeCont from "./RangeCont";
import styles from "./subcomps.module.css";

/* eslint-disable react/prop-types */
const InputsContainer = ({ handleChange, pokemon }) => {
  return (
    <div className={styles.inputsContainer}>
      <div className={styles.nameInput}>
        <label>name</label>
        <input name="name" onChange={handleChange} value={pokemon.name} />
      </div>
      <RangeCont pokemon={pokemon} handleChange={handleChange} />
    </div>
  );
};

export default InputsContainer;
