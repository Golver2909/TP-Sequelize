//Carpeta hecha para un archivo para configurar la base de datos. 

const { Sequelize } = require('sequelize');
//Se especifica usuario, parametros para entrar y base de datos a la cual se le dara usos
const sequelize = new Sequelize('materias', 'root', '', {
 host: 'localhost',
 dialect: 'mysql'
});
module.exports = sequelize;