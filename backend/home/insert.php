<?php

require_once '../db.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$nome = filter_var($dados->nome);
$email = filter_var($dados->email);
$idade = filter_var($dados->idade);

$insert = $conn->prepare("INSERT INTO usuarios (nome , email , idade) VALUES (:nome , :email, :idade) ");

$insert->bindParam(':nome', $nome);
$insert->bindParam(':email', $email);
$insert->bindParam('idade', $idade);


if ($email and $idade and $nome) {
    $insert->execute();
}
