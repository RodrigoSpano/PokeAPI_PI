import axios from "axios"

const API = 'http://localhost:8080'

export const TYPES = {
  GET_POKEMONS: "GET_POKEMONS",
  GET_TYPES: "GET_TYPES",
  ADD_POKEMON: "ADD_POKEMON",
  ORDER_ATTACK: 'ORDER_ATTACK',
  ORDER_ALFABETIC: 'ORDER_ALFABETIC'
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