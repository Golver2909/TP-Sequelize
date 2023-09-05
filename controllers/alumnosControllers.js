//La carpeta controllers se encarga de controlar el "transito" de las rutas

const Alumnos = require('../models/alumnos');
//Se usa una funcion para conseguir el modelo de alumnos
exports.getAllAlumnos = async (req, res) => {
 try {
 const alumnos = await Alumnos.findAll();
 res.json(materias);
 } catch (error) {
//devuelve un error
 console.error(error);
 res.status(500).json({ message: 'Server error' });
 }
};
