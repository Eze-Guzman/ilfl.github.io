function validarFormulario() {

    $('.alert').remove();

    var nombre=$('#nombre').val();
    var email=$('#email').val();
    var tel=$('#tel').val();
    var asunto=$('#asunto').val();
    var mensaje=$('#mensaje').val();

    if(nombre == "" || nombre == null) {
        cambiarColor("nombre");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)) {
            cambiarColor("nombre");
            mostrarAlerta("No se permiten caracteres especiales o numeros")
        }
    }

    if(email == "" || email == null) {
        cambiarColor("email");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(email)) {
            cambiarColor("email");
            mostrarAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

    
    if(asunto.value == "---" || asunto.value == null) {
        cambiarColor("asunto");
        mostrarAlerta("Seleccione una opción");
        return false;
    } else {
        var expresion= /[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(asunto)) {
            cambiarColor("asunto");
            mostrarAlerta("Elija un asunto");
            return false;
        }
    }

    if(mensaje == "" || mensaje == null) {
        cambiarColor("mensaje");
        mostrarAlerta("Campo Obligatorio");
        return false;
    } else {
        var expresion= /[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(mensaje)) {
            cambiarColor("mensaje");
            mostrarAlerta("No se permiten caracteres especiales");
            return false;
        }
    }

    var response = grecaptcha.greResponse();
    if(response.length != 0)
        window.open()

    $('form').submit();
    return true;
}

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('email');
    colorDefault('asunto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

function colorDefault(dato) {
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

function cambiarColor(dato) {
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

function mostrarAlerta(texto) {
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
};