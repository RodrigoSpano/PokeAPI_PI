import useCreatePokemon from "../../utils/customHooks/useCreatePokemon";
import ImagesCont from "./subcomps/ImagesCont";
import styles from "./create.module.css";
import InputsContainer from "./subcomps/InputsContainer";
import TypesInput from "./subcomps/TypesInput";
import Previsual from "./subcomps/Previsual";
import SelectedTypes from "./subcomps/selectedTypes";

const CreatePokemon = () => {
  const {
    handleChange,
    handleSubmit,
    handleImage,
    handleReset,
    handleTypes,
    pokemon,
    errors,
  } = useCreatePokemon();
  return (
    <div className={styles.container}>
      <ImagesCont handleFn={handleImage} />
      <div className={styles.infoContainer}>
        <InputsContainer handleChange={handleChange} pokemon={pokemon} />
        <div className={styles.prevDiv}>
          <TypesInput handleTypes={handleTypes} typesForm={pokemon.types} />
          <SelectedTypes pokemon={pokemon} />
          <Previsual pokemon={pokemon} />
        </div>
      </div>
      {Object.values(errors).length ? (
        <div className={styles.errors}>
          {errors.name && <p>{errors.name}</p>}
          {errors.image && <p>{errors.image}</p>}
          {errors.types && <p>{errors.types}</p>}
        </div>
      ) : null}
      <div className={styles.btnsContainer}>
        <button disabled={true} id={styles.createBtn} onClick={handleSubmit}>
          create
        </button>
        <button onClick={handleReset} id={styles.resetBtn}>
          reset info
        </button>
      </div>
    </div>
  );
};

export default CreatePokemon;
