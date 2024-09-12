const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Ruta para manejar el envío de correos
router.post('/send-email', async (req, res) => {
    const { Nombres, Apellidos, Cargo, Email, Empresa, Servicio, Descripcion } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'udanielv2003@gmail.com',
            pass: 'bbwy dtzn haxg yffh'
        }
    });

    let mailOptions = {
        from: Email,
        to: 'lfernandarodriguez.18@gmail.com',
        subject: `Solicitud de servicio de ${Nombres} ${Apellidos}`,
        text: `
            Nombre: ${Nombres} ${Apellidos}
            Cargo: ${Cargo}
            Email: ${Email}
            Empresa: ${Empresa}
            Asunto de Servicio: ${Servicio}
            Descripción: ${Descripcion}
        `
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).send('Correo enviado exitosamente');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al enviar el correo');
    }
});

module.exports = router;
