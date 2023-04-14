<?php

require_once '../db.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];

$regEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regEx = "/^[a-z à-ú À-Ú]+$/i";
$regExNum = "/^[0-9]+$/i";

$formatos = ['png , jpg , gif , jpeg  , svg'];

if (isset($_FILES['img'])) {
    $ex = strtolower(substr($_FILES['img']['name'], -4));
    $novo_nome = md5(time()) . $ex;
    $up = 'upload/';
    move_uploaded_file($_FILES['img']['tmp_name'], $up . $novo_nome);
    $urlImg = 'http://localhost:1999/home/upload/' . $novo_nome;
}

$insert = $conn->prepare("INSERT INTO usuarios (nome , email , idade , img) VALUES (:nome , :email, :idade , :img) ");

$insert->bindParam(':nome', $nome);
$insert->bindParam(':email', $email);
$insert->bindParam(':idade', $idade);
$insert->bindParam(':img', $urlImg);


if (preg_match($regEmail, $email) and preg_match($regExNum, $idade) and preg_match($regEx, $nome)) {
    $insert->execute();
}
