const xml2js = require('xml2js');
const fs = require('fs');
const CryptoJS = require("crypto-js");
const axios = require('axios');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid'); 

// Definimos la variable `uniqueReference` globalmente
let uniqueReference; 

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
    first.sigBytes = 16;
    second.sigBytes = second.sigBytes - 16;
    second = CryptoJS.enc.Base64.stringify(second);
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


// PASO 1: Leer y modificar el XML
async function updateXML(deuda) {
    return new Promise((resolve, reject) => {
        const xml = fs.readFileSync('template.xml', 'utf8');
        xml2js.parseString(xml, function(err, result) {
            if (err) return reject(err);

            uniqueReference = uuidv4(); // Asigna `uniqueReference`
            result.P.url[0].reference[0] = uniqueReference;
            result.P.url[0].amount[0] = deuda.toString();

            const builder = new xml2js.Builder();
            const newXml = builder.buildObject(result);
            fs.writeFileSync('template_modificado.xml', newXml);

            encryptAndSendXML()
                .then(url => resolve({ url, uniqueReference }))
                .catch(error => reject(error));
        });
    })
}

// PASO 2: Cifrar y enviar el XML
function encryptAndSendXML() {
    return new Promise((resolve, reject) => {
        var originalString = fs.readFileSync('template_modificado.xml', 'utf8');
        var key = '5DCC67393750523CD165F17E1EFADD21';
        var ciphertext = cifrarAES(originalString, key);

        // PASO 3: Enviar la cadena cifrada
        var originalString2 = "xml=<pgs><data0>SNDBX123</data0><data>"+ciphertext+"</data></pgs>";
        var data = encodeURIComponent(originalString2);

        axios.post('https://sandboxpo.mit.com.mx/gen', data, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            withCredentials: true
        })
        .then(function (response) {
            var originalText = decifrarAES(response.data, key);
            const parser = new xml2js.Parser();

            parser.parseString(originalText, function (err, result) {
                if (err) {
                    console.error('Error al parsear XML: ', err);
                    reject(err);
                } else {
                    const url = result.P_RESPONSE.nb_url[0];
                    resolve(url);
                }
            })
        })
        .catch(function (error) {
            console.error("Error during HTTP request:", error);
            reject(error);
        });
    });   
}

module.exports = {
    updateXML,
    getUniqueReference: () => uniqueReference // Proporciona `uniqueReference`
};
