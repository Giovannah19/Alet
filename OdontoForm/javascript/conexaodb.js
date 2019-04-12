// Realiza a conexão com o banco de dados ('tipoDeBanco://user:senha@host:porta/database')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://ltg1uis3vC:uIcXWyU22C@remotemysql.com:3306/ltg1uis3vC');

// Confirmação de autenticação
	sequelize.authenticate()
	.then(() => {
		console.log("Conectado com sucesso");
	})
	.catch(err=> {
		console.error("Falha ao se conectar", err);
	});
 
 //exporta para ser usado em outros arquivos
module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}
	

	