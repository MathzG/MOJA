/*$(document).ready(function() {

    $('#email2').keyup(verificar);
    $('#name2').keyup(verificar);
    $('#last_name2').keyup(verificar);
    $('#password2_2').keyup(verificar);
    $('#password2Confirm').keyup(verificar);

});

/*function verificar (){
    
   var nome = $("#name2").val();
   var sobrenome = $("#last_name2").val();
   var email = $("#email2").val();
   var senha = $("#password2_2").val();
   var confirmasenha = $("#password2Confirm").val();
   //var valid = $("#email").hasClass("validate valid") ;



   if( nome != "" && nome != null && sobrenome != "" && sobrenome!= null && email != "" && email != null && senha != "" && senha!= null && confirmasenha != "" && confirmasenha != null ){
       $("#botaoCadastro").prop("disabled", false);
   }
   else{
       $("#botaoCadastro").prop("disabled",true);
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
*/


//CADASTRO!!!

$(document).ready(function(){


	$("#botao").click(function(){
        fComServidor();
        return false;
	});

});

function fComServidor(){

	$.ajax({
		data: {
            name: $("#name").val(),
            last_name: $("#last_name").val(),
            email: $("#email").val(),
            password: $("#password").val()
		},
		type: "POST",
		url: '../php/cadastro.php'
	});
}