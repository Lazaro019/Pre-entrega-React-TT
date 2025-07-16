import { Helmet } from "react-helmet";
import { useCarrito } from '../context/CarritoContext';
import Swal from 'sweetalert2';
import "../styles/Carrito.css";
import CarritoCard from "./CarritoCard.jsx";

<Helmet>
  <title>Carrito | Juegos x Diversion</title>
  <meta name="description" content="Carrito para agregar y quitar productos" />
  <meta name="robots" content="noindex, nofollow" />
</Helmet>

export default function Carrito() {
  const { productosCarrito, sumarProducto, restarProducto, borrarProducto, vaciarCarrito } = useCarrito();

  const total = productosCarrito.reduce(
    (subTotal, producto) => subTotal + producto.Precio * producto.cantidad, 0
  );

  function funcionBorrar(id) {
    borrarProducto(id);
  }

  function funcionRestar(id) {
    restarProducto(id);
  }

  function funcionSumar(id) {
    sumarProducto(id);
  }

  function funcionVaciar(id){
    vaciarCarrito(id);
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Carrito vaciado',
      showConfirmButton: false,
      timer: 1500,
      toast: true
    });
  }

  function funcionPagar(){
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: 'Esa funcion no se ha aplicado aùn, lamentamos la molestia.',
      showConfirmButton: false,
      timer: 3000,
      toast: true
    });
  }

  return (
    productosCarrito.length > 0 ? (
      <div className="carrito-conteiner">
            <div className="carrito-titulos">
                <h2 className="carrito-titulo-producto">Producto</h2>
                <h2></h2>
                <h2>Cantidad</h2>
                <h2>Precio unitario</h2>
                <h2></h2><h2></h2><h2></h2>
            </div>
      
            {productosCarrito.map((producto) => (
            <CarritoCard key={producto.id} producto={producto} 
            funcionBorrar={funcionBorrar} funcionSumar={funcionSumar} funcionRestar={funcionRestar}
            />
            ))}
            {total > 0 && (
            <div className="pagar-total" style={{ marginTop: "20px" }}>
              <div className="pagar-info">
                <h3>Total a pagar: ${total}</h3>
              </div>
              <div className="pagar-botones">
                <button onClick={funcionVaciar}>Vaciar carrito</button>
                <button onClick={funcionPagar}>Pagar</button>
              </div>
            </div>

            )}
        </div>
        ) : (
        <h2>El carrito se encuentra vacío</h2>
        )
    );
}