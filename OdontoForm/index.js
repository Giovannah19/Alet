const express = require('express');
const app = express();
const router = express.Router()
const path = require('path')
__dirname = path.resolve();
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const Triagem = require('./javascript/Triagem')

//Template Engine Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Paser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname + '/')));

//leva para a pagina da home
app.get("/" , function(req,res){
  res.render('index')
});

//leva para a pagina de triagem
app.get("/triagem", function(req,res){
	res.render('triagem')
});

// Lista a tabela do banco
app.get("/ocorrencias", function(req,res){
  Triagem.findAll().then(function(fichas){
    res.render('ocorrencias',{fichas:fichas})
  })
});

//Preenche os dados no banco 
app.post("/triagem", function(req,res){
    Triagem.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    dt_nasc: req.body.dt_nasc,
    email: req.body.email,
    sexo: req.body.sexo,
    sintomas: req.body.sintomas
  }).then(function(){
    res.send(res.redirect('/ocorrencias'))
  }).catch(function(erro){
    res.send("Erro ao enviar os dados" + erro)
  })
});

app.get('/deletar/:id',function(req,res){
  Triagem.destroy({where:{'id': req.params.id}}).then(function(){
    res.send("Ficha deletada !")
  }).catch(function(erro){
      res.send("Erro a encontrar a ficha" + erro)
  })
})

app.listen(3000, function(){
	console.log("Servidor Rodando!")
});