// csv.controller.js
const fs = require('fs');
const Papa = require('papaparse');
const CSV = require('../models/csv.model');

exports.uploadCSV = (request, response) => {
    if (!request.file) {
        return response.status(400).send('No file uploaded');
    }

    const filePath = request.file.path;
    
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return response.status(500).send('Error reading the file');
        }

        const results = Papa.parse(data, {
            header: true,
            skipEmptyLines: true
        });

        try {
            for (let row of results.data) {
                const record = new CSV(row);
                await record.save();
            }
            fs.unlinkSync(filePath); // Elimina el archivo después de procesarlo
            response.redirect('/'); // O redirige a alguna página de éxito o estado
        } catch (error) {
            console.error('Error processing data:', error);
            response.status(500).send('Error processing data');
        }
    });
};
