const { Router } = require('express');
const router = Router();


const { getUsuarios, postUsu, getUsu, putUsu, deleteUsu } = require('../controlador/usuarios.controlador')
router.route('/')
    //.get((req,res) => res.send('estas son las estadisticas'))
    .get(getUsuarios)
    .post(postUsu)

router.route('/:id')
    .get(getUsu)
    .put(putUsu)
    .delete(deleteUsu)
module.exports = router;
