/* eslint-disable react/prop-types */
import { pokeImg } from "../../../utils/helper/pokemonsImgObj";
import styles from "./subcomps.module.css";

const ImagesCont = ({ handleFn }) => {
  return (
    <div className={styles.imageContainer}>
      {pokeImg?.map((el) => (
        <img
          onClick={() => handleFn(el)}
          src={el}
          key={Math.random()}
          alt="pokemon"
        />
      ))}
    </div>
  );
};

export default ImagesCont;
