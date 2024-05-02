const pago = require('../models/rPago.model');
const xml2js = require('xml2js');
const fs = require('fs');
const CryptoJS = require("crypto-js");
const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const { uid } = require('chart.js/helpers');
const pago = require('../models/rPago.model');
const materia = require('../models/materias.model');

/////////////////////////////////////////////////////////////////////////////////////////
function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return Buffer.from(binary, 'binary').toString('base64');
}

function base64toHEX(base64) {
    var raw = Buffer.from(base64, 'base64').toString('binary');
    var HEX = '';
    for (var i = 0; i < raw.length; i++) {
        var _hex = raw.charCodeAt(i).toString(16)
        HEX += (_hex.length == 2 ? _hex : '0' + _hex);
    }
    return HEX.toUpperCase();
}


function decifrarAES(cadena_cifrada, key) {
    var key = CryptoJS.enc.Hex.parse(key);
    var first = CryptoJS.enc.Base64.parse(cadena_cifrada);
    var second = CryptoJS.enc.Base64.parse(cadena_cifrada);
    first.words = first.words.slice(0, 4);
    second.words = second.words.slice(4, second.length);
    //console.log(cadena_cifrada);
    first.sigBytes = 16;
    second.sigBytes = second.sigBytes - 16;
    //console.log(second);
    second = CryptoJS.enc.Base64.stringify(second);
    //console.log(second);
    var cipherParams = {
        iv: first,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
    var decrypted = CryptoJS.AES.decrypt(second, key, cipherParams);
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    return decrypted;
}


function cifrarAES(data, key) {
    try {
        let buf = crypto.randomBytes(16);
        let buffer_b64 = _arrayBufferToBase64(buf);
        let iv = CryptoJS.enc.Hex.parse(base64toHEX(buffer_b64));

        var key = CryptoJS.enc.Hex.parse(key);

        let cipherParams = {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }

        let encrypted = CryptoJS.AES.encrypt(data, key, cipherParams);

        let merge = encrypted.iv.clone();
        merge.concat(encrypted.ciphertext);
        merge = CryptoJS.enc.Base64.stringify(merge);

        return merge;
    } catch (error) {
        return 'Tu llave es incorrecta: '+error;
    }
}

/////////////////////////////////////////////////////////////////////////


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
    // Tu XML en formato string
const xmlString = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CENTEROFPAYMENTS>
  <reference>FACTURA001</reference>
  <response>approved</response>
  <foliocpagos>100000000007</foliocpagos>
  <auth>255398</auth>
  <cd_response>00</cd_response>
  <cd_error/>
  <nb_error/>
  <time>06:52:13</time>
  <date>09/08/2022</date>
  <nb_company>SANDBOX MIT</nb_company>
  <nb_merchant>1234567 WEBPAYPLUS</nb_merchant>
  <cc_type> CREDITO/BANCO MIT/Visa</cc_type>
  <tp_operation>VENTA</tp_operation>
  <cc_name/>
  <cc_number>1234</cc_number>
  <cc_expmonth>12</cc_expmonth>
  <cc_expyear>25</cc_expyear>
  <amount>400.00</amount>
  <emv_key_date/>
  <number_tkn>411111JQP2V41111</number_tkn>
  <id_url>SNDBX001</id_url>
  <email>cliente@correo.com</email>
  <cc_mask>545454XXXXXX1234</cc_mask>
  <datos_adicionales>
    <data id="1" display="true">
      <label>Talla</label>
      <value>Grande</value>
    </data>
    <data id="2" display="false">
      <label>Color</label>
      <value>Azul</value>
    </data>
  </datos_adicionales>
</CENTEROFPAYMENTS>`;

function extraerValores(xmlString) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlString, (err, result) => {
            if (err) {
                return reject(err);
            }

            // Extraer los valores
            const reference = result.CENTEROFPAYMENTS.reference[0];
            const response = result.CENTEROFPAYMENTS.response[0];
            const date = result.CENTEROFPAYMENTS.date[0];
            const cantidad = result.CENTEROFPAYMENTS.amount[0];

            resolve({ reference, response, date, cantidad});
        });
    });
}
    console.log(req.body);
    const { IDPago,Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota } = req.body;
    try {
        const nuevoPago = new pago(Referencia, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota);
        const usuario = await materia.fetchInfoUsuario(request.session.correo);
        const referencia = usuario[0][0].referencia;

        const { reference, response, date, cantidad} = await extraerValores(xmlString);
        
        if (IDPago) {
            if (response === "approved") {
                let nuevo_pago = new pago (
                    referencia,
                    IDDeuda,
                    cantidad,
                    date,
                    "Online",
                    "N/A",
                    reference
                );
                nuevo_pago.save();
            }
            // Si IDPago, actualizar
            await nuevoPago.update(IDPago);
            res.redirect('pagos_de_alumnos');
        } else {
            // Si no, creamos un nuevo pago
            await nuevoPago.save();
            res.redirect('pagos_de_alumnos');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error al procesar el pago.');
    }
};
