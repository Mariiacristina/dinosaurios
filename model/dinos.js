const mysql = require('mysql');


connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'dinosauriosDB',
});


function insertDino(req, res) {
  if(connection){
      const dino = {
        id: null,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        tipo_alimento: req.body.tipo_alimento,
        region: req.body.region,
        created_at: null
      };

      connection.query('INSERT INTO dinosaurios SET ?', dino, (err, result) => {
        if(err) {throw err; }
        else {res(null, dino)}
      })
    }};





module.exports = {
  insertDino,
};
