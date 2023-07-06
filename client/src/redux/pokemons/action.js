import axios from "axios"

const API = 'http://localhost:8080'

export const TYPES = {
  GET_POKEMONS: "GET_POKEMONS",
  GET_TYPES: "GET_TYPES",
  ADD_POKEMON: "ADD_POKEMON"
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