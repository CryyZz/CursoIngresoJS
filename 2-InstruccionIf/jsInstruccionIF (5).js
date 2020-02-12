function mostrar()
{
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if(edad >= 18 || edad < 13)
    {
        alert("No es un adolescente")
    }
}