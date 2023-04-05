<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT,DELETE');
header("Access-Control-Allow-Headers: Origin,Accept,AccountKey,x-requested-with, Content-Type, origin, authorization, accept, client-security-token, host, date, cookie, cookie2");

$host = 'localhost';
$db = 'laravelreact';
$name = 'root';
$pass = '';

$conn = new PDO("mysql:host=$host;dbname=$db", $name, $pass);
