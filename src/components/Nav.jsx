import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav({ productosCarrito }) {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const categorias = ['Playstation','Xbox'];

    return (
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px", textDecoration: "none" }}>
          <li>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <div 
        className="relative"
        onMouseEnter={() => setMostrarMenu(true)}
        onMouseLeave={() => setMostrarMenu(false)}
      >
        <Link to="/productos" style={{ color: "black", textDecoration: "none" }}>Productos</Link>

        {mostrarMenu && (
          <div className="absolute top-full left-0 mt-1 bg-white shadow-md border rounded z-10">
            {categorias.map((categoria) => (
              <Link
                key={categoria}
                to={`/productos/${categoria.toLowerCase()}` }
                className="block px-4 py-2 hover:bg-gray-200 whitespace-nowrap"
                style={{ color: "black", textDecoration: "none", padding:"10px"}}
              >
                {categoria}
              </Link>
            ))}
          </div>
        )}
      </div>
          </li>
          <li>
            <Link to="/carrito" style={{ color: "black", textDecoration: "none" }}>
              Carrito{" "}
              <span style={{ fontWeight: "bold" }}>
                {productosCarrito.length > 0 ? productosCarrito.length : ""}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/nosotros" style={{ color: "black", textDecoration: "none" }}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" style={{ color: "black", textDecoration: "none" }}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;