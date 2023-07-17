/* eslint-disable react/prop-types */
import InfoCard from "./InfoCard";
import InfoHeader from "./InfoHeader";
import styles from "./subcomps.module.css";

const InfoContainer = ({ info, setPokemon }) => {
  return (
    <div className={styles.infoContainer}>
      <InfoHeader pokemon={info} setPokemon={setPokemon} />
      <InfoCard pokemon={info} />
    </div>
  );
};

export default InfoContainer;
