<?php

require_once '../db.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];

$formatos = ['png , jpg , gif , jpeg  , svg'];

$extencao = pathinfo($_FILES['img']['name'], PATHINFO_EXTENSION);

if (in_array($extencao, $formatos)) {
    $arquivo = 'upload/';
    $temporario = $_FILES['img']['tmp_name'];
    $novoNome = uniqid() . ".$extencao";
    move_uploaded_file($temporario, $arquivo . $novoNome);
}

$insert = $conn->prepare("INSERT INTO usuarios (nome , email , idade , img) VALUES (:nome , :email, :idade , :img) ");

$insert->bindParam(':nome', $nome);
$insert->bindParam(':email', $email);
$insert->bindParam(':idade', $idade);
$insert->bindParam(':img', $novoNome);


if ($email and $idade and $nome) {
    $insert->execute();
}
