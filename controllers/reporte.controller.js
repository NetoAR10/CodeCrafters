const reporteModel = require('../models/reporte.model'); 

module.exports = {
  getReporteDeudas: async (req, res) => {
    try {
      const deudas = await reporteModel.getDeudas(); 
      res.json(deudas); 
    } catch (error) {
      res.status(500).send('Error obteniendo datos'); 
    }
  }
};
