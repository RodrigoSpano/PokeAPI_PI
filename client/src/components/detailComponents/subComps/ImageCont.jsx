/* eslint-disable react/prop-types */
import styles from "./subcomps.module.css";

const ImageCont = ({ image, name, types }) => {
  const findType = types.find((el) => el.name === "fire");
  let bgImgDefiner = findType ? styles.bgImg1 : styles.bgImg2;
  return (
    <div className={`${styles.imageContainer} ${bgImgDefiner}`}>
      <img src={image} alt={name} />
    </div>
  );
};

export default ImageCont;
