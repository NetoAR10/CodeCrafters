const db = require('../util/database'); 

class CSV {
    constructor(row) {
        this.name = row['Name'];
    }

    async save() {
        try {
            await db.execute('INSERT INTO your_table_name (column1, column2) VALUES (?, ?)', [this.name /*, more fields */]);
        } catch (error) {
            console.error('Error saving CSV data:', error);
            throw error;
        }
    }
}

module.exports = CSV;
