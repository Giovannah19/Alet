function myFunction() {
			  var x = document.getElementById("cabecalho");
			  if (x.className === "header") {
			    x.className += " responsive";
			  } else {
			    x.className = "header";
			  }
			}


function salvar(){
	nome = document.getElementById("name").value;
	cpf = document.getElementById("cpf").value;
	dt_nasc = document.getElementById("dt_nasc").value;
	email = document.getElementById("email").value;
	sexo = document.getElementById("sexo").value;
	sintomas = document.getElementById("sintomas").value;

	if (nome == "") {
			alert( "Você precisa digitar o nome do paciente!" );
			return false;
		}
	if (senha == "" || conf_senha == "") {
			alert( "Você precisa digitar uma senha e confirmá-la" );
			return false;
		}
	if (senha != conf_senha) {
			alert( "As senhas não coincidem!" );
			return false;
		}
	if ((senha.length < 6 || senha.length > 10) || (conf_senha.length < 6 || conf_senha.length > 10)) {
			alert( "As senhas precisam ter entre 6 e 10 caracteres!" );
			return false;
		}	
		return true
	}


