const { Router } = require('express');
const getPokemons = require('../../controllers/pokemon/getPokemons');
const getPokemonByParamQuery = require('../../controllers/pokemon/getPokemonByIdOrName');


const router = Router();

router.get('/', getPokemons)
router.get('/:id', getPokemonByParamQuery)


module.exports = router