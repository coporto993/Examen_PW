$(document).ready(function(){
    $("#publicar").click(function(){
        var nombre = $("#iNombre").val();
        var desc = $("#iDesc").val();
        var countError = 0;

        if(nombre == ""){
            $("#vacio1").fadeIn();
            countError ++;
        }
        else{
            $("#vacio1").fadeOut();
        }
        if(desc == ""){
            $("#vacio2").fadeIn();
            countError ++;
        }
        else{
            $("#vacio2").fadeOut();
        }
        if(countError == 0){
            $("#vacio1").fadeOut();
            $("#vacio2").fadeOut();
            $("#exito").fadeIn();

        }
    });
});