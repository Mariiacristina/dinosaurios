const mysql = require('mysql');


connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'dinosauriosDB',
});


function insertDino(dino, status) {
  if(connection){
  connection.query('INSERT INTO dinosauriosDB SET ?', dino)
} else {
  throw err;
}};





module.exports = {
  insertDino,
};
