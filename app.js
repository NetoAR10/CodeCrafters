const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
const csrf = require('csurf');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const path = require('path');

// Configuración de la sesión
app.use(session({
  secret: 'string secreto muy largo', // Usa un string seguro y largo
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
    response.locals.csrfToken = request.csrfToken(); // Enviar token CSRF a las vistas
    next();
});

// Rutas
const rutasAlumno = require('./routes/alumno.routes');
app.use('/user/alumno', rutasAlumno);

const rutasAdmin = require('./routes/admin.routes');
app.use('/user/admin', rutasAdmin);

const rutasPago = require('./routes/pago.routes'); // Asegúrate de que la ruta sea correcta
app.use('/pagos', rutasPago);

const rutasUsuario = require('./routes/usuario.routes');
app.use('/user', rutasUsuario);

const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);

// Manejo de errores de 404
app.use((request, response, next) => {
  response.status(404);
  response.sendFile(
    path.join(__dirname, 'views', '404.html')
  );
});

// Iniciar el servidor
const PORT = process.env.PORT || 2050; 
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`); 
});
