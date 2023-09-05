const express = require('express');
const app = express();
const sequelize = require('./config/database');

//Llamamos a las rutas dentro de las constantes
const materiasRoutes = require('./routes/materiasRoutes');
const alumnosRoutes = require('./routes/alumnosRoutes');
const profesoresRoutes = require('./routes/profesoresRoutes');

//Configuramos la conexión a la base de datos
sequelize.authenticate()
 .then(() => console.log('Conexión establecida con la base de datos'))
 .catch(error => console.error('Error al conectar con la base de datos:', error));

//Se configuran las rutas de la API
app.use('/api/materias', materiasRoutes);
app.use('/api/alumnos', alumnosRoutes);
app.use('/api/profesores', profesoresRoutes);

//Se inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
