import { MdDelete } from "react-icons/md"
import "../styles/Carrito.css"
import { FaMinus, FaPlus } from "react-icons/fa6"

function CarritoCard({producto, funcionBorrar, funcionSumar, funcionRestar}){
    
    function borrarDelCarrito() {
        funcionBorrar(producto.id)
    }

    function sumarAlCarrito() {
        funcionSumar(producto.id)
    }

    function restarAlCarrito() {
        funcionRestar(producto.id)
    }

    return(
        <div className="carrito-card"style={{backgroundColor: "#55dee0af"}} >
            <img className="carrito-image" src={producto.imagen}></img>
            <h3 className="carrito-producto" style={{color:"black"}}>{producto.name}</h3>
            <span style={{color:"black"}}>{producto.cantidad}</span>
            
            
            <div className="carrito-unitario">
                <span style={{color:"black"}}>${producto.Precio} </span>
            </div>
            <div>
            <button className="boton-carrito" onClick={restarAlCarrito} style={{color:"black", borderRadius:"10px"}} aria-label="restar producto"><FaMinus/></button>
            <button className="boton-carrito" onClick={sumarAlCarrito} style={{color:"black", borderRadius:"10px"}} aria-label="sumar producto"><FaPlus/></button>
            <button className="boton-carrito" onClick={borrarDelCarrito} style={{color:"black", borderRadius:"10px", backgroundColor:"rgb(255, 100, 100)"}} aria-label="borrar producto"><MdDelete/></button>
            </div>
            
        </div>
    )
}

export default CarritoCard