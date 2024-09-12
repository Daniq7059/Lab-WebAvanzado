const express = require('express');
const bodyParser = require('body-parser');
const rutas = require('./rutas');
const correoRouter = require('./correo.js'); // Ruta del archivo de correo
const path = require('path'); // Asegurar el uso de 'path'
const app = express();
const port = 3000;

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');

// Middleware para archivos estáticos y body parser
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Usar las rutas importadas
app.use('/', rutas);

// Usa la nueva hoja de rutas para manejar el envío de correos
app.use('/api/correo', correoRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
