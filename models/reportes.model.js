const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  date: Date,
  amount: Number
});

const Report = mongoose.model('Report', ReportSchema);

module.exports = {
  getReports: async function(startDate, endDate) {
    return await Report.find({
      date: {
        $gte: startDate,
        $lte: endDate
      }
    });
  }
};
