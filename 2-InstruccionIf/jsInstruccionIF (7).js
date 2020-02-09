function mostrar()
{
    var edad;

    var estado;

    edad = parseInt(document.getElementById("edad").value);

    //document.getElementById("estadoCivil").value = estado;

    if(edad < 18)
    {
        if(estado != "Soltero")
        {
            alert("Es muy pequeño para NO ser soltero")
        }
        
    }
}