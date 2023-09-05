const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresControllers');
router.get('/', profesoresController.getAllProfesores);
module.exports = router;
