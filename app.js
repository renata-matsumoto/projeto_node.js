// Inicializar o NPM
// NPM init
// definido a descrição e o autor do projeto
// Iniciar o Git
// git init
// Express
// npm install express
// NODEMON
// npm install -g nodemon
// EJS
// npm install ejs

const app = require('./config/server')

// rota home
app.get('/', function(req,res){
    res.render('home/index')
})

// rota notícias
app.get('/noticias', function(req,res){
   res.render('noticias/noticias')
})


app.listen(3000, () => {
    console.log('Servidor rodando com express, http://localhost:3000')
    console.log('Pressione CTRL+C para encerrar')
})