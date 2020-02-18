/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var prod1;
    var prod2;
    var prod3;
    var suma;

    prod1 = parseInt(document.getElementById("PrecioUno").value);
    prod2 = parseInt(document.getElementById("PrecioDos").value);
    prod3 = parseInt(document.getElementById("PrecioTres").value);

    suma = prod1 + prod2 + prod3;
    
    alert("La suma de los productos es de: " + suma);
	
}
function Promedio () 
{
    var prod1;
    var prod2;
    var prod3;
    var promedio;

    prod1 = parseInt(document.getElementById("PrecioUno").value);
    prod2 = parseInt(document.getElementById("PrecioDos").value);
    prod3 = parseInt(document.getElementById("PrecioTres").value);

    promedio = (prod1 + prod2 + prod3) / 3;
    
    alert("El promedio de los productos es de: " + promedio);
	
}
function PrecioFinal () 
{
    var prod1;
    var prod2;
    var prod3;
    var suma;
    var promFinal;
    var iva = 21;

    prod1 = parseInt(document.getElementById("PrecioUno").value);
    prod2 = parseInt(document.getElementById("PrecioDos").value);
    prod3 = parseInt(document.getElementById("PrecioTres").value);

    suma = prod1 + prod2 + prod3;

    promFinal = (suma * iva) / 100;

    promFinal = promFinal + suma;

    alert("El precio final de los productos más el 21% de IVA es de: " + promFinal);
	
}