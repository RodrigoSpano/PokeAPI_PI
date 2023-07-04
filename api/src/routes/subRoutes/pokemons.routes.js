const { Router } = require('express');
const getPokemons = require('../../controllers/pokemon/getPokemons');
const getPokemonByIdController = require('../../controllers/pokemon/getPokemonById');
const postPokemon = require('../../controllers/pokemon/postPokemon');
const validatePokemonMiddleware = require('../../middleware/validatePokemon');

const router = Router();

router.get('/', getPokemons)
router.get('/:id', getPokemonByIdController)
router.post('/', validatePokemonMiddleware, postPokemon)

module.exports = router