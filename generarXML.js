const xml2js = require('xml2js');
const fs = require('fs');
const CryptoJS = require("crypto-js");
const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const db = require('./util/database'); 

// Función para convertir un buffer de array a una cadena base64
function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return Buffer.from(binary, 'binary').toString('base64');
}

// Función para convertir una cadena base64 a una cadena hexadecimal
function base64toHEX(base64) {
    var raw = Buffer.from(base64, 'base64').toString('binary');
    var HEX = '';
    for (var i = 0; i < raw.length; i++) {
        var _hex = raw.charCodeAt(i).toString(16);
        HEX += (_hex.length == 2 ? _hex : '0' + _hex);
    }
    return HEX.toUpperCase();
}

// Función para obtener el total de la deuda desde la base de datos
async function fetchTotalDebt() {
    try {
        const [rows] = await db.execute('SELECT Total_deuda FROM deuda WHERE id = 1');
        return rows[0].Total_deuda;
    } catch (error) {
        console.error('Error fetching Total_deuda:', error);
        throw error;
    }
}

// Función para cifrar datos
function cifrarAES(data, key) {
    let buf = crypto.randomBytes(16);
    let buffer_b64 = _arrayBufferToBase64(buf);
    let iv = CryptoJS.enc.Hex.parse(base64toHEX(buffer_b64));
    key = CryptoJS.enc.Hex.parse(key);
    let cipherParams = {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    };
    let encrypted = CryptoJS.AES.encrypt(data, key, cipherParams);
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

// Función para descifrar datos
function decifrarAES(cadena_cifrada, key) {
    key = CryptoJS.enc.Hex.parse(key);
    let decrypted = CryptoJS.AES.decrypt(cadena_cifrada, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

// PASO 1: Leer y modificar el XML
async function updateXML() {
    const totalDebt = await fetchTotalDebt(); // Obtener el total de la deuda
    const xml = fs.readFileSync('template.xml', 'utf8');
    xml2js.parseString(xml, function(err, result) {
        if (err) throw err;

        const uniqueReference = uuidv4(); // Generar una referencia única
        result.P.url[0].reference[0] = uniqueReference;
        result.P.url[0].amount[0] = totalDebt.toString(); // Actualizar el monto con la deuda total

        const builder = new xml2js.Builder();
        const newXml = builder.buildObject(result);
        fs.writeFileSync('template_modificado.xml', newXml); // Guardar el XML modificado

        encryptAndSendXML(); // Proceder al siguiente paso
    });
}

// PASO 2: Cifrar y enviar el XML
function encryptAndSendXML() {
    var originalString = fs.readFileSync('template_modificado.xml', 'utf8');
    var key = '5DCC67393750523CD165F17E1EFADD21';
    var ciphertext = cifrarAES(originalString, key);

    // PASO 3: Enviar la cadena cifrada
    var originalString2 = "xml=<pgs><data0>SNDBX123</data0><data>" + ciphertext + "</data></pgs>";
    var data = encodeURIComponent(originalString2);

    axios.post('https://sandboxpo.mit.com.mx/gen', data, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        withCredentials: true
    })
    .then(function (response) {
        console.log("Response received");
        // PASO 4: Descifrar la respuesta
        var originalText = decifrarAES(response.data, key);
        console.log("Decrypted text:", originalText);
    })
    .catch(function (error) {
        console.error("Error during HTTP request:", error);
    });
}

// Iniciar el flujo de trabajo
updateXML();

module.exports = {
    decifrarAES
};
  
