const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  }));

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

app.use((request, response, next) => {
    console.log('Start!');
    next();
})


const rutasUsuario = require('./routes/usuario.routes');
app.use('/user', rutasUsuario);

const rutasHome = require('./routes/home.routes');
app.use('/', rutasHome);

const rutasDeuda = require('./routes/deuda.routes');
app.use('/user', rutasDeuda);

const rutasPagoAlumno = require('./routes/pago_alumno.routes');
app.use('/user/alumno', rutasPagoAlumno);

const admin_dasboard = require('./routes/admin_dashboard.routes');
app.use('/user/admin', admin_dasboard);


app.listen(2050);