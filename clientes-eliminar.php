<?php 
    require_once("config.php");
    $IdCliente = $_POST ["IdCliente"];
    $rs = $cn -> query("delete from clientes  where IdCliente = $IdCliente");
    $cn -> close();
?> 