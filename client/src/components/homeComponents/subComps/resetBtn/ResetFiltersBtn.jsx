/* eslint-disable react/prop-types */
import { BiReset } from "react-icons/bi";
import styles from "./btn.module.css";

const ResetFiltersBtn = ({ resetFn }) => {
  return (
    <button className={styles.btn} onClick={resetFn}>
      <BiReset /> Reset
    </button>
  );
};

export default ResetFiltersBtn;
