const express = require('express')
const BiblioDino = require('../controller/dinos')
const oye = express.Router()



//crud dinos
oye.get('/dinos', BiblioDino.getDino)
oye.post('/dinos', BiblioDino.postDino)
//oye.put('/dinos', BiblioDino.putDino)
//oye.delete('/dinos', BiblioDino.deleteDino)


module.exports = oye;
