import styles from "./navbar.module.css";
import Searchbar from "./subComps/Searchbar";

const NavbarContainer = () => {
  return (
    <div className={styles.navbarContainer}>
      <img src="/assets/pokemon_logo.png" />
      <Searchbar />
    </div>
  );
};

export default NavbarContainer;
