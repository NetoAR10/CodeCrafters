const express = require('express');
const mysql = require('mysql2/promise');
const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false,
  saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const csrfProtection = csrf();
app.use(csrfProtection);

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

// Configuración de multer para la carga de archivos CSV
const csvUpload = multer({ dest: 'uploads/' });

// Rutas
const rutasUsuario = require('./routes/usuario.routes');
const rutasHome = require('./routes/home.routes');
const rutasPagoAlumno = require('./routes/pago_alumno.routes');
const rutasPago = require('./routes/pago.routes');
const rutasRegistrarPago = require('./routes/registrarPago.routes');
const rutasCrearDeuda = require('./routes/crearDeuda.routes');
const rutasListaUsuarios = require('./routes/lista_usuarios.routes');
const csvRoutes = require('./routes/csv.routes'); // Asegúrate de que este archivo esté bien configurado

app.use('/user', rutasUsuario);
app.use('/', rutasHome);
app.use('/user/alumno', rutasPagoAlumno);
app.use('/pagos', rutasPago);
app.use('/user/admin', rutasRegistrarPago);
app.use('/user/admin', rutasCrearDeuda);
app.use('/user/admin', rutasListaUsuarios);
app.use('/csv', csvRoutes); // Rutas para la carga de CSV

// Ruta de ejemplo para el historial de pagos
app.get('/historial-pagos', async (req, res) => {
  try {
    // Asegúrate de que la variable 'pool' está definida y configurada correctamente
    const [rows, fields] = await pool.query('SELECT * FROM pago');
    res.render('historialPago', { pageTitle: 'Historial de Pagos', payments: rows });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos de pagos');
  }
});

// Manejo de errores de 404
app.use((req, res) => {
  res.status(404).send('Error 404: La página que buscas no existe');
});

// Iniciar el servidor
app.listen(2050, () => {
  console.log('El servidor está corriendo en el puerto 2050');
});

module.exports = app; // Si necesitas exportar tu aplicación para testing u otros propósitos
