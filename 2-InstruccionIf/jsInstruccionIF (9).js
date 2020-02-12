function mostrar()
{	
	var min = 1;

	var max = 10;

	var random;

	min = parseInt(min);

	max = parseInt(max);

	random = Math.floor(Math.random() * ((max + 1) -  min) + min);

	alert("Numero Random: " + random);

}