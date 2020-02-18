/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var totAlambre;
    var alambre;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    alambre = (largo + ancho) * 2;

    totAlambre = alambre * 3;

    alert("Se deben comprar " + totAlambre + " hilos de alambre");


}
function Circulo () 
{
    var radio;
    var totAlambre;
    var perimetro;

    radio = parseInt(document.getElementById("Radio").value);

    perimetro = 2 * 3.14 * radio;

    totAlambre = perimetro * 3;

    alert("Se deben comprar " + totAlambre + " hilos de alambre");

}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    area = largo * ancho;

    cemento = area * 2;

    cal = area * 3;

    alert("Se deben comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal para el terreno rectangular.");


}