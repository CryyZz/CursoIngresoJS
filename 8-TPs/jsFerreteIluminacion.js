/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var lamparas;
    var descuento;
    var aumento;
    var cantLamparas;
    var marca;
    var precioLampara = 35;

    marca = document.getElementById("Marca").value;
    lamparas = (parseInt(document.getElementById("Cantidad").value));
    
    if (lamparas >= 6)
    {
        cantLamparas = precioLampara * lamparas;

        descuento = (cantLamparas * 50) / 100;

        document.getElementById("precioDescuento").value = descuento;

        if (descuento > 120)
        {
            aumento = (descuento /100) * 10;

            alert ("IIBB Usted pagó " + descuento + ", siendo " + aumento + " el impuesto que se pagó");
        }
    }
    else if (lamparas == 5 && marca == "ArgentinaLuz")
    {
        cantLamparas = precioLampara * lamparas;

        descuento = (cantLamparas * 40) / 100;

        if (descuento > 120)
        {
            aumento = (descuento /100) * 10;

            alert ("IIBB Usted pagó " + descuento + ", siendo " + aumento + " el impuesto que se pagó");
        }

    }
    else if ( lamparas == 5 && marca)


}
