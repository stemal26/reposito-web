const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
  nombre:  String,
  descripcion: String
});



//crear modelo
const Mascota = mongoose.model('prueba2', mascotaSchema);


module.exports = Mascota;
