const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const path = require('path');

// Configuración de la sesión
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false,
  saveUninitialized: false,
}));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const csrfProtection = csrf();
app.use(csrfProtection);

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken(); // Asegúrate de enviar el token CSRF a las vistas
    next();
});

// Rutas
const rutasUsuario = require('./routes/usuario.routes');
app.use('/user', rutasUsuario);

const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);

const rutasDeuda = require('./routes/deuda.routes');
app.use('/user', rutasDeuda);

const rutasPagoAlumno = require('./routes/pago_alumno.routes');
app.use('/user/alumno', rutasPagoAlumno);

const rutasPago = require('./routes/pago.routes'); // Asegúrate de que la ruta sea correcta
app.use('/pagos', rutasPago);

const adminDashboardRoutes = require('./routes/admin_dashboard.routes');
app.use('/user/admin', adminDashboardRoutes);

// Manejo de errores de 404
app.use((request, response, next) => {
    response.status(404).send('Error 404: La página que buscas no existe');
});

// Iniciar el servidor
app.listen(2050, () => {
  console.log('El servidor está corriendo en el puerto 2050');
});
