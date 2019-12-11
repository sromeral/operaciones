function calcular() {
	var radios = document.getElementsByName("operacion");
	var cantidad = radios.length;
	var operacion;

	for (var i = 0; i < cantidad; i++) {
		if (radios[i].checked) {
			operacion = radios[i].value;
			break;
		}
	}

	var numero1 = parseInt(document.getElementById("numero1").value);
	var numero2 = parseInt(document.getElementById("numero2").value);

	var resultado;
	
	if (operacion === "suma") {
		resultado = numero1 + numero2;
	}
	else {
		resultado = numero1 - numero2
	}
	
	document.getElementById("resultado").value = resultado;
}