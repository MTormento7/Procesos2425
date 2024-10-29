function ControlWEB(){
    this.mostrarAgregarUsuario=function(){
        $('#mAU').remove()
        let cadena='<div id="mAU" class="form-group">';
        cadena = cadena+'<label for="nick">Introduce tu Nick:</label>';
        cadena = cadena+'<input type="text" class="form-control" id="nick">';
        cadena = cadena+'<button id="btnAU" type="submit" class="btn btn-primary">Agregar Usuario</button>';
        cadena = cadena +'<div id = "msg"></div>';
        cadena = cadena+'</div>';

        $('#aU').append(cadena);

        $("#btnAU").on("click",function(){
            let nick=$("#nick").val();
            rest.agregarUsuario(nick)
        });

    }
    this.mostrarHome=function(){
        $('#mAU').remove();
        $('#mH').remove();
        let cadena="<div id='mH'><h2> Bienvenido al sistema</h2></div>";
        $('#aU').append(cadena);

    }
    this.mostrarMsg=function(cadena){
        $('#txt').remove();
        let cadena2="<div id='txt'>"+cadena+"</div>";
        $('#msg').append(cadena2);
    }
    this.mostrarNumeroUsuarios=function(){
        $('#mNU').remove()
        let cadena='<div id="mNU" class="form-group">';
        cadena = cadena+'<label for="obtusu">Obtener numero de Usuarios: </label>';
        cadena = cadena+'<button id="btnNU" type="submit" class="btn btn-primary">Obtener</button>';
        cadena = cadena +'<div id = "num"></div>';
        cadena = cadena+'</div>';

        $('#nU').append(cadena);

        $("#btnNU").on("click",function(){
            
            rest.numeroUsuarios()
        });
    }
    this.mostrarNum=function(num){
        $('#numusu').remove();
        let cadena="<div id='numusu'> Numero de usuarios: "+ num +"</div>";
        $('#num').append(cadena);

    }
    

        
}