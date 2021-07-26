$(document).ready(function (){
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


    var exprcorreo= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        $(document).ready(function(){
            $("#btnIngresar").click(function(){
                var Correo_Electronico = $("#Correo_Electronico").val();
                var Contraseña = $("#Contraseña").val();
                var countError = 0;

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
                }

                $("#Correo_Electronico").reset();
                $("#Contraseña").reset();
            })
        })
    });
