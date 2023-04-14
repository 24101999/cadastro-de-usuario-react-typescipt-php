<?php

require_once '../db.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$id = $_GET['id'];

$nome = $_POST['nome'];
$email = $_POST['email'];
$idade  = $_POST['idade'];

$regEmail = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";
$regEx = "/^[a-z à-ú À-Ú]+$/i";
$regExNum = "/^[0-9]+$/i";


if (isset($_FILES['img'])) {
    $ex = strtolower(substr($_FILES['img']['name'], -4));
    $novo_nome = md5(time()) . $ex;
    $up = 'upload/';
    move_uploaded_file($_FILES['img']['tmp_name'], $up . $novo_nome);
    $urlImg = 'http://localhost:1999/home/upload/' . $novo_nome;
}

$update = $conn->prepare("UPDATE usuarios set nome = :nome, email = :email , idade = :idade , img = :img WHERE id = $id ");

$update->bindParam(':nome', $nome);
$update->bindParam(':email', $email);
$update->bindParam(':idade', $idade);
$update->bindParam(':img', $urlImg);

if (preg_match($regEmail, $email) and preg_match($regExNum, $idade) and preg_match($regEx, $nome)) {

    $update->execute();
}
