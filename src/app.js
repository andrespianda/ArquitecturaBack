//extender codigo basico del servidor

//creacion del servidor
const express = require('express');
const cors = require('cors'); //
const app = express();

//configuraciones

app.set('port',process.env.PORT || 4000);

//medios O MIDLEWARE para intercambiar informacion entre servidores
app.use(cors());
app.use(express.json());

//rutas
//app.get('/users',(req, res) => res.send('Users routes'))
//app.get('/estadistica',(req, res) => res.send('Users routes'))

app.use('/api/usuarios', require('./rutas/usuarios'))
app.use('/api/estadisticas', require('./rutas/estadisticas'))


module.exports = app;