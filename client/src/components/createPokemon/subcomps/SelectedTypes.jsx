/* eslint-disable react/prop-types */
import style from "./subcomps.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SelectedTypes = ({ pokemon }) => {
  const types = useSelector((state) => state.types);
  const [typesSelected, setTypesSelected] = useState([]);

  useEffect(() => {
    if (pokemon.types) {
      let findTypes = pokemon.types.map((el) =>
        types.find((type) => Number(type.id) === Number(el))
      );
      setTypesSelected(findTypes);
    }
  }, [pokemon.types, types]);

  return (
    <div className={style.selectedTypesList}>
      {typesSelected.length > 0
        ? typesSelected.map((el) => <span key={el.id}>{el.name}</span>)
        : null}
    </div>
  );
};

export default SelectedTypes;
