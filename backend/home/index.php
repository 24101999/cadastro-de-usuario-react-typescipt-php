<?php

require_once '../db.php';

$get = $conn->prepare("SELECT * FROM usuarios");

$get->execute();

$select = $get->fetchAll();

print_r(json_encode($select));
