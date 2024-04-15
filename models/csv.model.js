const db = require('../util/database');

module.exports = class CSVEntry {
  constructor(data) {
    this.column1 = data.column1;
    this.column2 = data.column2;
  }

  static async insertMany(entries) {
    const query = 'INSERT INTO your_table_name (column1, column2) VALUES ?';
    const values = entries.map(entry => [entry.column1, entry.column2]);
    await db.query(query, [values]);
  }
};
