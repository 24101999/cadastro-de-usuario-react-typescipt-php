<?php

require_once '../db.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$id = $_GET['id'];

$nome = filter_var($dados->nome);
$email = filter_var($dados->email);
$idade = filter_var($dados->idade);

$update = $conn->prepare("UPDATE usuarios set nome = :nome, email = :email , idade = :idade WHERE id = $id ");

$update->bindParam(':nome', $nome);
$update->bindParam(':email', $email);
$update->bindParam(':idade', $idade);

if ($nome and $name and $idade) {

    $update->execute();
}
