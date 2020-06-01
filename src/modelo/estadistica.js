const { Schema , model } = require('mongoose');

const estadSchema = new Schema({

    titulo: String,
    content: {
        type: String,
        required: true
    },
    nombreJugador: String,
    campeonganado: String,
    fechaUltmCampeon: Date,
     
    author: String
    },
    {
        timestamps: true
   
});

module.exports = model('estdistica', estadSchema);