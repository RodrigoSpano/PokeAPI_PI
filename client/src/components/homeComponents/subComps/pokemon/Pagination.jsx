/* eslint-disable react/prop-types */
import styles from "./pokemon.module.css";

const Pagination = ({ prevFn, nextFn, pages }) => {
  return (
    <div className={styles.paginationCont}>
      <button id={styles.prev} onClick={prevFn}>
        arrow
      </button>
      <span>{pages}</span>
      <button id={styles.next} onClick={nextFn}>
        next
      </button>
    </div>
  );
};

export default Pagination;
