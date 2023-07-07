/* eslint-disable no-unused-vars */
import Styles from "./homePage.module.css";
import PokemonsContainer from "../../components/homeComponents/pokemonsContainer";
import SelectFilters from "../../components/homeComponents/subComps/filters/SelectFilters";

const HomePage = () => {
  return (
    <div className={Styles.container}>
      <SelectFilters />
      <PokemonsContainer />
    </div>
  );
};

export default HomePage;
