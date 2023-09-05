//La carpeta models guarda los modelos que tendran las tablas que se subiran a la base de datos
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
class Alumnos extends Model {}

//Declaramos los atributos que tendran los elementos de la tabla
Alumnos.init({
 id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 name: {
 type: DataTypes.STRING,
 allowNull: false
 },
 curso: {
 type: DataTypes.STRING,
 allowNull: false,
 unique: true
}
}, {
 sequelize,
 modelName: 'Alumnos'
});

//Se exporta el modelo
module.exports = Alumnos