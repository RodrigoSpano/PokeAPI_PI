const axios = require('axios')
const { Pokemon } = require('../../db')
const URI = 'https://pokeapi.co/api/v2'

const getPokemons = async (req, res) => {
  try {
    //pokemons from api
    const pokemonsArray = []
    const resp = await axios(`${URI}/pokemon/?limit=50`)
    for (let poke of resp.data.results) {
      const { data } = await axios(poke.url)
      pokemonsArray.push({
        id: data.id,
        name: data.name,
        image: data.sprites.other.dream_world.front_default,
        hp: data.stats[0].stat.name === 'hp' && data.stats[0].base_stat,
        attack: data.stats[1].stat.name === 'attack' && data.stats[1].base_stat,
        defense: data.stats[2].stat.name === 'defense' && data.stats[2].base_stat,
        speed: data.stats[5].stat.name === 'speed' && data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types: data.types
      })
    }
    //pokemons from DB
    const dbPokemons = await Pokemon.findAll()
    return res.status(200).json({ DB_pokemons: dbPokemons.length ? dbPokemons : [], API_pokemons: pokemonsArray })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = getPokemons