const triagem = require('./conexaodb')

//Create table na 1° vez pelo sequelize e depois serve para inserir na tabela:
const Triagem = triagem.sequelize.define('triagem', {
	nome: {
		type: triagem.Sequelize.STRING(40)
	},
	cpf:{
		type: triagem.Sequelize.INTEGER(20)
	},
	dt_nasc:{
		type: triagem.Sequelize.DATE
	},
	email:{
		type: triagem.Sequelize.STRING(40)
	},
	sexo:{
		type: triagem.Sequelize.STRING(25)
	},
	sintomas:{
		type: triagem.Sequelize.STRING(100)
	}
});

//Inclui o modulo do banco de dados

module.exports = Triagem;

/*Executa a criação da tabela, usar 1 vez apenas: Triagem.sync({force: true});*/