const express = require ('express')
const bodyParser = require ('body-parser')
const morgan = require ('morgan')
const app = express ()
const rutas = require ('./routes/rutas')


//setting siesque quiero hostearlo en otro lado
app.set('port', 3000);

//middleware, funciones que se ejecutan cada vez que hay una peticion
app.use(morgan('dev'));
app.use(bodyParser.json());

//rutass -> controler ->model -> sql
app.use('/', rutas);


app.listen(app.get('port'), () => {
console.log('esta sonando en el puerto 3000');
});
