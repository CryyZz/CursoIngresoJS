function mostrar()
{
    var edad;

    var estado;

    edad = parseInt(document.getElementById("edad").value);

    estado = document.getElementById("estadoCivil").value;

     if (edad < 18 && estado != "Soltero")
    {
        alert(edad);
    }
    else if(estado == "Soltero" && edad >= 18)
    {
        alert("Es soltero y no es menor");
    }
}