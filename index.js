const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('¡Hola, mundo! Este es el backend del programa de hola mundo.')
})

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
