$(document).ready(function() {

    $('#email').keyup(verificar);
    $('#name').keyup(verificar);
    $('#last_name').keyup(verificar);
    $('#password').keyup(verificar);
    $('#password2').keyup(verificar);

});

function verificar (){
    
   var nome = $("#name").val();
   var sobrenome = $("#last_name").val();
   var email = $("#email").val();
   var senha = $("#password").val();
   var confirmasenha = $("#password2").val();
   var valid = $("#email").hasClass("validate valid") ;


   if( nome != "" && nome != null && sobrenome != "" && sobrenome!= null && email != "" && email != null && senha != "" && senha!= null && confirmasenha != "" && confirmasenha != null ){
       $("#botao").prop("disabled", false);
   }
   else{
       $("#botao").prop("disabled",true);
   }
  

    
}

function Vazio (campo){
    var email =  $(campo).val();
    if ( email != "" && email != null ){
        return true;
    }
    else {
        return false;
    }
}