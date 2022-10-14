const express = require('express');
const { Router } = express;
const { authMiddleware } = require('../middlewares')
const routerProductos = Router()
const ContenedorProductos = require('../contenedores/productos') // incluir clase contenedor para poder usar

routerProductos.get('/:id?', (req, res) => {
    let resultado = ContenedorProductos.obtenerProductos(req.params.id)
    res.send(resultado)
})

routerProductos.post('/', authMiddleware ,(req, res) => {
    res.send('post productos ok')
})

routerProductos.put('/', authMiddleware ,(req, res) => {
    res.send('put productos ok')
})

module.exports = routerProductos;