const dinosaurios = require('../model/dinos')

  function getDino(req, res) {
    console.log('entro al get');
    res.json ([]);
  };

function postDino(dataDino, res) {
  dinosaurios.insertDino(dataDino, (err, res) => {
    if (err) {res.status(500).send({message: 'no se guardo el dino :('})
  }else {
    res.status(200).send({message: 'se guardo el dino! '})
  }}
)};




module.exports = {
  getDino,
  postDino,
  //putDino
  //deleteDino
};

/*
{
	"nombre" : "Tiranosaurio Rex",
	"tipo": "Terrestre",
	"tipo_alimento": "Carnivoro",
	"region": "America del Norte"
}


*/
