const express = require('express');
const router = express.Router();

router.get('/registrarPago', (request, response, next) => {
    response.render('registrarPago');
})

module.exports = router;

router.post('/registrarPago', (request, response, next) => {

    const { IDUsuario, IDDueda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga } = request.body;
    console.log('IDUsuario:', IDUsuario);
    console.log('IDDueda:', IDDueda);
    console.log('Cant_pagada:',Cant_pagada);
    console.log('Metodo:',Metodo);
    console.log('Banco:',Banco);
    console.log('Nota:',Nota);
    console.log('Prorroga:',Prorroga);

    // Reemplazar undefined por null
    const values = [IDUsuario, IDDueda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga]
       .map(v => (v === undefined || v === '') ? null : v);
    console.log('Values:', values);

    const db = require('../util/database');
    console.log('consulta con:',values);	
    db.execute(
        'INSERT INTO Pago (IDUsuario, IDDueda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        values
    )
    .then(() => {
        response.send('Pago registrado con éxito.');
    })
    .catch(err => {
        console.log(err);
        response.status(500).send('Error al registrar el pago.');
    });
});
  

