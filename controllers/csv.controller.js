const CSVEntry = require('../models/csv.model');
const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const multer = require('multer');

// Configuración de Multer para almacenar archivos subidos
const upload = multer({ dest: 'uploads/' });

exports.uploadCSV = upload.single('csvfile');

exports.getUploadPage = (req, res) => {
  res.render('upload');
};

exports.handleUpload = async (req, res) => {
  const fileContents = fs.readFileSync(req.file.path, 'utf8');
  const records = parse(fileContents, {
    columns: true,
    skip_empty_lines: true
  });
  const entries = records.map(record => new CSVEntry(record));
  try {
    await CSVEntry.insertMany(entries);
    res.redirect('/success');
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    fs.unlinkSync(req.file.path); // Eliminar el archivo después de procesarlo
  }
};
