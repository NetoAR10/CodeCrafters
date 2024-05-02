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

// Cadena cifrada
let respuestaAPI = 'OXlGEp71jTWGsRg5dFiLisAOJPX65p09FZLMaPj%2F2qkB3yLgejAi4Pi9w8%2BSVOeF9Qi1tbr8y%2Bj03agN3DYTaq0OZVAMmkkxSMTO3hAHRY47CAIKlguWtFKiUnpYsCSwnocHgzjqNU15hao7%2BQ97fWtd1PLbv%2FcNBB5b8diigRObjmaicu3t4LmdBK5qUF9yCVpbyneIuOrtNncHb8bTmUMGLQhp%2BLxUSXSVQFbGGP0AA7R36KmhBbJ2zZAPO7SAMmYdvasvnkXpElP2moE40dKbyNEEUVm4IQ8FrH2DkaW%2FhYGYKQa7GUxHWYsOPXr0mtyg%2FjwIzh7alyvsgkO1eKR4yiTnvTa3%2Bjs4Imgz%2BS1FO6jfDyO8y33ixuZfBTwg9MNdHrdhUDZIntTY%2BMshOlZD%2FS4%2BQgj4QiPXAfGCeLQBs%2B74NKiHb1rsjek%2FEONguad5vHgCZAAM26sFd1ynCxgbnE9uZGCgVO232WDsn5JUnIdUif8on98i3rdvU5I4JicNAnAtHmxKogFdDH8bPWwjVs77Fl6iKIRa5JzdJw1ox3y03zigOACHdIS%2BRzNAw7fXdIATR8g9SGpacqStsarLFzzRjxIYze5%2BUbr6lnYUE8N88yGdDAPxsZ7Pn128JjVcZZ5VFhhtCEXw5NTyR1kHIzIuFZnR0pgkDmBJhw%2BcoJ4fzHD5qzSgk4tpDrQ%2FLPdQK8iIJ9rti1vz6nPoUwD4QanJy8UcSjud4aWddygabiZwPN3HmQEYpdTs5eQF1Bm%2B13ozWmChwdNv0UqmsGC7AMw8y%2FHh3isucu6lr%2Fywp5gKBxyh80bIL8593%2B8uUGpACjgQwhQZ7NdW9Uqg%2FF3SeTLFgqQ5U2%2BZ4WNhVrXrnrITzXpX14bKeV%2FwImSGG41RT1vX0S410NVum7%2FUsYAA%2BD%2Ben2q9OpAW9uikfnE78vmy%2BKgcYf%2BaSY7aS57I%2FLw4f3RaeyzHnEtzZha1toPd4cUU%2BSH416cNI%2BP8dOivSjeeKt1ntL0bJyL6loayaRSeJ39bKKSW8c%2B7W2A0xZ9jd1l%2B8C649XFNtoT5K0DKz62AeeLk26vVp9unnbkteKZp55vWcu%2BNBJf%2Bw%2FyuK4hs21bJ7BMA6Uxn1gY7t7d399FfeTGCMxko4RjXnjXt';
let llave = '5DCC67393750523CD165F17E1EFADD21';

const resultadoDescifrado = decifrarAES(respuestaAPI, llave);
fs.writeFileSync('resultado.xml', resultadoDescifrado, 'utf8');
console.log('El contenido descifrado se ha guardado en resultado.xml');

// Extraer valores de las etiquetas
extraerValores(resultadoDescifrado);

module.exports = {
    decifrarAES,
    extraerValores
};