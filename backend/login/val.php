<?php
require_once '../db.php';

$dados = file_get_contents("php://input");

$dados = json_decode($dados);

$email = filter_var($dados->email);
$senha = filter_var($dados->senha);

$val = $conn->prepare("SELECT * FROM user WHERE email = :email and senha = :senha");

$val->bindParam(':email', $email);
$val->bindParam(':senha', $senha);

$val->execute();

$el = $val->fetchAll();

if ($el) {
    print_r(json_encode(true));
} else {
    print_r(json_encode(false));
}
