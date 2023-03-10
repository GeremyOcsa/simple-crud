function clientes(){
leerDatos = () =>{
    fetch("http://goproyect.000webhostapp.com/clientes.php")
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            llenarTablaProveedores(data);
        });
}
leerDatos();
    //function llenarTablaProveedores(data){
    const llenarTablaProveedores = (data) =>{
        let contenidoTabla = "";
        data.map( item => {
            //console.log(item.nombre);
            let fila = "<tr>";
            fila += "<td>" + item.IdCliente + "</td>";
            fila += "<td>" + item.Nombre + "</td>";
            fila += "<td>" + item.Ciudad + "</td>";
            fila += "<td>" + item.DNI + "</td>";
            fila += "<td>" + item.Mascota + "</td>";
            fila += "<td>" + item.Telefono + "</td>";
            fila += "<td><i class='bi bi-x-lg boton-eliminar'></i></td>";
            fila += "<td><i class='bi bi-pencil boton-editar' data-toggle='modal' data-target='#modal-actualizar'></i></td>";
            fila += "</tr>";
            contenidoTabla += fila;
        });
        document.getElementById("tbody-clientes").innerHTML = contenidoTabla;
        
        $(".boton-eliminar").click(function(){ 
            var filaActual = $(this).parent().parent();
            var posicion = filaActual.index()
            console.log(data[posicion])
            var clienteid = data[posicion].IdCliente;
            var respuesta= confirm("¿Estas seguro que desea eliminar al cliente " + data[posicion].IdCliente + " ?")
            if(respuesta == true){
                eliminarCategoria(clienteid);
            }
        });

        $(".boton-editar").click(function(){ 
            var filaActual = $(this).parent().parent();
            var posicion = filaActual.index();
            $("#txtidclienteActualizar").val(data[posicion].IdCliente);
            $("#txtnombreActualizar").val(data[posicion].Nombre);
            $("#txtciudadActualizar").val(data[posicion].Ciudad);
            $("#txtDNIActualizar").val(data[posicion].DNI);
            $("#txtmascotaActualizar").val(data[posicion].Mascota);
            $("#txttelefonoActualizar").val(data[posicion].Telefono);
        });
    }

    eliminarCategoria = (clienteid) => {
        var ruta = "http://goproyect.000webhostapp.com/clientes-eliminar.php";

        var formData = new  FormData();
        formData.append("IdCliente",clienteid);
        fetch(ruta,{
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(() => {
            leerDatos();
        })

    }
}
clientes();

$("#btnGuardar").click(() =>{
    var IdCliente = $("#txtidcliente").val();
    var Nombre = $("#txtnombre").val();
    var Ciudad = $("#txtciudad").val();
    var DNI = $("#txtDNI").val();
    var Mascota = $("#txtmascota").val();
    var Telefono = $("#txttelefono").val();
    var ruta = "http://goproyect.000webhostapp.com/clientes-insertar.php";

    var formData = new  FormData();
    formData.append("IdCliente",IdCliente);
    formData.append("Nombre",Nombre);
    formData.append("Ciudad",Ciudad);
    formData.append("DNI",DNI);
    formData.append("Mascota",Mascota);
    formData.append("Telefono",Telefono); 

    fetch(ruta,{
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(() => {
        leerDatos();
    })
})

$("#btnActualizar").click(() =>{
    var Cliente = $("#txtidclienteActualizar").val();
    var Nombre = $("#txtnombreActualizar").val();
    var Ciudad = $("#txtciudadActualizar").val();
    var DNI = $("#txtDNIActualizar").val();
    var Mascota = $("#txtmascotaActualizar").val();
    var Telefono = $("#txttelefonoActualizar").val();
    var ruta = "http://goproyect.000webhostapp.com/clientes-actualizar.php";

    var formData = new  FormData();
    formData.append("IdCliente",Cliente);
    formData.append("Nombre",Nombre);
    formData.append("Ciudad",Ciudad);
    formData.append("DNI",DNI);
    formData.append("Mascota",Mascota);
    formData.append("Telefono",Telefono);

    fetch(ruta,{
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(() => {
        leerDatos();
    })
})