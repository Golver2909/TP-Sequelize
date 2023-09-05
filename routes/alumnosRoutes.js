//En la carpeta routes se administran las rutas de cada modelo a cargar

const express = require('express');
const router = express.Router();

//Se referencia al controller
const alumnosController = require('../controllers/alumnosControllers');

//Se llama a la funcion del controller
router.get('/', alumnosController.getAllAlumnos);
module.exports = router;
