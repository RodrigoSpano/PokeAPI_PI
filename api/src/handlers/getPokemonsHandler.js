const { Pokemon, Type } = require('../db')
const axios = require('axios')


const getAllPokemons = async (URI) => {
  try {
    // pokemons from api
    const pokemonsArray = []
    const resp = await axios(`${URI}/pokemon/?limit=48`)
    for (let poke of resp.data.results) {
      const { data } = await axios(poke.url)
      pokemonsArray.push({
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
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
    const dbPokemons = await Pokemon.findAll({ include: { model: Type, attributes: ['name'], through: { attributes: [] } } })
    return { DB_pokemons: dbPokemons.length ? dbPokemons : [], API_pokemons: pokemonsArray }
  } catch (error) {
    throw Error(error)
  }
}


module.exports = { getAllPokemons }