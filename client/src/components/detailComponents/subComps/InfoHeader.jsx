/* eslint-disable react/prop-types */
import TypeSpan from "../../homeComponents/subComps/pokemon/TypeSpan";
import NameContainer from "./NameContainer";
import UpdateName from "./UpdateName";
import styles from "./subcomps.module.css";
import { useState } from "react";

const InfoHeader = ({ pokemon, setPokemon }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className={styles.headerInfo}>
      <div>
        {!edit ? (
          <NameContainer pokemon={pokemon} edit={edit} setEdit={setEdit} />
        ) : (
          <UpdateName
            setPokemon={setPokemon}
            pokemon={pokemon}
            setEdit={setEdit}
            id={pokemon.id}
          />
        )}
      </div>
      <div className={styles.otherInfo}>
        <div>
          <span>weight:</span>
          <p>{pokemon.weight}kg</p>
        </div>
        <div>
          <span>height:</span>
          <p>{pokemon.height}</p>
        </div>
      </div>
      <div className={styles.spanDiv}>
        {pokemon.types?.map((el) => (
          <TypeSpan key={el.name} type={el} />
        ))}
      </div>
    </div>
  );
};

export default InfoHeader;
