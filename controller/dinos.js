const dinosaurios = require('../model/dinos')

  function getDino(req, res) {
    console.log('entro al get');
    res.json ([]);
  };

function postDino(req, res) {
  dinosaurios.insertDino(err, dinoStored)
    if (err) res.status(500).send({message: 'no se guardo el dino :('})
    res.status(200).send({message: 'se guardo el dino! '})

};




module.exports = {
  getDino,
  postDino,
  //putDino
  //deleteDino
};
