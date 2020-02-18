/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var C;

    temperatura = parseInt(document.getElementById("Temperatura").value);

    C = (temperatura - 32) / 1.8;

    alert(temperatura + " Fahrenheit son " + C + " Centígrados");
	
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var F;

    temperatura = parseInt(document.getElementById("Temperatura").value);
    
    F = temperatura * 1.8 + 32;

    alert(temperatura + " Celsius son " + F + " Fahrenheit");

}
