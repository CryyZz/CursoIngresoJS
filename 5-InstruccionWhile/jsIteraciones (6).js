function mostrar()
{
	var num;
	var prom;
	var contador=0;
	var acumulador=0;

	while(contador <5)
	{
		num = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + num;

		alert("La suma acumulada es " + acumulador);

		contador++;
	}

	prom = acumulador / contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=prom;

}//FIN DE LA FUNCIÓN