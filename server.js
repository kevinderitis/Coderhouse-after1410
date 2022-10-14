const express = require('express')
const app = express()
const routerProductos = require('./routes/productos')
const routerCarritos = require('./routes/carritos')

app.use('/api/productos', routerProductos)
app.use('/api/carritos', routerCarritos)




const server = app.listen(8080, () => console.log('server running'))
server.on('error', error => console.log(error))