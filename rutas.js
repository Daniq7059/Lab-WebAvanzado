const router = require('express').Router();
const path = require('path');

// Rutas principales
router.get('/nosotros', (req, res) => {
    res.sendFile('./static/nosotros.html', {
        root: __dirname
    });
});

router.get('/Contactanos', (req, res) => {
    res.sendFile('./static/Contactanos.html', {
        root: __dirname
    });
});

router.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    });
});

router.get('/auditoria', (req, res) => {
    res.sendFile('./static/auditoria.html', {
        root: __dirname
    });
});

router.get('/consultoria', (req, res) => {
    res.sendFile('./static/consultoria.html', {
        root: __dirname
    });
});

router.get('/formacion', (req, res) => {
    res.sendFile('./static/formacion.html', {
        root: __dirname
    });
});

router.get('/implementacion', (req, res) => {
    res.sendFile('./static/implementacion.html', {
        root: __dirname
    });
});

router.get('/monitoreo', (req, res) => {
    res.sendFile('./static/monitoreo.html', {
        root: __dirname
    });
});

router.get('/outsourcing', (req, res) => {
    res.sendFile('./static/outsourcing.html', {
        root: __dirname
    });
});

router.get('/requerimientos', (req, res) => {
    res.sendFile('./static/requerimientos.html', {
        root: __dirname
    });
});

router.get('/servicios', (req, res) => {
    res.sendFile('./static/servicios.html', {
        root: __dirname
    });
});

module.exports = router;
