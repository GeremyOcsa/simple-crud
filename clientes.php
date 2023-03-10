<?php 
    require_once("config.php");
    $rs = $cn -> query("SELECT * FROM clientes ORDER BY IdCliente");
    while($row = $rs -> fetch_assoc()){
        //Se lee cada fila hasta que no haya filas que leer
        $res[] = $row;
        //Cada fila se está almacenando en un arreglo
    }
    echo json_encode($res, JSON_UNESCAPED_UNICODE);
    $cn -> close();
?>