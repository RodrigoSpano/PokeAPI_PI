/* eslint-disable no-unused-vars */
import styles from "./homeComponents.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsAction } from "../../redux/pokemons/action";
import PokemonCard from "./subComps/pokemon/PokemonCard";
import Loader from "../loader/Loader";
import usePagination from "../../utils/customHooks/usePagination";
import Pagination from "./subComps/pokemon/Pagination";

const PokemonsContainer = () => {
  const { nextHandler, pokemons, prevHandler, count } = usePagination();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsAction());
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.pokemonsCardsContainer}>
        {pokemons.length ? (
          pokemons?.map((el) => <PokemonCard key={el.id} pokemon={el} />)
        ) : (
          <Loader />
        )}
      </div>
      <Pagination nextFn={nextHandler} prevFn={prevHandler} pages={count} />
    </div>
  );
};

export default PokemonsContainer;
