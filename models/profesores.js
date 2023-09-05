const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
class Profesores extends Model {}

Profesores.init({
 id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 name: {
 type: DataTypes.STRING,
 allowNull: false
 },
 telefono: {
 type: DataTypes.NUMBER,
 allowNull: true
}
}, {
 sequelize,
 modelName: 'Profesores'
});
module.exports = Profesores