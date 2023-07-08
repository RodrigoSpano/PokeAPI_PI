import styles from "./navbar.module.css";
import Searchbar from "./subComps/Searchbar";

const NavbarContainer = () => {
  return (
    <div className={styles.navbarContainer}>
      <Searchbar />
    </div>
  );
};

export default NavbarContainer;
