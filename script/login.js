$(document).ready(function() {

    $("#email").keyup(verificarLogin);
    $("#password").keyup(verificarLogin);
    
    $("#botao").click(function(){
        Login();
    });

})

function verificarLogin(){


    var email = $("#email").val();
    var password = $("#password").val();   
   

    if(email != null && email != "" && password != "" && password != null ){
        $("#botao").prop("disabled",false);
    }
    else { 
        $("#botao").prop("disabled",true);
    }
}



function Login(){
    var email =  $("#email").val();
    var senha =  $("#password").val();
    //alert(email+senha);
 
   // var senhaHash =$.MD5(senha);
 
    $.ajax({
        data:{
            email:email,
            senha:senha
        },
        type:'POST',
        url: '../php/login.php',
        success: function(response){
            if(response == false){
                $("#text-login").html('Login ou Senha incorreto !');
            }
        },
        error: function(response){
             $("#text-login").html('Login ou Senha incorreto!');
        }
    });
 
 
 
 };
