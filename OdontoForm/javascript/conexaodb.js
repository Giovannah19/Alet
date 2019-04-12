// Realiza a conexão com o banco de dados ('tipoDeBanco://user:senha@host:porta/database')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://33uRoApLH8:ktJXvfs0EQ@remotemysql.com:3306/33uRoApLH8');

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
		datanasc:{
			type: Sequelize.DATE
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
	
	/*Executa a criação da tabela, usar 1 vez apenas:*/

	triagem.sync({force: true});

	