import axios from "axios"

const API = 'http://localhost:8080'

export const getPokemonByIdReq = async (id) => {
  const { data } = await axios(`${API}/pokemons/${id}`)
  return data
}