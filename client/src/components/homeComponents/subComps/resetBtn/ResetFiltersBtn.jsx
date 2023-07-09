import { BiReset } from "react-icons/bi";
import useSelectFilters from "../../../../utils/customHooks/useSelectFilters";
import styles from "./btn.module.css";

const ResetFiltersBtn = () => {
  const { handleResetFilters } = useSelectFilters();
  return (
    <button className={styles.btn} onClick={handleResetFilters}>
      <BiReset /> Reset
    </button>
  );
};

export default ResetFiltersBtn;
