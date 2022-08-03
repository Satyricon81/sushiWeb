<?php

$name = $_POST['nombre'];
$email = $_POST['correo'];
$phone = $_POST['telefono'];
$message = $_POST['mensaje'];

//REMITENTE (NOMBRE - EMAIL - TELEFONO)
//MENSAJE
var_dump($name);
$respuesta = mail('pablo.gutierrez.pruebas@gmail.com', 'Correo desde Sushi Web', $message);
var_dump($respuesta);