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

const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);

const rutasPagoAlumno = require('./routes/pago_alumno.routes');
app.use('/user/alumno', rutasPagoAlumno);

const rutasPago = require('./routes/pago.routes'); // Asegúrate de que la ruta sea correcta
app.use('/pagos', rutasPago);

const cicloEscolarRoutes = require('./routes/ciclo_escolar.routes');
app.use('/user/admin', cicloEscolarRoutes);

const rutasUsuario = require('./routes/usuario.routes');
app.use('/user', rutasUsuario);

const rutasRegistrarPago = require('./routes/registrarPago.routes');
app.use('/user', rutasRegistrarPago);

const rutasDeuda = require('./routes/crearDeuda.routes');
app.use('/user', rutasDeuda);

const rutasListaUsuarios = require('./routes/lista_usuarios.routes');
app.use('/user/admin', rutasListaUsuarios);

// Manejo de errores de 404
app.use((request, response, next) => {
  response.status(404).send('Error 404: La página que buscas no existe');
});


// Iniciar el servidor
app.listen(2050, () => {
  console.log('El servidor está corriendo en el puerto 2050');
});


