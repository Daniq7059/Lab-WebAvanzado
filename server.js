// server.js
const express = require('express');
const bodyParser = require('body-parser');
const rutas = require('./rutas'); // Importar las rutas
const app = express();
const port = 3000;

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');

// Middleware para archivos estáticos y body parser
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas de otro archivo
app.use('/', rutas);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
