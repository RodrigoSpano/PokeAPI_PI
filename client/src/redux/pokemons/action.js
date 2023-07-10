import axios from "axios"

const API = 'http://localhost:8080'

export const TYPES = {
  GET_POKEMONS: "GET_POKEMONS",
  GET_POKEMON: "GET_POKEMON",
  GET_TYPES: "GET_TYPES",
  ADD_POKEMON: "ADD_POKEMON",
  ORDER_ATTACK: 'ORDER_ATTACK',
  ORDER_ALFABETIC: 'ORDER_ALFABETIC',
  RESET_FILTERS: 'RESET_FILTERS',
  FILTER_FROM: 'FILTER_FROM',
  FILTER_BY_TYPE: 'FILTER_BY_TYPE'
}

export const getPokemonsAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${API}/pokemons`)
      return dispatch({
        type: TYPES.GET_POKEMONS,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getTypesAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${API}/types`)
      return dispatch({
        type: TYPES.GET_TYPES,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const orderAttackAction = (order) => {
  return {
    type: TYPES.ORDER_ATTACK,
    payload: order
  }
}

export const orderAlfabeticAction = (order) => {
  return {
    type: TYPES.ORDER_ALFABETIC,
    payload: order
  }
}

export const resetFiltersAction = () => {
  return {
    type: TYPES.RESET_FILTERS,
  }
}

export const filterFromApiOrDb = (filter) => {
  return {
    type: TYPES.FILTER_FROM,
    payload: filter
  }
}

export const filterByTypeAction = (type) => {
  return {
    type: TYPES.FILTER_BY_TYPE,
    payload: type
  }
}

export const getPokemonByNameAction = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${API}/pokemons/?name=${name}`)
      console.log(data)
      return dispatch({
        type: TYPES.GET_POKEMON,
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

