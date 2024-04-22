const pool = require('../util/database'); 

module.exports = {
  getDeudas: async () => {
    try {
      
      const [results] = await pool.query('SELECT * FROM deuda');
      return results; 
    } catch (error) {
      throw error; 
    }
  }
};
