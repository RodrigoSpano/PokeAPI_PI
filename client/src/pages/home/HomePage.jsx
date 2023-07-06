/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Styles from "./homePage.module.css";
import { useDispatch } from "react-redux";
import { getPokemonsAction } from "../../redux/pokemons/action";
import Container_home from "../../components/homeComponents/Container_home";

const HomePage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPokemonsAction());
  // }, []);
  return (
    <div className={Styles.container}>
      <Container_home />
    </div>
  );
};

export default HomePage;
