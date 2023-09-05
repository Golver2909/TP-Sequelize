const Profesores = require('../models/profesores');
exports.getAllProfesores = async (req, res) => {
 try {
 const profesores = await Profesores.findAll();
 res.json(profesores);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Server error' });
 }
};
