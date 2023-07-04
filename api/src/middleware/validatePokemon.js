const { Pokemon } = require('../db')

const validatePokemonMiddleware = (req, res, next) => {
  const { name, hp, attack, defense, speed, height, weight, image, type } = req.body
  if (!name || !hp || !attack || !defense || !speed || !height || !weight || !image || !type) return res.status(400).json({ message: 'Missing values' })
  next()
}

module.exports = validatePokemonMiddleware