const cicloescolar = require('../models/ciclo_escolar.model');

exports.get_nuevo_ciclo = async (request, response, next) => {
    const cicloID = request.query.IDCiclo;
    if (cicloID) {
        try {
            const [ciclos] = await cicloescolar.fetchOne(cicloID);
            if (ciclos.length > 0) {
                response.render('ciclo_escolar', {
                    csrfToken: request.csrfToken(),
                    ciclo: ciclos[0], // Asegúrate de que esté pasando el primer ciclo si existe
                    correo: request.session.correo,
                    permisos: request.session.permisos,
                    rol: request.session.roles,
                    nombre: request.session.nombre
                });
            } else {
                response.redirect('/'); // Redirige si el ciclo no existe
            }
        } catch (error) {
            console.error('Error fetching ciclo:', error);
            response.status(500).render('error', { error: 'Error al obtener los datos del ciclo' });
        }
    } else {
        // Si no hay IDCiclo, pasa un ciclo vacío para un nuevo registro
        response.render('ciclo_escolar', {
            csrfToken: request.csrfToken(),
            ciclo: {},
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre
        });
    }
};

exports.post_nuevo_ciclo = async (request, response, next) => {
    const { IDCiclo, Ciclo, Fecha_Inicio, Fecha_Fin, Ciclo_activo, Precio_credito, IDCicloEXT } = request.body;
    try {
        if (IDCiclo) {
            // Llama directamente al método estático
            await cicloescolar.update(IDCiclo, Ciclo, Fecha_Inicio, Fecha_Fin, Ciclo_activo === 'on' ? 1 : 0, Precio_credito, IDCicloEXT);
        } else {
            // Crear una nueva instancia y luego guardar
            const nuevo_ciclo = new cicloescolar(Ciclo, Fecha_Inicio, Fecha_Fin, Ciclo_activo, Precio_credito, IDCicloEXT);
            await nuevo_ciclo.save();
        }
        response.redirect('/user/admin/lista_ciclos')
    } catch (err) {
        console.error('Error en el proceso:', err);
        response.status(500).send('Error al procesar datos');
    }
};