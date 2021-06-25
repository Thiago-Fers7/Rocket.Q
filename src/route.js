const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// Atibuindo funções a variável route
const route = express.Router()

// renderizando o diretório informado
route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))
route.get('/room/:room', (req, res) => res.render('room'))

// Formato que o formulário de dentro do modal tem que passar a informção
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)


module.exports = route