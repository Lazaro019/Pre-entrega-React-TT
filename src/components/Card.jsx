import { useState } from "react";
import "../styles/Productos.css"
import Swal from 'sweetalert2';
import"../styles/Card.css"

function Card({producto, funcionCarrito}){
    const [cantidad, setCantidad] = useState(1);
    
    function agregarAlCarrito() {
        if (cantidad < 1) return;
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500,
            toast: true
        });
         funcionCarrito({ ...producto, cantidad }); // Pasamos también la cantidad   
    }

    function sumarContador() {
        setCantidad(cantidad + 1)
    }

    function restarContador(){
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="producto-card" >
            <h2 style={{color:"black"}}>{producto.name}</h2>
            <img className="producto-image" src={producto.imagen}></img>
            <p style={{color:"black"}}>{producto.descripcion}</p>
            <h3 style={{color:"black"}}>{producto.Precio} $</h3>
            <div>
                <button onClick={restarContador}>-</button>
                <span style={{ margin: "0 10px", color:"black" }}>{cantidad}</span>
                <button onClick={sumarContador}>+</button>
            </div>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default Card