// rutas.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Rutas principales
router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/nosotros.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'nosotros.html'));
});

router.get('/servicios.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicios.html'));
});

router.get('/Contactanos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Contactanos.html'));
});

router.get('/consultoria.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'consultoria.html'));
});

router.get('/auditoria.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'auditoria.html'));
});

router.get('/formacion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'formacion.html'));
});

router.get('/implementacion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'implementacion.html'));
});

router.get('/monitoreo.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'monitoreo.html'));
});

router.get('/outsourcing.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'outsourcing.html'));
});

router.get('/requerimientos.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'requerimientos.html'));
});

// Ruta para procesar el formulario de contacto
router.post('/contacto.html', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(`Mensaje de ${nombre} (${email}): ${mensaje}`);
    res.send('¡Gracias por tu mensaje!');
});

module.exports = router;
