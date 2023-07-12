/* eslint-disable no-unused-vars */
import { useState } from "react";

const intialState = {
  name: "",
  image: "",
  types: [],
  hp: 50,
  attack: 50,
  defense: 50,
  speed: 50,
  height: 50,
  weight: 50,
};

const useCreatePokemon = () => {
  const [pokemon, setPokemon] = useState(intialState);
  // const [errors, setErrors] = useState(intialState);

  // const validate = (poke) => {
  //   let errors = {};
  //   if (poke.name === null) errors.name = "Invalid name";
  //   if (poke.types.length === 0) errors.types = "Types cannot be empty";
  //   if (poke.image.length === 0) errors.image = "Invalid image";
  //   if (poke.types.length >= 3 || poke.types.length === 0)
  //     errors.types = "min types allowed 1, max types allowed 3";
  //   return errors;
  // };

  const handleChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (image) => {
    setPokemon({ ...pokemon, image: `${image}` });
  };

  const handleTypes = (e) => {
    setPokemon({
      ...pokemon,
      types: [...pokemon.types, Number(e.target.value)],
    });
  };

  const handleSubmit = () => {
    console.log(pokemon);
  };

  return { handleChange, handleImage, handleSubmit, handleTypes, pokemon };
};

export default useCreatePokemon;
