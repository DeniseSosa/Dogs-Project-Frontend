const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {dogsHandler}= require ('../handlers/dogsHandlers');
const { getDogs } = require('../controllers/getDogs');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', dogsHandler);


module.exports = router;
