function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if(edad >= 13)
    {
        if(edad < 18)
        {
            alert("Es un adolescente")
        }
    }
}