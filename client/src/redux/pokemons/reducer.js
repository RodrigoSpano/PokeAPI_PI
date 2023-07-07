/* eslint-disable no-case-declarations */
import { TYPES } from "./action"
// eslint-disable-next-line no-unused-vars
const { ADD_POKEMON, GET_POKEMONS, GET_TYPES, ORDER_ATTACK, ORDER_ALFABETIC, RESET_FILTERS, FILTER_FROM } = TYPES

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
    case RESET_FILTERS:
      return {
        ...state,
        pokemons: state.backup
      }
    case ORDER_ATTACK:
      const backupCopy = [...state.pokemons]
      return {
        ...state,
        pokemons: action.payload === 'attackASC' ?
          backupCopy.sort((a, b) => a.attack - b.attack) :
          backupCopy.sort((a, b) => b.attack - a.attack)
      }
    case ORDER_ALFABETIC:
      const backCopy = [...state.pokemons]
      return {
        ...state,
        pokemons: action.payload === 'aZ' ?
          backCopy.sort((a, b) => a.name.localeCompare(b.name)) :
          backCopy.sort((a, b) => b.name.localeCompare(a.name))
      }
    case FILTER_FROM:
      const uuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      const copy = [...state.backup]
      if (action.payload === 'api') {
        const apiPokes = copy.filter(el => !uuidRegex.test(el.id))
        return {
          ...state,
          pokemons: apiPokes
        }
      } else if (action.payload === 'db') {
        const dbPokes = copy.filter(el => uuidRegex.test(el.id))
        return {
          ...state,
          pokemons: dbPokes
        }
      }
      break
    default:
      return { ...state }
  }
}

export default pokemonsReducer