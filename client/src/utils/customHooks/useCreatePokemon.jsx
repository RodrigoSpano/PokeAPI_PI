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
  const [errors, setErrors] = useState(intialState);

  const validate = (poke) => {
    let validationErrors = {};
    if (poke.name.length < 3) validationErrors.name = "Invalid name";
    if (poke.image.length === 0) validationErrors.image = "Invalid image";
    if (poke.types.length === 0) validationErrors.types = "min types allowed 1";
    if (poke.types.length > 3) validationErrors.types = "max types allowed 3";
    return validationErrors;
  };

  const handleChange = (e) => {
    if (e.target.type === "range") {
      setPokemon({
        ...pokemon,
        [e.target.name]: Number(e.target.value),
      });
      setErrors(
        validate({
          ...pokemon,
          [e.target.name]: Number(e.target.value),
        })
      );
    } else {
      setPokemon({
        ...pokemon,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...pokemon,
          [e.target.name]: e.target.value,
        })
      );
    }
  };

  const handleImage = (image) => {
    setPokemon({ ...pokemon, image: `${image}` });
    setErrors(validate({ ...pokemon, image: `${image}` }));
  };

  const handleTypes = (e) => {
    setPokemon({
      ...pokemon,
      types: [...pokemon.types, Number(e.target.value)],
    });
    setErrors(
      validate({
        ...pokemon,
        types: [...pokemon.types, Number(e.target.value)],
      })
    );
  };

  const handleReset = () => {
    setPokemon(intialState);
    setErrors(intialState);
  };

  const handleSubmit = () => {
    if (!Object.values(errors).length) {
      console.log(pokemon);
      alert("pokemon created");
      setPokemon(intialState);
    } else {
      console.log(errors);
      setErrors(errors);
    }
  };

  return {
    handleChange,
    handleImage,
    handleSubmit,
    handleTypes,
    handleReset,
    pokemon,
    errors,
  };
};

export default useCreatePokemon;
