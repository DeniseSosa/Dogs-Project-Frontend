const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {dogsHandler}= require ('../handlers/dogsHandlers');
const {getDogByIdHandler} = require('../handlers/dogByIdHandler');
const {dogsByNameHandler} = require('../handlers/dogsByNameHandler');
const {postDogHandler} = require('../handlers/postDogHandler');
const {getTemperamentsHandler} = require('../handlers/getTemperamentsHandler')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', dogsHandler);
router.get('/dogs/:idRaza', getDogByIdHandler );
router.get('/name', dogsByNameHandler);
router.post('/dogs', postDogHandler);
router.get('/temperaments', getTemperamentsHandler);


module.exports = router;
