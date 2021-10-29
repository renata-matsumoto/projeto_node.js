// modulo de configuração do servidor

const express = require('express')

const app = express()

// define o moto de vies como sendo o ejs
app.set('view engine', 'ejs')

// setar o diretório de views do EJS 
app.set('views', './app/views')


// Configuração dos arquivos estáticos
app.use(express.static('./app/public'))

module.exports = app