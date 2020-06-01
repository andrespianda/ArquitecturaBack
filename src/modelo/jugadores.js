const { Schema, model}= require('mongoose');

const jugadorSchema = new Schema ({
    usuario: {
        type: String,
        required: true,
        trim: true, /**eliminar espacios */
        unique: true},

    numIdentif: {
            type: String,
            required: true,
            trim: true,
            unique:true
    },
    nomUsuario1: {
        type: String,
        required: true,
        trim: true
    },
    nomUsuario2: {
        type: String,
        required: false,
        trim: true
    },
    Apellido1: {
        type: String,
        required: true,
        trim: true
    },
    Apellido2: {
        type: String,
        required: false,
        trim: true
    },



    },{timestamps: true


});

module.exports = model('usuario',usuSchema );
