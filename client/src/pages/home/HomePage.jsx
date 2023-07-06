/* eslint-disable no-unused-vars */
import Styles from "./homePage.module.css";
import PokemonsContainer from "../../components/homeComponents/pokemonsContainer";

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <PokemonsContainer />
    </div>
  );
};

export default HomePage;
