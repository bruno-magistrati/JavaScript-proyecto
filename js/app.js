const productos = [
    { nombre: "vodka", precio: 250 },
    { nombre: "cerveza", precio: 100 },
    { nombre: "ron", precio: 500 },
    { nombre: "licor", precio: 1000 },
    { nombre: "gaseosa", precio: 70 },
];
let carrito = [];

let seleccion = prompt("Desea comprar una bebida si/no?");

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no");
    seleccion = prompt("Desea comprar una bebida si/no");
}
if (seleccion == "si") {
    alert("Esta es nuestra lista de bebidas, selecione una o mas");
    let listaProductos = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$"
    );
    alert(listaProductos.join(" - "));
} else if (seleccion == "no") {
    alert("Gracias por su visita, hasta luego");
}

while (seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito");
    let precio = 0;

    if (
        producto == "vodka" ||
        producto == "cerveza" ||
        producto == "ron" ||
        producto == "licor" ||
        producto == "gaseosa"
    ) {
        switch (producto) {
            case "vodka":
                precio = 250;
                break;

            case "cerveza":
                precio = 100;
                break;

            case "ron":
                precio = 500;
                break;
            case "licor":
                precio = 1000;
                break;
            case "gaseosa":
                precio = 70;
                break;
                default:
                break;
        }
        let unidades = parseInt (prompt("Cuantas unidades quiere llevar"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("Desea agregar otra bebida?")

    while(seleccion == "no"){
        carrito.forEach((carritoFinal) =>{
           alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades} precio ${carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es; ${total}`)
alert("Gracias por elejirnos, hasta luego")
