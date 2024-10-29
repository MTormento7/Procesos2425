function ClienteRest(){
    
    this.agregarUsuario=function(nick){
        var cli=this;
        $.getJSON("/agregarUsuario/"+nick,function(data){
            console.log(data);
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
                cw.mostrarHome();
            }
            else{
                console.log("El nick ya está ocupado");
                //mostrar msg
                cw.mostrarMsg("El nick ya esta ocupado");
            }
        })
    }
    this.eliminarUsuario=function(nick){
        var cli=this;
        $.getJSON("/eliminarUsuario/"+nick,function(data){
            if (data.eliminado){
                console.log("Usuario eliminado")
            }
            else{
                console.log("El Usuario no pudo ser eliminado");
            }
        })
    }
    this.numeroUsuarios=function(){
        var cli=this;
        $.getJSON("/numeroUsuarios/",function(data){
            console.log("Numero de usuarios "+data.num)
            cw.mostrarNum(data.num);
            
        })
    }
    this.obtenerUsuarios=function(){
        var cli=this;
        $.getJSON("/obtenerUsuarios/",function(lista){
            console.log(lista)
            
        })
    }
    this.usuarioActivo=function(nick){
        var cli=this;
        $.getJSON("/usuarioActivo/"+nick,function(data){
            if (data={}){
                console.log("Usuario "+nick+" no esta activo")
            }
            else{
                console.log("El usuario " +nick+ " esta activo");
            }
        })
    }
}
    