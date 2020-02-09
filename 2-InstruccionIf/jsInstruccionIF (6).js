function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if(edad < 13)
    {
        alert("Es un niño")
    }
    else if(edad <=17)
    {
        alert("Es un adolescente")
    }
    else
    {
        alert("Es un adulto")
    }

}