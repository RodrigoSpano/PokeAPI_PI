import useCreatePokemon from "../../utils/customHooks/useCreatePokemon";
import ImagesCont from "./subcomps/ImagesCont";
import styles from "./create.module.css";
import InputsContainer from "./subcomps/InputsContainer";

const CreatePokemon = () => {
  const { handleChange, handleSubmit, handleImage, pokemon } =
    useCreatePokemon();
  return (
    <div className={styles.container}>
      <ImagesCont handleFn={handleImage} />
      <InputsContainer handleChange={handleChange} pokemon={pokemon} />
      <button onClick={handleSubmit}>create</button>
    </div>
  );
};

export default CreatePokemon;
