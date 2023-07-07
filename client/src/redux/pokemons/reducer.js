/* eslint-disable no-case-declarations */
import { TYPES } from "./action"
// eslint-disable-next-line no-unused-vars
const { ADD_POKEMON, GET_POKEMONS, GET_TYPES, ORDER_ATTACK, ORDER_ALFABETIC } = TYPES

const initialState = {
  pokemons: [],
  backup: [],
  types: []
}

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, backup: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case ORDER_ATTACK:
      const backupCopy = [...state.backup]
      return {
        ...state,
        pokemons: action.payload === 'attackASC' ?
          backupCopy.sort((a, b) => a.attack - b.attack) :
          backupCopy.sort((a, b) => b.attack - a.attack)
      }
    case ORDER_ALFABETIC:
      const backCopy = [...state.backup]
      return {
        ...state,
        pokemons: action.payload === 'aZ' ?
          backCopy.sort((a, b) => a.name.localeCompare(b.name)) :
          backCopy.sort((a, b) => b.name.localeCompare(a.name))
      }
    default:
      return { ...state }
  }
}

export default pokemonsReducer