import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import Searchbar from "./subComps/Searchbar";

const NavbarContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbarContainer}>
      <img onClick={() => navigate("/home")} src="/assets/pokemon_logo.png" />
      <Searchbar />
    </div>
  );
};

export default NavbarContainer;
