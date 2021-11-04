// modulo de configuração do servidor

const express = require('express')

const session = require('express-session')

const app = express()

// define o moto de vies como sendo o ejs
app.set('view engine', 'ejs')

// setar o diretório de views do EJS 
app.set('views', './app/views')


// Configuração dos arquivos estáticos
app.use(express.static('./app/public'))

// Configuração do body-parser para receber informações por POST
app.use(express.urlencoded({extended: true}))

// Configurar o express-session
app.use(session({
    secret : 'kdj*/"_D57mL33#K', // chave secreta para criptografar o cookie, chave de segurança, 
    resave : false,
    // define que a sessão não será salva se não tiver sido alterada, não cria nova sessões
    saveUninitialized : false
    // evita armazenar aplicações não inicializadas, vazias

}))

module.exports = app