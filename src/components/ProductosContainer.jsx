import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import "../styles/Productos.css"
import Card from "./Card"

function ProductosContainer({functionCarrito}){
    const { categoria } = useParams();
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetch('https://6834ef09cd78db2058bfce57.mockapi.io/Productos/productos')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const productosFiltrados = categoria
          ? datos.filter((producto) => 
      producto.categoria?.toLowerCase() === categoria.toLowerCase()
        )
        : datos;
        setProductos(productosFiltrados);
        setCargando(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
      });
  }, [categoria]);

    function functionEnProductos(producto){
        functionCarrito(producto)
    }

    if (cargando) {
        return <p>Cargando productos...</p>;
    }else if (error){
        return <p>{error}</p>;
    }else{
        return(
            <div className="productos-conteiner">
                {productos.map((producto) => (
                    <Card
                        producto={producto}
                        funcionCarrito={functionEnProductos}
                    />
                ))}
            </div>
        )
    }

    
}

export default ProductosContainer