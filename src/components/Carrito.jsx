import "../styles/Carrito.css"
import CarritoCard from "./CarritoCard.jsx";

export default function Carrito({productosCarrito, funcionBorrar}) {
    console.log("Productos: " + productosCarrito)

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.Precio * producto.cantidad, 0
    )

    function funcionDisparadora(id){
        funcionBorrar(id)
    }

    console.log("Total: " + total)

    return(
        productosCarrito.length > 0 ? (
        <div className="carrito-conteiner">
            <div className="carrito-titulos">
                <h2 className="carrito-titulo-producto">Producto</h2>
                <h2>Cantidad</h2>
                <h2 className="carrito-titulo-descripcion">Descripción</h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
                <h2>Precio unitario</h2>
                <h2>Sub total</h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
            </div>
      
            {productosCarrito.map((producto) => (
            <CarritoCard
            key={producto.id}
            producto={producto}
            funcionDisparadora={funcionDisparadora}
            />
            ))}
            {total > 0 && (
            <span>Total a pagar: {total.toFixed(2)} $</span>
            )}
        </div>
        ) : (
        <h2>El carrito se encuentra vacío</h2>
        )
    );
}