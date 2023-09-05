const Materias = require('../models/materias');
exports.getAllMaterias = async (req, res) => {
 try {
 const materias = await Materias.findAll();
 res.json(materias);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Server error' });
 }
};
