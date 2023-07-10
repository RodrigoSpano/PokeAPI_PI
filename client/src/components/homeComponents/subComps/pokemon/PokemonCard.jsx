import { useNavigate } from "react-router-dom";
import TypeSpan from "./TypeSpan";
import styles from "./pokemon.module.css";

/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.pokemonCard}>
      <img
        onClick={() => navigate(`/pokemon/${pokemon.id}`)}
        src={pokemon.image}
        alt={pokemon.name}
      />
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
