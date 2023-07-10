/* eslint-disable react/prop-types */
import TypeSpan from "../../homeComponents/subComps/pokemon/TypeSpan";
import styles from "./subcomps.module.css";

const InfoHeader = ({ pokemon }) => {
  return (
    <div className={styles.headerInfo}>
      <h4>{pokemon.name}</h4>
      <div className={styles.otherInfo}>
        <div>
          <span>weight:</span>
          <p>{pokemon.weight} kg</p>
        </div>
        <div>
          <span>height:</span>
          <p>{pokemon.height}</p>
        </div>
      </div>
      <div className={styles.spanDiv}>
        {pokemon.types?.map((el) => (
          <TypeSpan key={el.name} type={el} />
        ))}
      </div>
    </div>
  );
};

export default InfoHeader;
