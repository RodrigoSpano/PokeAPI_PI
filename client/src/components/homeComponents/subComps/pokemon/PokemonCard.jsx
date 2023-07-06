import TypeSpan from "./TypeSpan";
import styles from "./pokemon.module.css";

/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon }) => {
  return (
    <div className={styles.pokemonCard}>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className={styles.infoCont}>
        <h5>{pokemon.name}</h5>
        <div className={styles.typesContainer}>
          {pokemon.types?.map((el) => (
            <TypeSpan key={Math.random()} type={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
