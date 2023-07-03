const axios = require("axios");
const { Pokemon, Type } = require('../../db')

const URI = 'https://pokeapi.co/api/v2'

const getPokemonByParamQuery = async (req, res) => {
  try {
    //find by name
    if (req.query.name) {
      const apiResp = await axios(`${URI}/pokemon/${req.query.name.toLowerCase()}`)
      if (!apiResp.data) {
        const dbResp = await Pokemon.findAll({ where: { name: req.query.name.toLowerCase() } }, { include: { model: Type, attributes: ['name'] } })
        if (!dbResp) return res.status(204).json({ message: 'pokemon not found' })
        return res.status(200).json(dbResp)
      }
      return res.status(200).json(apiResp.data)
    }
    //find by id
    if (req.params.id) {
      const apiResp = await axios(`${URI}/pokemon/${req.params.id}`)
      if (!apiResp.data) {
        const dbResp = await Pokemon.findByPk(req.params.id, { include: { model: Type, attributes: ['name'] } })
        if (!dbResp) return res.status(204).json({ message: 'pokemon not found' })
        return res.status(200).json(dbResp)
      }
      return res.status(200).json(apiResp.data)
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = getPokemonByParamQuery