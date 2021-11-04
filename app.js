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
// npm install pg
// npm install express-session

const app = require('./config/server')

// Importação da base de dados mockup.js
const noticias = require('./mockup')

// Importação do modulo de conexão com o banco de dados
const db = require('./config/dbConnection')

// rota home
app.get('/', function(req, res){
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3', function(error, result){
        // console.log(result.rows)
        res.render('home/index' ,  {noticias: result.rows})
    })
})

// rota notícias
app.get('/noticias', function(req, res){
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC', function(error, result){ 
        console.log(result.rows)
        // vamos passar atravez de um JSON o conteúdo da variável noticias
        res.render('noticias/noticias', {noticias : result.rows})
    })
})

// rota noticia
app.get('/noticia', function(req, res){
    // metodo GEt recurepa o Id da noticia
    const id = req.query.id
    
    db.query('SELECT * FROM noticias WHERE id_noticia = $1', [id], function(error, result){
        console.log(result.rows[0])
        res.render('noticias/noticia', {noticia : result.rows[0]})
    })
})

// rota admin
app.get('/admin', function(req, res){
    // verificar se a sessão já existe com a variável autorizado
    if(req.session.autorizado == true){
        res.render('admin/form_add_noticia', {autorizado : req.session.autorizado})

    }else{
        // se não existir irá abrir a página de login
        res.render('admin/login')
    }

    
})

// rota para finalizar a sessão
app.get('/admin/sair', function(req, res){
req.session.destroy((error) => {/*console.log(error)*/})
res.redirect('/admin')
})

// rota salvar form notícia
app.post('/admin/salvar-noticia', function(req, res){
    // recuperar informações passadas por post, no corpo da requisição
    const { titulo, conteudo } = req.body
    // console.log(titulo, conteudo)

    db.query('Insert INTO noticias(titulo, conteudo) VALUES ($1, $2)', [titulo, conteudo], function(error, result){
        res.redirect('/noticias')
    })
})



// rota de autenticação
app.post('/admin/autenticar', function(req, res){
    // recuperar informações passadas por post, no corpo da requisição
    const { usuario, senha } = req.body
    console.log(usuario, senha)

    // db.query('Insert INTO noticias(usuario, senha) VALUES ($1, $2)', [usuario, senha], function(error, result){
    //     res.redirect('/login')
    // })
    if(usuario == "root" && senha == "cellep1234"){
        req.session.autorizado = true
    }
    res.redirect('/admin')
})

// usuario == root
// senha == cellep1234





app.listen(3000, () => {
    console.log('Servidor rodando com express')
    console.log('Pressione CTRL + C para encerrar')
})
