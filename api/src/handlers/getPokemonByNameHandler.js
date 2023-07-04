const axios = require('axios')
const { Pokemon, Type } = require('../db')

const pokemonByNameDB = async (name) => {
  const pokemonDB = await Pokemon.findOne({ where: { name } }, { include: { model: Type, attributes: ['name'], through: { attributes: [] } } })
  if (pokemonDB) return pokemonDB
}

const pokemonByNameAPI = async (name, api) => {
  const { data } = await axios(`${api}/pokemon/${name}`)
  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    hp: data.stats[0].stat.name === 'hp' && data.stats[0].base_stat,
    attack: data.stats[1].stat.name === 'attack' && data.stats[1].base_stat,
    defense: data.stats[2].stat.name === 'defense' && data.stats[2].base_stat,
    speed: data.stats[5].stat.name === 'speed' && data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    types: data.types.map(el => { return { name: el.type.name } })
  }
  return pokemon
}


module.exports = { pokemonByNameAPI, pokemonByNameDB }