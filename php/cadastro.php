<?php

    $name = $_POST["name2"];
    $last_name = $_POST["last_name2"];
    $email = $_POST["email2"];
    $password = $_POST["password2_2"];

	$conexao = mysqli_connect("localhost:8889", "root", "root", "teste_moja");

echo "insert into usuario(nome, sobrenome, email, senha) values('".$name."','".$last_name."', '".$email."', '".$password."')";


	mysqli_query($conexao, "insert into usuario(nome, sobrenome, email, senha) values('".$name."','".$last_name."', '".$email."', '".$password."')");



?>