const express = require ('express')
const bodyParser = require ('body-parser')
const morgan = require ('morgan')
const app = express ()


//setting siesque quiero hostearlo en otro lado
app.set('port', 3000);

//middleware, funciones que se ejecutan cada vez que hay una peticion
app.use(morgan('dev'));
app.use(bodyParser.json());

//rutass -> controler ->model -> sql
const rutas = require ('./routes/rutas')


app.listen(app.get('port'), () => {
console.log('esta sonando en el puerto 3000');
});
