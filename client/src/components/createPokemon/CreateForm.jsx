import useCreatePokemon from "../../utils/customHooks/useCreatePokemon";
import ImagesCont from "./subcomps/ImagesCont";
import styles from "./create.module.css";
import InputsContainer from "./subcomps/InputsContainer";
import TypesInput from "./subcomps/TypesInput";
import Previsual from "./subcomps/Previsual";

const CreatePokemon = () => {
  const { handleChange, handleSubmit, handleImage, handleTypes, pokemon } =
    useCreatePokemon();
  return (
    <div className={styles.container}>
      <ImagesCont handleFn={handleImage} />
      <div className={styles.infoContainer}>
        <InputsContainer handleChange={handleChange} pokemon={pokemon} />
        <div className={styles.prevDiv}>
          <TypesInput handleTypes={handleTypes} />
          <Previsual pokemon={pokemon} />
        </div>
      </div>
      <button onClick={handleSubmit}>create</button>
    </div>
  );
};

export default CreatePokemon;
