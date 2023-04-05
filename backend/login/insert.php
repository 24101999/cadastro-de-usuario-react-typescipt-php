<?php

require_once '../db.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$email = filter_var($dados->email);
$senha = filter_var($dados->senha);

$val = $conn->prepare("SELECT * FROM user WHERE email = :email");

$val->bindParam(':email', $email);

$val->execute();

$user = $val->fetchAll();

$insert = $conn->prepare("INSERT INTO user (email , senha) VALUES (:email , :senha)");

$insert->bindParam(':email', $email);
$insert->bindParam(':senha', $senha);


if ($user || !$email || !$senha) {
    print_r(json_encode(true));
} else {
    print_r(json_encode(false));
    $insert->execute();
}
