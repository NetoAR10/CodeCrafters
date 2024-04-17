const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const path = require('path');
const csvRoutes = require('./routes/csv.routes');
const canUploadCsvMiddleware = require('./util/can-upload-csv.js'); // Asegúrate de tener este archivo en la ruta correcta

// Configuración de la sesión
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false,
  saveUninitialized: false,
}));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
const csrfProtection = csrf();
app.use(csrfProtection);

app.use((request, response, next) => {
  response.locals.csrfToken = request.csrfToken();
  next();
});

// Rutas
const rutasAlumno = require('./routes/alumno.routes');
app.use('/user/alumno', rutasAlumno);

const rutasAdmin = require('./routes/admin.routes');
app.use('/user/admin', rutasAdmin);

const rutasPago = require('./routes/pago.routes');
app.use('/pagos', rutasPago);

const rutasUsuario = require('./routes/usuario.routes');
app.use('/user', rutasUsuario);

const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);

// Aquí asegúrate de incluir el middleware antes de tus rutas de CSV
app.use('/csv', canUploadCsvMiddleware, csvRoutes);

// Manejo de errores de 404
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html'));
});

// Iniciar el servidor
app.listen(2050, () => {
  console.log('El servidor está corriendo en el puerto 2050');
});
