
<?php 
    require_once("config.php");
    $IdCliente = $_POST ["IdCliente"];
    $Nombre = $_POST ["Nombre"];
    $Ciudad = $_POST ["Ciudad"];
    $DNI = $_POST ["DNI"];
    $Mascota = $_POST ["Mascota"];
    $Telefono = $_POST ["Telefono"];
    $rs = $cn -> query("INSERT INTO clientes values('$IdCliente','$Nombre','$Ciudad','$DNI','$Mascota' ,'$Telefono')");
    echo $cn->insert_id;
    $cn->close();
?>