import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import "../styles/Productos.css";
import Card from "./Card";
import Header from "./Header";

<Helmet>
  <title>Productos | Juegox x Diversion</title>
  <meta name="description" content="Seccion de productos de todas las categorias" />
  <meta name="robots" content="index, follow" />
</Helmet>

function ProductosContainer({busqueda = "" }) {
  const { agregarAlCarrito } = useCarrito();

  function functionEnProductos(producto) {
    agregarAlCarrito(producto);
  }
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6834ef09cd78db2058bfce57.mockapi.io/Productos/productos')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const productosFiltrados = datos;
        setProductos(productosFiltrados);
        setCargando(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setError('Hubo un problema al cargar los productos.');
        setCargando(false);
      });
  }, [categoria]);


  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

   const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.name?.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria
      ? producto.categoria?.toLowerCase() === categoria.toLowerCase()
      : true;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div>
    <Header/>
    <h3 className={categoria === "playstation" ? "titulo-playstation" : categoria === "xbox" ? "titulo-xbox" : ""}>{categoria}</h3>
    <div className="productos-conteiner">
      {productosFiltrados.length > 0 ? (
        productosFiltrados.map((producto) => (
          <Card
            key={producto.id}
            producto={producto}
            functionCarrito={functionEnProductos}
          />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
    </div>
  );
}

export default ProductosContainer;
