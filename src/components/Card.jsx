import { useState } from "react";
import "../styles/Productos.css"
import Swal from 'sweetalert2';
import"../styles/Card.css"
import { FaMinus, FaPlus } from "react-icons/fa6";

function Card({producto, functionCarrito}){
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
         functionCarrito({ ...producto, cantidad });  
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
                <button onClick={restarContador} aria-label="Restar producto"><FaMinus/></button>
                <span style={{ margin: "0 10px", color:"black" }}>{cantidad}</span>
                <button onClick={sumarContador} aria-label="Sumar producto"><FaPlus/></button>
            </div>
            <button onClick={agregarAlCarrito} aria-label="Agregar producto al carrito">Agregar al carrito</button>
        </div>
    )
}

export default Card