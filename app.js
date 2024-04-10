const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de la sesión
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false,
  saveUninitialized: false,
}));

const csrfProtection = csrf();
app.use(csrfProtection);

app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});

// Importación de rutas
const rutasUsuario = require('./routes/usuario.routes');
const rutasHome = require('./routes/home.routes');
const rutasDeuda = require('./routes/deuda.routes');
const rutasPagoAlumno = require('./routes/pago_alumno.routes');
const rutasPago = require('./routes/pago.routes');
const adminDashboardRoutes = require('./routes/admin_dashboard.routes');
const reportesRoutes = require('./routes/reportes.routes');

// Configuración de rutas
app.use('/user', rutasUsuario);
app.use('/', rutasHome);
app.use('/user/deuda', rutasDeuda); // Asegúrate de que las rutas en deuda.routes.js no tengan el prefijo '/user' delante.
app.use('/user/alumno/pagos', rutasPagoAlumno); // Ajusta las rutas en pago_alumno.routes.js acordemente.
app.use('/pagos', rutasPago);
app.use('/user/admin', adminDashboardRoutes);
app.use('/reportes', reportesRoutes); // Asegúrate de que las rutas en reportes.routes.js no tengan el prefijo '/reportes' delante.

// Manejo de errores de 404
app.use((req, res) => {
    res.status(404).send('Error 404: La página que buscas no existe');
});

// Iniciar el servidor
app.listen(2050, () => {
  console.log('El servidor está corriendo en el puerto 2050');
});
