// import React from "react";
import styles from "./homeComponents.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsAction } from "../../redux/pokemons/action";
import PokemonCard from "./subComps/pokemon/PokemonCard";
import Loader from "../loader/Loader";

const PokemonsContainer = () => {
  const pokes = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsAction());
  }, []);
  return (
    <div className={styles.pokemonsContainer}>
      {pokes.length ? (
        pokes?.map((el) => <PokemonCard key={el.id} pokemon={el} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PokemonsContainer;
