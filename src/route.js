const express = require('express')
const questionController = require('./controllers/QuestionController')

// Atibuindo funções a variável route
const route = express.Router()

// renderizando o diretório informado
route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

// Formato que o formulário de dentro do modal tem que passar a informção
route.post('/room/:room/:question/:action', questionController.index)


module.exports = route