/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo; 

    var resultado;

    var total;

    sueldo = parseInt(document.getElementById("sueldo").value);

    resultado = (sueldo * 10) / 100;

    resultado = parseInt(resultado);

    total = sueldo + resultado;

    document.getElementById("resultado").value = total;

    //alert("El Sueldo con el aumento del 10% es de " + total);
    
}
