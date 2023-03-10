<?php 
    require_once("config.php");
    $IdCliente = $_POST ["IdCliente"];
    $Nombre = $_POST ["Nombre"];
    $Ciudad = $_POST ["Ciudad"];
    $DNI = $_POST ["DNI"];
    $Mascota = $_POST ["Mascota"];
    $Telefono = $_POST ["Telefono"];
    $rs = $cn -> query("UPDATE clientes SET Nombre='$Nombre', Ciudad='$Ciudad', DNI='$DNI', Mascota='$Mascota' , Telefono='$Telefono' WHERE IdCliente='$IdCliente'");
    $cn -> close();
?>