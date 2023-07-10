import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import Searchbar from "./subComps/Searchbar";
import BackBtn from "./subComps/BackBtn";

const NavbarContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbarContainer}>
      <BackBtn />
      <img onClick={() => navigate("/home")} src="/assets/pokemon_logo.png" />
      <Searchbar />
    </div>
  );
};

export default NavbarContainer;
