const cicloescolar = require('../models/ciclo_escolar.model');

exports.get_listciclos = async (request, response, next) => { 
    try {
        const [rows] = await cicloescolar.fetchAll()
        response.render('lista_ciclos', {
            csrfToken: request.csrfToken(),
            correo: request.session.correo,
            permisos: request.session.permisos,
            rol: request.session.roles,
            nombre: request.session.nombre,
            ciclosDB: rows
        })
    } catch (err) {
        console.error('Error al obtener ciclos: ', err);
        response.status(500).render('lista_ciclos', {
            csrfToken: request.csrfToken(),
            error: 'No se pudo cargar la información de las materias.'
        });
    }
};

exports.get_buscar = (request, response, next) => {
    cicloescolar.search(request.params.valor_busqueda || '')
    .then(([rows, fieldData]) => {
        return response.status(200).json({rows})
    })
    .catch((error) => {console.log(error)});
}

exports.post_actualizar_activo = async (request, response, next) => {
    const { id, cicloActivo } = request.body;

    if (cicloActivo == 1) {
        // Verificar si ya existe un ciclo activo
        const [rows] = await cicloescolar.fetchAllActive();
        if (rows.length > 0 && !rows.some(row => row.ID == id)) {
            return response.json({ error: true, message: 'Ya existe un ciclo activo. Debe desactivar el otro ciclo primero.' });
        }
    }

    cicloescolar.updateActivo(id, cicloActivo)
        .then(() => {
            response.json({ message: 'Estado actualizado correctamente!' });
        })
        .catch(error => {
            console.error('Error al actualizar estado:', error);
            response.status(500).json({ error: 'No se pudo actualizar el estado.' });
        });
};

