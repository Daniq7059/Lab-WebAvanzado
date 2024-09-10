const express = require('express');
const bodyParser = require('body-parser');
const rutas = require('./rutas');
const app = express();
const path = require('path'); // Asegurar el uso de 'path'
const port = 3000;

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');

// Middleware para archivos estáticos y body parser
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas importadas
app.use('/', rutas);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
