const express = require('express')

// Atibuindo funções a variável route
const route = express.Router()

// renderizando o diretório informado
route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

module.exports = route