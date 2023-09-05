const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materiasControllers');
router.get('/', materiasController.getAllMaterias);
module.exports = router;
