import { TYPES } from "./action"
// eslint-disable-next-line no-unused-vars
const { ADD_POKEMON, GET_POKEMONS, GET_TYPES } = TYPES

const initialState = {
  pokemons: [],
  backup: [],
  types: []
}

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, backup: action.payload };
    default:
      return { ...state }
  }
}

export default pokemonsReducer