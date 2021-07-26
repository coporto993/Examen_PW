$(document).ready(function (){

    $('#Nombre').blur(function(){
    
        let Nombre     = $(event.target).val();
    
        if(!Nombre){
            $('#Nombre').addClass("is-invalid");
        }
        else{
            $('#Nombre').removeClass("is-invalid");
            }
        })
    
     $('#Apellido').blur(function(){
    
        let Apellido   = $(event.target).val();
    
        if(!Apellido){
            $('#Apellido').addClass("is-invalid");
        }
        else{
            $('#Apellido').removeClass("is-invalid");
            }
        })
    
        $('#Correo_Electronico').blur(function(){
    
            let Correo_Electronico     = $(event.target).val();
    
            expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!Correo_Electronico){
                $('#Correo_Electronico').addClass("is-invalid");
            }
            else{
                $('#Correo_Electronico').removeClass("is-invalid");
            }
        })

        $('#Contraseña').blur(function(){
    
            let Contraseña   = $(event.target).val();
        
            if(!Contraseña){
                $('#Contraseña').addClass("is-invalid");
            }
            else{
                $('#Contraseña').removeClass("is-invalid");
                }
            })
    
        $(document).ready(function () {
            $('#mostrar_contrasena').click(function () {
              if ($('#mostrar_contrasena').is(':checked')) {
                $('#Contraseña').attr('type', 'text');
              } else {
                $('#Contraseña').attr('type', 'password');
              }
            });
          });

        $(document).ready(function() {
            $("#btnEnviar").on("click", function() {
                var condiciones = $("#aceptar").is(":checked");
                if (!condiciones) {
                    alert("Debe aceptar las condiciones de uso");
                    event.preventDefault();
                }
            });
        });
        
        var exprcorreo= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        $(document).ready(function(){
            $("#btnEnviar").click(function(){
            var Nombre = $("#Nombre").val();
            var Apellido = $("#Apellido").val();
            var Correo_Electronico = $("#Correo_Electronico").val();
            var Contraseña = $("#Contraseña").val();
            var countError = 0;


            if(Nombre == ""){
                $("#vacio2").fadeIn();
                countError ++;
            }
            else{
                $("#vacio2").fadeOut();
            }

            if(Apellido == ""){
                $("#vacio3").fadeIn();
                countError ++;
            }
            else{
                $("#vacio3").fadeOut();
            }

            if(Correo_Electronico == ""){
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

            if(Contraseña == ""){
                $("#vacio4").fadeIn();
                countError ++;
            }
            else{
                $("#vacio4").fadeOut();
            }

            if(countError == 0){
                $("#vacio1").fadeOut();
                $("#error1").fadeOut();
                $("#vacio2").fadeOut();
                $("#vacio3").fadeOut();
                $("#vacio4").fadeOut();
                $("#enviado").fadeIn();
            }

            $("#Nombre").reset();
            $("#Apellido").reset();
            $("#Correo_Electronico").reset();
            $("#Contraseña").reset();
        })
    })
});