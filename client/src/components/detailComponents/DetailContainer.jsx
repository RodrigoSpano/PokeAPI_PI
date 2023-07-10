/* eslint-disable react/prop-types */
import styles from "./detail.module.css";
import ImageCont from "./subComps/ImageCont";
import InfoContainer from "./subComps/InfoContainer";

const DetailContainer = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <ImageCont
        image={pokemon.image}
        types={pokemon.types}
        name={pokemon.name}
      />
      <InfoContainer info={pokemon} />
    </div>
  );
};

export default DetailContainer;
