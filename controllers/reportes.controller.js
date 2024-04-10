const db = require("../util/database");

const ReportsModel = require('../models/reports.model');

exports.getReport = async (request, response, next) => {
    try {
        const team = request.session.user.team;
    if (!team) {
    console.error("Team not found in session.");
    return response.status(400).send("Team information is missing.");
    }

        const[manuallyCreatedTrue] = await ReportsModel.getManuallyCreatedTrue(team);
        const[manuallyCreatedFalse] = await ReportsModel.getManuallyCreatedFalse(team);

        const [totalLeads] = await ReportsModel.getLeadsCount(team);
        const [arrivedLeads] = await ReportsModel.getArrivedLeadsCount(team);

        const [hourlyMessageActivity] = await ReportsModel.getHourlyMessageActivity(team);

        const hourlyData = Array(24).fill(0); // Inicializa un array con 24 ceros (uno para cada hora).

        for (let result of hourlyMessageActivity) {
            hourlyData[result.hour] = result.count;
        }

        const[archived] = await ReportsModel.getArchived(team);
        const[notArchived] = await ReportsModel.getNotArchived(team);

        const [totalGain] = await ReportsModel.getTotalGain(team);

        const leadsPerMonth = await ReportsModel.getLeadsPerMonth(team);

        
        const valueAndGainPerCompany = await ReportsModel.getValueAndGainPerCompany(team);
        const leadsPerStage = await ReportsModel.getLeadsPerStage(team);

        const[neutral] = await ReportsModel.getNeutral(team);
        const[urgent] = await ReportsModel.getUrgent(team);
        const[important] = await ReportsModel.getImportant(team);
        const[pending] = await ReportsModel.getPending(team);
        const[stuck] = await ReportsModel.getStuck(team);

        response.render('pagos/reportes.ejs', {
            team: team,
            totalLeads: totalLeads[0].totalLeads,
            arrivedLeads: arrivedLeads[0].arrivedLeads,
            manuallyCreatedTrue: manuallyCreatedTrue[0].manuallyCreatedTrue,
            manuallyCreatedFalse: manuallyCreatedFalse[0].manuallyCreatedFalse,
            hourlyActivity: hourlyData,
            archived: archived[0].archived,
            notArchived: notArchived[0].notArchived,
            totalGain: totalGain[0].totalGain || 0,  // Si no hay ganancias, se establece en 0.
            leadsPerMonth: leadsPerMonth[0],
                        neutral: neutral[0].neutral,
            urgent: urgent[0].urgent,
            important: important[0].important,
            pending: pending[0].pending,
            stuck: stuck[0].stuck,
            valueAndGainPerCompany: valueAndGainPerCompany,
            leadsPerStage: leadsPerStage,


            // Priviledges:
            isLoggedIn: request.session.isLoggedIn || false,
            priviledges: request.session.priviledges || [],
            canUpload: request.canUpload,
            canConsultReports: request.canConsultReports,
            canConsultUsers: request.canConsultUsers,
            canAddUser: request.canAddUser,
            canDownloadPDF: request.canDownloadPDF,
        });
    } catch(error) {
        console.error(error);
        next(error);
    }
};