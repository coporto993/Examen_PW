var exprcorreo= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
$(document).ready(function(){
    $("#enviar").click(function(){
        var correo = $("#iCorreo").val();
        var mensaje = $("#iMensaje").val();
        var countError = 0;

        if(correo == ""){
            $("#error1").fadeOut();
            $("#vacio1").fadeIn();
            countError ++;
        }
        else if(!exprcorreo.test(correo)){
            $("#vacio1").fadeOut();
            $("#error1").fadeIn();
            countError ++;
            
        }
        else{
            $("#vacio1").fadeOut();
            $("#error1").fadeOut();
        }
        if(mensaje == ""){
            $("#vacio2").fadeIn();
            countError ++;
        }
        else{
            $("#vacio2").fadeOut();
        }
        if(countError == 0){
            $("#vacio1").fadeOut();
            $("#error1").fadeOut();
            $("#vacio2").fadeOut();
            $("#enviado").fadeIn();

        }
        
        
    });
});
