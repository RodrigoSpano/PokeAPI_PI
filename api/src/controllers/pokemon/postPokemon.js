const { Pokemon } = require('../../db')

const postPokemon = async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, image, type } = req.body
    const findPokemon = await Pokemon.findOne({ where: { name: name.toLowerCase() } })
    if (findPokemon) throw new Error('Cannot create an existing Pokemon')
    const pokemonObj = { name: name.toLowerCase(), hp, attack, defense, speed, height, weight, image: image ? image : 'https://i.postimg.cc/Qdwz52bZ/defaultimage-1.jpg' }
    const newPokemon = await Pokemon.create(pokemonObj)
    newPokemon.addTypes(type) //tiene q ser el id del type 
    return res.status(201).json(newPokemon)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = postPokemon