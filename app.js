window.onload=function(){  
    formulario.reset();
        var form=document.getElementById("formulario")
        document.getElementById("input-nombre").focus();
        
        var passValido;
        var passRepiteValido;
        var correoValido;
        var correoRepiteValido;
        var nombreValido;
        var apellidoValido;
        var regexEmail= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

            form.addEventListener("submit", e =>{
            const nombre= document.getElementById("input-nombre").value;
            const apellido= document.getElementById("input-apellido").value;
            const inputPass =document.getElementById("input-contrasena").value;
            const inputRepitePass =document.getElementById("input-repite-contrasena").value;
            const inputMail=document.getElementById("input-correo").value;
            const inputRepiteMail=document.getElementById("input-repite-correo").value;
                        
            e.preventDefault();

            function verificarNombre(){
                
                if(nombre.length<3||nombre.length==""){
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");              
                    console.log("ingrese un Nombre verdadero "+!isNaN(nombre));
                    return false;        
                }else if(!isNaN(nombre)){
                    document.getElementById("error-nombre").style.display ="block";
                    rojo("nombre");   
                    return false;     
                }else{
                    document.getElementById("valido-nombre").style.display ="block";
                    verde("nombre");
                    nombreValido=nombre.toString();   
                    return true;                                      
                } 
            }  
              
            function verificarApellido(){                
                if(apellido.length<3||apellido.length==""){
                    document.getElementById("error-apellido").style.display ="block";
                    rojo("apellido");              
                    console.log("ingrese un Apellido valido "+(apellido));
                    return false;        
                }else if(!isNaN(apellido)){
                    document.getElementById("error-apellido").style.display ="block";
                    rojo("apellido");
                    return false;        
                }else{
                    document.getElementById("valido-apellido").style.display ="block";
                    verde("apellido");
                    apellidoValido=apellido.toString();   
                    return true;                                                    
                } 
            }  

            function verificarCorreo(){                           
                if(!regexEmail.test(inputMail)){
                    alert("entrar un mail valido");
                    document.getElementById("error-correo").style.display ="block";
                    rojo("correo");
                }else{
                    document.getElementById("valido-correo").style.display ="block";
                    verde("correo");
                    console.log("Email es ==> "+inputMail);
                    correoValido=inputMail.toString();
                    return true;
                }
            }
            function verificarRepiteCorreo(){
                if(!regexEmail.test(inputRepiteMail)){
                    alert("entrar un mail valido");
                    document.getElementById("error-repite-correo").style.display ="block";
                    rojo("repite-correo");
                }else{
                    document.getElementById("valido-repite-correo").style.display ="block";
                    verde("repite-correo");
                    console.log("Email repetido es ==> "+inputRepiteMail);
                    correoRepiteValido=inputRepiteMail.toString();
                    return true;
                }
            }

            function verificarPass(){
                if(inputPass.length<6||inputPass.length==""){
                    document.getElementById("error-contrasena").style.display ="block";
                    rojo("contrasena"); 
                    return false;        
                }else if(!isNaN(inputPass)){
                    document.getElementById("error-contrasena").style.display ="block";
                    rojo("error-contrasena");   
                    return false;     
                }else{
                    document.getElementById("valido-contrasena").style.display ="block";
                    verde("contrasena");
                    passValido=inputPass.toString();   
                    return true;
                } 
            }  
            function verificarRepitePass(){
                if(inputRepitePass.length<6||inputRepitePass.length==""){
                    document.getElementById("error-repite-contrasena").style.display ="block";
                    rojo("repite-contrasena"); 
                    return false;        
                }else if(!isNaN(inputRepitePass)){
                    document.getElementById("error-repite-contrasena").style.display ="block";
                    rojo("repite-contrasena");   
                    return false;     
                }else{
                    document.getElementById("valido-repite-contrasena").style.display ="block";
                    verde("repite-contrasena");
                    passRepiteValido=inputRepitePass.toString();   
                    return true;
                } 
            }  


            if ( verificarPass() && verificarRepitePass()
                && verificarCorreo()&& verificarRepiteCorreo()
                && verificarNombre()&& verificarApellido()){
               console.log("verificacion TRUE");  
        
            }else{
                e.preventDefault();
            }        
        })

        function rojo(e){
            document.getElementById("input-"+e).style.background = "rgb(255, 4, 2, 0.5)";
            document.getElementById("valido-"+e).style.display ="none";
        }
        function verde(e){
            document.getElementById("input-"+e).style.background = "rgb(157, 230, 188, 0.7)";
            document.getElementById("error-"+e).style.display="none";
        }
    }
