<?php

require_once '../db.php';

$id = $_GET['id'];

$get = $conn->prepare("SELECT * FROM usuarios WHERE id = $id");

$get->execute();

$select = $get->fetchAll();

print_r(json_encode($select));
