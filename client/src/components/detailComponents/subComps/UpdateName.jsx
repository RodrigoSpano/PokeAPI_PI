/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./subcomps.module.css";
import { useDispatch } from "react-redux";
import { updatePokemonAction } from "../../../redux/pokemons/action";
import { FaCircleCheck } from "react-icons/fa6";

const UpdateName = ({
  setEdit,
  id,
  pokemon,
  setPokemon,
  setErrorName,
  errorValidate,
  errorName,
}) => {
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const handleName = (e) => {
    setData(e.target.value);
    setErrorName(errorValidate(e.target.value));
  };

  const handleUpdate = () => {
    dispatch(updatePokemonAction(id, { name: data })).then(() => {
      setPokemon({ ...pokemon, name: data });
      setData("");
    });
    setEdit(false);
  };

  return (
    <div className={styles.updateDiv}>
      <span onClick={() => setEdit(false)}>⬅</span>

      <div className={styles.coolinput}>
        <label htmlFor="input" className={styles.text}>
          Name:
        </label>
        <input
          onChange={handleName}
          autoCorrect="off"
          type="text"
          placeholder="Write here..."
          name="input"
          autoComplete="off"
          autoFocus
          className={styles.input}
        />
      </div>

      <button disabled={errorName?.name ? true : false} onClick={handleUpdate}>
        <FaCircleCheck />
      </button>
    </div>
  );
};

export default UpdateName;
