const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
class Materias extends Model {}

Materias.init({
 id: {
 type: DataTypes.INTEGER,
 primaryKey: true,
 autoIncrement: true
 },
 name: {
 type: DataTypes.STRING,
 allowNull: false
 },
 año: {
 type: DataTypes.STRING,
 allowNull: false,
 unique: true
}
}, {
 sequelize,
 modelName: 'materias'
});
module.exports = Materias