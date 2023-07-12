import { useEffect } from "react";
import CreatePokemon from "../../components/createPokemon/createForm";
import styles from "./createpokemons.module.css";
import { useDispatch } from "react-redux";
import { getTypesAction } from "../../redux/pokemons/action";

const CreatePokemonPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypesAction());
  }, []);
  return (
    <div className={styles.pageCont}>
      <CreatePokemon />
    </div>
  );
};

export default CreatePokemonPage;
