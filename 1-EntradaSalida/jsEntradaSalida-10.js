/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;

    var resultado;

    var total;

    importe = parseInt(document.getElementById("importe").value);

    resultado = (importe * 25) / 100;

    total  = importe - resultado;

    document.getElementById("resultado").value = total;

	
}
