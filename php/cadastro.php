<?php

    $name = $_POST["nm"];
    $last_name = $_POST["lt_nm"];
    $email = $_POST["em"];
    $password = $_POST["pass"];

	$conexao = mysqli_connect("localhost:8889", "root", "root", "teste_moja");

    echo "insert into usuario(nome, sobrenome, email, senha) values('".$name."','".$last_name."', '".$email."', '".$password."')";


	mysqli_query($conexao, "insert into usuario(nome, sobrenome, email, senha) values('".$name."','".$last_name."', '".$email."', '".$password."')");



?>