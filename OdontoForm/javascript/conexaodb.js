// Realiza a conexão com o banco de dados ('tipoDeBanco://user:senha@host:porta/database')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://D5EYPCG5Du:cRawXRJKYj@remotemysql.com:3306/D5EYPCG5Du');

// Confirmação de autenticação
	sequelize.authenticate()
	.then(() => {
		console.log("Conectado com sucesso");
	})
	.catch(err=> {
		console.error("Falha ao se conectar", err);
	});
	

//Create table na 1° vez pelo sequelize e depois serve para inserir na tabela: 
	
	const triagem = sequelize.define('triagem', {
		nome: {
			type: Sequelize.STRING(40)
		},
		cpf:{
			type: Sequelize.INTEGER(14)
		},
		data-nasc:{
			type: Sequelize.DATE(6)
		},
		email:{
			type: Sequelize.STRING(40)
		},
		sexo:{
			type: Sequelize.BOOLEAN(1)
		},
		sintomas:{
			type: Sequelize.STRING(100)
		}
	});

//exporta para ser usado em outros arquivos
module.exports = triagem
	
	/*Executa a criação da tabela, usar 1 vez apenas:

	triagem.sync({force: true});*/

	