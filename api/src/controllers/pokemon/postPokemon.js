const { Pokemon } = require('../../db')

const postPokemon = async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, image, types } = req.body
    const findPokemon = await Pokemon.findOne({ where: { name: name.toLowerCase() } })
    if (findPokemon) return res.status(302).json({ message: 'this pokemon already exists' })
    const pokemonObj = { name: name.toLowerCase(), hp, attack, defense, speed, height, weight, image }
    const newPokemon = await Pokemon.create(pokemonObj)
    newPokemon.addTypes(types) //tiene q ser el id del type 
    return res.status(201).json(newPokemon)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = postPokemon