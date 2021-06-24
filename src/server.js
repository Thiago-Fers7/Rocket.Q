const express = require('express')
const route = require('./route')
const path = require('path')

// Iniciando o servidor
const server = express()

// definindo quem vai ser a engine mostrada em tela
server.set('view engine', 'ejs')

// Definindo pasta publica
server.use(express.static('public'))

// Definindo a pasta que engine está
server.set('views', path.join(__dirname, 'views'))

// Habilitando as rotas definidas no aquivo routes.js
server.use(route)

// Definindo a porta do servidor em que ele vai rodas e exibindo a mensagem que está rodando
server.listen(3000, () => console.log('RODANDO'))