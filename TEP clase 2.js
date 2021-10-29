
let Email1 = document.getElementById("Email").value;
let Horario = document.getElementById("Horario").value;
let TyC = document.getElementById("TyC").value;
let Nombre = document.getElementById("Nombre").value;
let Duplicado = document.getElementById("Duplicado").value;
let Pais = document.getElementById("Pais").value;

function MailsIguales() {
    if (document.getElementById("Email").value === document.getElementById("Duplicado").value) {
        return true;
    } else {
        return false;
    };
};


function CamposVacios() {

    if ((document.getElementById("Pais").value == "" && document.getElementById("Nombre").value == "") || (document.getElementById("Horario").value == "" && !document.getElementById("TyC").checked)) {

        return false

    } else {
        return true;
    };

};



document.getElementById("EnviarBtn").addEventListener('click', function (event) {







    if (!document.getElementById("Formulario").checkValidity() || !MailsIguales() || !CamposVacios()) {
        event.preventDefault()
        event.stopPropagation()
        alert("no se envio");
    } else {
        alert("se envio!");
    }

    //alert("hasta aca llega")
    document.getElementById("Formulario").classList.add('was-validated')
}, false)
