const express = require('express');
const app = express();


const triagem = require('./javascript/conexaodb')


//leva para a pagina da home
app.get("/" , function(req,res){
  res.sendFile(__dirname +"/html/index.html")
});
//leva para a pagina de triagem
app.get("/triagem", function(req,res){
	res.sendFile(__dirname + "/html/triagem.html")
});

//seta os dados no banco
app.post("/triagem", function(req,res){
   triagem.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
    sexo: req.body.sexo,
    sintomas: req.body.sintomas
  }).then(function(){
    res.send("Dados enviados com sucesso")
  }).catch(function(erro){
    res.send("Erro ao enviar os dados" + erro)
  })
});

 
app.listen(3000, function(){
	console.log("Servidor Rodando!")
});