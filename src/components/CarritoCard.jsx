import "../styles/Carrito.css"

function CarritoCard({producto, funcionDisparadora}){
    
    function borrarDelCarrito() {
        console.log("Paso 1")
        funcionDisparadora(producto.id)
    }

    return(
        <div className="carrito-card"style={{backgroundColor: "#55dee0af"}} >
            <h3 className="carrito-producto" style={{color:"black"}}>{producto.name}</h3>
            <span style={{color:"black"}}>{producto.cantidad}</span>
            {<p className="descripcion-carrito" style={{color:"black"}}>{producto.descripcion}</p>}
            <img className="carrito-image" src={producto.imagen}></img>
            
            <div className="carrito-unitario">
                <span style={{color:"black"}}>{producto.Precio} $</span>
            </div>
            <div className="carrito-sub">
                <span style={{color:"black"}}>{producto.cantidad * producto.Precio} $</span>
            </div>
            <button className="boton-carrito" onClick={borrarDelCarrito} style={{color:"black", borderRadius:"10px"}}>X</button>
        </div>
    )
}

export default CarritoCard