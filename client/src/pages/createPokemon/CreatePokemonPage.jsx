import CreatePokemon from "../../components/createPokemon/createForm";
import styles from "./createpokemons.module.css";

const CreatePokemonPage = () => {
  return (
    <div className={styles.pageCont}>
      <CreatePokemon />
    </div>
  );
};

export default CreatePokemonPage;
