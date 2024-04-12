const express = require('express');
const router = express.Router();

router.get('/crearDeuda', (request, response, next) => {
    response.render('crearDeuda');
})

module.exports = router;

router.post('/crearDeuda', (request, response, next) => {

    const { IDUsuario, Total_deuda, Plan_pago, Concepto, Mes } = request.body;
    console.log('IDUsuario:', IDUsuario);
    console.log('Total_deuda:', Total_deuda);
    console.log('Plan_pago:', Plan_pago);
    console.log('Concepto:', Concepto);
    console.log('Mes:', Mes);

    const values = [IDUsuario, Total_deuda, Plan_pago, Concepto, Mes]
       .map(v => (v === undefined || v === '') ? null : v);
    console.log('Values:', values);

    const db = require('../util/database');
    console.log('consulta con:',values);	
    db.execute(
        'INSERT INTO Deuda (IDUsuario, Total_deuda, Plan_pago, Concepto, Mes) VALUES (?, ?, ?, ?, ?)',
        values
    )
    .then(() => {
        response.send('Deuda registrada con éxito.');
    })
    .catch(err => {
        console.log(err);
        response.status(500).send('Error al registrar la deuda.');
    });
});
