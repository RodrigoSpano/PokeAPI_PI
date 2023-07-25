import { useEffect } from "react";
import styles from "./createpokemons.module.css";
import { useDispatch } from "react-redux";
import { getTypesAction } from "../../redux/pokemons/action";
import { CreatePokemon } from "../../components/createPokemon/createForm.jsx";

const CreatePokemonPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypesAction());
  }, [dispatch]);
  return (
    <div className={styles.pageCont}>
      <CreatePokemon />
    </div>
  );
};

export default CreatePokemonPage;
