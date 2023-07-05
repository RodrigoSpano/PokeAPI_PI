const { Pokemon } = require('../db')
const axios = require('axios')

const pokeApi = 'https://pokeapi.co/api/v2'

const validatePokemonMiddleware = async (req, res, next) => {
  const { name, hp, attack, defense, speed, height, weight, image, type } = req.body
  if (!name || !hp || !attack || !defense || !speed || !height || !weight || !image || !type) return res.status(400).json({ message: 'Missing values' })
  const { data } = await axios(`${pokeApi}/pokemon/?limit=48`)
  const findName = data.results.some(el => el.name.toLowerCase() === name.toLowerCase())
  if (findName) return res.status(302).json({ message: 'this pokemon already exists' })
  next()
}

module.exports = validatePokemonMiddleware