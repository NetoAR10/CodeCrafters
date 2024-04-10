const db = require('../util/database');
const mysql = require('mysql2');

module.exports = {

    getLeadsCount: function(team) {
        return db.execute('SELECT COUNT(*) as totalLeads FROM leads WHERE leadTeam = ?', [team]);
    },
    
    getArrivedLeadsCount: function(team) {
        return db.execute('SELECT COUNT(*) as arrivedLeads FROM leads WHERE status = "Arrived" AND leadTeam = ?', [team]);
    },
    
    getManuallyCreatedTrue: function(team) {
        return db.execute('SELECT COUNT(*) as manuallyCreatedTrue FROM leads WHERE manuallyCreated = "true" AND leadTeam = ?', [team]);
    },
    
    getManuallyCreatedFalse: function(team) {
        return db.execute('SELECT COUNT(*) as manuallyCreatedFalse FROM leads WHERE manuallyCreated = "false" AND leadTeam = ?', [team]);
    },
    
    getHourlyMessageActivity: function(team) {
        return db.execute(`
            SELECT HOUR(firstMessageTime) as hour, COUNT(*) as count 
            FROM leads 
            WHERE firstMessageTime IS NOT NULL AND leadTeam = ?
            GROUP BY HOUR(firstMessageTime)
            ORDER BY HOUR(firstMessageTime) ASC;
        `, [team]);
    },
    
    getArchived: function(team) {
        return db.execute('SELECT COUNT(*) as archived FROM leads WHERE archived = "Si" AND leadTeam = ?', [team]);
    },
    
    getNotArchived: function(team) {
        return db.execute('SELECT COUNT(*) as notArchived FROM leads WHERE archived = "No" AND leadTeam = ?', [team]);
    },

    getTotalGain: function(team) {
        return db.execute('SELECT SUM(gain) as totalGain FROM leads WHERE leadTeam = ?', [team]);
    },
    
    getLeadsPerMonth: function(team) {
        return db.execute(`
            SELECT MONTHNAME(createdAt) as month, COUNT(*) as leadsCount 
            FROM leads 
            WHERE leadTeam = ? 
            GROUP BY MONTH(createdAt) 
            ORDER BY MONTH(createdAt) ASC`, 
            [team]
        );
    },
    

    getNeutral: function(team) {
        return db.execute('SELECT COUNT(*) as neutral FROM leads WHERE status = "NEUTRAL" AND leadTeam = ?', [team])
    },

    getUrgent: function(team) {
        return db.execute('SELECT COUNT(*) as urgent FROM leads WHERE status = "URGENT" AND leadTeam = ?', [team])
    },

    getImportant: function(team) {
        return db.execute('SELECT COUNT(*) as important FROM leads WHERE status = "IMPORTANT" AND leadTeam = ?', [team])
    },

    getPending: function(team) {
        return db.execute('SELECT COUNT(*) as pending FROM leads WHERE status = "PENDING" AND leadTeam = ?', [team])
    },

    getStuck: function(team) {
        return db.execute('SELECT COUNT(*) as stuck FROM leads WHERE status = "STUCK" AND leadTeam = ?', [team])
    },

    getValueAndGainPerCompany: function(team) {
        return db.execute('SELECT company, SUM(value) as totalValue, SUM(gain) as totalGain FROM leads WHERE leadTeam = ? GROUP BY company', [team]);
    },
    
    getLeadsPerStage: function(team) {
        return db.execute('SELECT stage, COUNT(*) as leadsCount FROM leads WHERE leadTeam = ? GROUP BY stage', [team])
            .then(result => {
                console.log(result);  // Agrega este log para verificar el resultado
                return result;
            });
    },   

};