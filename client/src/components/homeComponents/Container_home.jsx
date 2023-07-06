// import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsAction } from "../../redux/pokemons/action";

const Container_home = () => {
  const pokes = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonsAction());
  }, []);
  return (
    <div>
      {pokes.length ? (
        pokes?.map((el) => <p key={el.id}>{el.name}</p>)
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Container_home;
