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

// Importação da base de dados mockup.js
const noticias = require('./mockup')

// rota home
app.get('/', function(req, res){
    res.render('home/index' ,  {noticias: noticias.slice(0, 3)})
})

// rota notícias
app.get('/noticias', function(req, res){
    // vamos passar atravez de um JSON o conteúdo da variável noticias
    res.render('noticias/noticias', {noticias : noticias})
})

// rota noticia
app.get('/noticia', function(req, res){
    // metodo GEt recurepa o Id da noticia
    const id = req.query.id
    res.render('noticias/noticia', {noticia : noticias[id]})
})

// rota admin
app.get('/admin', function(req, res){
    res.render('admin/form_add_noticia')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
    console.log('Pressione CTRL + C para encerrar')
})
