$(document).ready(function() {

    $('#email2').keyup(verificar);
    $('#name2').keyup(verificar);
    $('#last_name2').keyup(verificar);
    $('#password2_2').keyup(verificar);
    $('#password2Confirm').keyup(verificar);

    $("#botaoCadastro").click(function(){
        var nome = $("#name2").val();
        var sobrenome = $("#last_name2").val();
        var email = $("#email2").val();
        var senha = $("#password2_2").val();
        var confirmasenha = $("#password2Confirm").val();

        alert(nome+sobrenome+email+senha+confirmasenha)
        fComServidor(nome,sobrenome,email,senha);
       // return false;
	});




});

function verificar (){
    
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



//CADASTRO!!!



function fComServidor(nm,lt_nm,em,pass){

	$.ajax({
		data: {
            name: nm,
            last_name: lt_nm,
            email:em,
            password: pass
		},
		type: "POST",
		url: '../php/cadastro.php'
	});
} 