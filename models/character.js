const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: String,
    class: cla,
    level: Number
});


module.exports = mongoose.models('Character', characterSchema);