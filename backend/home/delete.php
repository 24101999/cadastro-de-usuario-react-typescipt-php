<?php

require_once '../db.php';

$id = $_GET['id'];

$del = $conn->prepare("DELETE FROM USUARIOS WHERE id = $id");

$del->execute();
