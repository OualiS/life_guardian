const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: { type: String, required: true },
    repas: { type: Array, required: false }        
});

module.exports = mongoose.model('day', daySchema);