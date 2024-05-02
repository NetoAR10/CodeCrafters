const pago = require('../models/rPago.model');
const { decifrarAES, extraerValores } = require('../decifrarXML');

exports.getRegistrarPago = (request, response, next) => {
    response.render('registrarPago', { 
        correo: request.session.correo || '',
        permisos: request.session.permisos,
        rol: request.session.roles,
        nombre: request.session.nombre,
        csrfToken: request.csrfToken(),
    });
};

exports.postRegistrarPago = async (req, res, next) => {
    console.log(req.body);
    const { IDPago,Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota } = req.body;
    try {
        const nuevoPago = new pago(Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota);
        let respuestaAPI = 'OXlGEp71jTWGsRg5dFiLisAOJPX65p09FZLMaPj%2F2qkB3yLgejAi4Pi9w8%2BSVOeF9Qi1tbr8y%2Bj03agN3DYTaq0OZVAMmkkxSMTO3hAHRY47CAIKlguWtFKiUnpYsCSwnocHgzjqNU15hao7%2BQ97fWtd1PLbv%2FcNBB5b8diigRObjmaicu3t4LmdBK5qUF9yCVpbyneIuOrtNncHb8bTmUMGLQhp%2BLxUSXSVQFbGGP0AA7R36KmhBbJ2zZAPO7SAMmYdvasvnkXpElP2moE40dKbyNEEUVm4IQ8FrH2DkaW%2FhYGYKQa7GUxHWYsOPXr0mtyg%2FjwIzh7alyvsgkO1eKR4yiTnvTa3%2Bjs4Imgz%2BS1FO6jfDyO8y33ixuZfBTwg9MNdHrdhUDZIntTY%2BMshOlZD%2FS4%2BQgj4QiPXAfGCeLQBs%2B74NKiHb1rsjek%2FEONguad5vHgCZAAM26sFd1ynCxgbnE9uZGCgVO232WDsn5JUnIdUif8on98i3rdvU5I4JicNAnAtHmxKogFdDH8bPWwjVs77Fl6iKIRa5JzdJw1ox3y03zigOACHdIS%2BRzNAw7fXdIATR8g9SGpacqStsarLFzzRjxIYze5%2BUbr6lnYUE8N88yGdDAPxsZ7Pn128JjVcZZ5VFhhtCEXw5NTyR1kHIzIuFZnR0pgkDmBJhw%2BcoJ4fzHD5qzSgk4tpDrQ%2FLPdQK8iIJ9rti1vz6nPoUwD4QanJy8UcSjud4aWddygabiZwPN3HmQEYpdTs5eQF1Bm%2B13ozWmChwdNv0UqmsGC7AMw8y%2FHh3isucu6lr%2Fywp5gKBxyh80bIL8593%2B8uUGpACjgQwhQZ7NdW9Uqg%2FF3SeTLFgqQ5U2%2BZ4WNhVrXrnrITzXpX14bKeV%2FwImSGG41RT1vX0S410NVum7%2FUsYAA%2BD%2Ben2q9OpAW9uikfnE78vmy%2BKgcYf%2BaSY7aS57I%2FLw4f3RaeyzHnEtzZha1toPd4cUU%2BSH416cNI%2BP8dOivSjeeKt1ntL0bJyL6loayaRSeJ39bKKSW8c%2B7W2A0xZ9jd1l%2B8C649XFNtoT5K0DKz62AeeLk26vVp9unnbkteKZp55vWcu%2BNBJf%2Bw%2FyuK4hs21bJ7BMA6Uxn1gY7t7d399FfeTGCMxko4RjXnjXt';
        let llave = '5DCC67393750523CD165F17E1EFADD21';

        const resultadoDescifrado = decifrarAES(respuestaAPI, llave);
        const valores = await extraerValores(resultadoDescifrado);

        console.log(valores);
        
        if (IDPago) {
            // Si IDPago, actualizar
            await nuevoPago.update(IDPago);
        } else {
            // Si no, creamos un nuevo pago
            await nuevoPago.save();
        }

	const urlAnterior = req.header('Referer') || 'pagos_de_alumnos';
        res.redirect(urlAnterior);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al procesar el pago.');
    }
};
