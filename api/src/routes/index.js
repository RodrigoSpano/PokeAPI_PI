const { Router } = require('express');
const pokemonsRoutes = require('./subRoutes/pokemons.routes')

const router = Router();

router.use('/pokemons', pokemonsRoutes)


module.exports = router;
