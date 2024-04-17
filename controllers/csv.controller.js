const fs = require('fs');
const csvParser = require('csv-parser');
const CsvModel = require('../models/csv.model');

exports.getUploadCsv = (req, res, next) => {
  res.render('upload', { csrfToken: req.csrfToken(), uploaded: false });
};

exports.postUploadCsv = (req, res, next) => {
  if (!req.file) {
    return res.status(400).send('Archivo CSV no subido.');
  }
  
  let csvData = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', (data) => csvData.push(data))
    .on('end', () => {
      CsvModel.bulkInsert(csvData)
        .then(() => {
          fs.unlinkSync(req.file.path); 
          res.render('upload', { csrfToken: req.csrfToken(), uploaded: true });
        })
        .catch(err => res.status(500).json({ error: err.message }));
    });
};
