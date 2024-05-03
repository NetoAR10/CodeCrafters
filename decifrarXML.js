const CryptoJS = require('crypto-js');
const xml2js = require('xml2js');
const fs = require('fs');

// Función para descifrar
function decifrarAES(cadena_cifrada, key) {
    try {
        cadena_cifrada = decodeURIComponent(cadena_cifrada);
        const dataBytes = CryptoJS.enc.Base64.parse(cadena_cifrada);
        const keyBytes = CryptoJS.enc.Hex.parse(key);

        const iv = CryptoJS.lib.WordArray.create(dataBytes.words.slice(0, 4), 16);
        const encrypted = CryptoJS.lib.WordArray.create(dataBytes.words.slice(4), dataBytes.sigBytes - 16);

        const decrypted = CryptoJS.AES.decrypt({ ciphertext: encrypted }, keyBytes, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);

    } catch (error) {
        console.error('Error descifrando:', error);
        return '';
    }
}

// Función para analizar el XML y extraer valores
function extraerValores(xml) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml, (error, result) => {
            if (error) {
                console.error('Error analizando XML:', error);
                return reject(error);
            }

            const reference = result.CENTEROFPAYMENTS.reference[0];
            const response = result.CENTEROFPAYMENTS.response[0];
            const date = result.CENTEROFPAYMENTS.date[0];
            const amount = result.CENTEROFPAYMENTS.amount[0];

            resolve({ reference, response, date, amount });
        });
    });
}

module.exports = {
    decifrarAES,
    extraerValores
};