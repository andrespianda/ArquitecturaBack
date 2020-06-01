const { Router } = require('express');
const router = Router();

const { getEstads, postEstad, getEstad, putEstad, deleteEstad } = require('../controlador/estadisticas.controlador')
router.route('/')
    //.get((req,res) => res.send('estas son las estadisticas'))
    .get(getEstads)
    .post(postEstad)

router.route('/:id')
    .get(getEstad)
    .put(putEstad)
    .delete(deleteEstad)

module.exports = router;