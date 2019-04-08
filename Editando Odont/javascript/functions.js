function myFunction() {
			  var x = document.getElementById("cabecalho");
			  if (x.className === "header") {
			    x.className += " responsive";
			  } else {
			    x.className = "header";
			  }
			}