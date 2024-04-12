const express = require('express');
const mysql = require('mysql2/promise'); // Asegúrate de tener este paquete instalado
const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'tu_usuario',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  waitForConnections: true,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
  resave: false,
  saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const csrfProtection = csrf();
app.use(csrfProtection);

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

// Rutas
const rutasUsuario = require('./routes/usuario.routes');
const rutasHome = require('./routes/home.routes');
const rutasPagoAlumno = require('./routes/pago_alumno.routes');
const rutasPago = require('./routes/pago.routes');
const adminDashboardRoutes = require('./routes/admin_dashboard.routes');
const rutasRegistrarPago = require('./routes/registrarPago.routes');
const rutasDeuda = require('./routes/crearDeuda.routes');

app.use('/user', rutasUsuario);
app.use('/', rutasHome);
app.use('/user/alumno', rutasPagoAlumno);
app.use('/pagos', rutasPago);
app.use('/user/admin', adminDashboardRoutes);
app.use('/user', rutasRegistrarPago);
app.use('/user', rutasDeuda);

// Manejo de errores de 404
app.use((req, res) => {
  res.status(404).send('Error 404: La página que buscas no existe');
});

// Ruta de ejemplo para el historial de pagos
app.get('/historial-pagos', async (req, res) => {
  try {
    // Ajusta la consulta SQL según tus necesidades
    const [rows, fields] = await pool.query('SELECT * FROM pago');
    res.render('historialPago', { pageTitle: 'Historial de Pagos', payments: rows });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los datos de pagos');
  }
});

// Iniciar el servidor
app.listen(2050, () => {
  console.log('El servidor está corriendo en el puerto 2050');
});

module.exports = app; // Si necesitas exportar tu aplicación para testing u otros propósitos
