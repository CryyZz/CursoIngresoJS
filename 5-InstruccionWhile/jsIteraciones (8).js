function mostrar()
{
	var num;
	var contador=0;
	var positivo=0;
	var contPos=0;
	var negativo=1;
	var contNeg=0;
	
	var respuesta;

	do
	{
		num = parseInt(prompt("Ingrese un numero"));
		if(num >= 0)
		{
			positivo = positivo + num;
			document.getElementById('suma').value=positivo;
			contPos++;
		}
		else
		{
			negativo = negativo * num;
			document.getElementById('producto').value=negativo;
			contNeg++;
		}
		respuesta = prompt("Quiere seguir ingresando numeros?");

		contador++;

	}while(respuesta == 's');

	alert("Se han ingresado " + contador + " numeros, " + contPos + " positivos y " + contNeg + " negativos");

}