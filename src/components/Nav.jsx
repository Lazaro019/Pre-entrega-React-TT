import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';
import { HiOutlineMenu } from "react-icons/hi";


function Nav({ busqueda, setBusqueda }) {
  const { productosCarrito } = useCarrito();
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const categorias = ['Playstation','Xbox'];
  const location = useLocation();
  const rutaActual = location.pathname;
  const mostrarBusqueda =  rutaActual.startsWith("/productos");
  const { usuario } = useAuth();

  return (
    <nav className="navbar">
      <button
        className="nav-toggle"
        onClick={() => setMostrarMenu(!mostrarMenu)}
        aria-label="Abrir menú"
      ><HiOutlineMenu/>
      </button>

      <ul className={`nav-links ${mostrarMenu ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li>
          <div
            onMouseEnter={() => setMostrarMenu(true)}
            onMouseLeave={() => setMostrarMenu(false)}
          >
            <Link to="/productos">Productos</Link>
            {mostrarMenu && (
              <div className="submenu">
                {categorias.map((categoria) => (
                  <Link key={categoria} to={`/productos/${categoria.toLowerCase()}`}>
                    {categoria}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </li>
        <li>
          <Link to="/carrito">
            Carrito <strong>{productosCarrito.length || ""}</strong>
          </Link>
        </li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        {usuario?.nombre === "admin" && (
          <li><Link to="/admin">Administrar productos</Link></li>
        )}
        {mostrarBusqueda && (
          <li>
            <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="barra-busqueda"
            aria-label="Buscar producto"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
