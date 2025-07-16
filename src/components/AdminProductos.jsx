import { Helmet } from "react-helmet";
import "../styles/AdminProductos.css";
import { useEffect, useState } from "react";
import "../styles/Productos.css";
import { toast } from "react-toastify";
import {FaEdit} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

<Helmet>
  <title>Administrar Productos | Juegos x Diversion</title>
  <meta name="description" content="Panel de administración para agregar, editar y eliminar productos de la tienda" />
  <meta name="robots" content="noindex, nofollow" />
</Helmet>

function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [editando, setEditando] = useState(null);
  const [confirmarEliminacion, setConfirmarEliminacion] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [nuevoProducto, setNuevoProducto] = useState({
    name: "",
    categoria: "",
    Precio: "",
    imagen: ""
  });

  const URL = "https://6834ef09cd78db2058bfce57.mockapi.io/Productos/productos";

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setProductos(data));
  }, [mensaje]);

  const handleEliminar = (id) => {
  fetch(`${URL}/${id}`, { method: "DELETE" })
    .then(() => {
      toast.success("Producto eliminado correctamente.");
      setConfirmarEliminacion(null);
    })
    .catch(() => toast.error("Error al eliminar el producto."));
  };

  const handleEditar = (producto) => {
    setEditando(producto);
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    fetch(`${URL}/${editando.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editando)
    })
      .then(() => {
        setMensaje("Producto editado correctamente.");
        setEditando(null);
      })
      .catch(() => setMensaje("Error al editar el producto."));
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...nuevoProducto, Precio: parseFloat(nuevoProducto.Precio), cantidad: 1 })
    })
      .then(() => {
        setMensaje("Producto agregado correctamente.");
        setNuevoProducto({ name: "", categoria: "", Precio: "", imagen: "" });
      })
      .catch(() => setMensaje("Error al agregar el producto."));
  };

  

  return (
  <div className="admin-contenedor" style={{ padding: "20px" }}>
    <div className="producto-form" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", borderRadius: "8px" }}>
      <h3>Agregar nuevo producto</h3>
      <form onSubmit={handleAgregar} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <input type="text" placeholder="Nombre" value={nuevoProducto.name} onChange={(e) => setNuevoProducto({ ...nuevoProducto, name: e.target.value })} required />
        <select value={nuevoProducto.categoria} onChange={(e) => setNuevoProducto({ ...nuevoProducto, categoria: e.target.value })} required>
          <option value="">Seleccionar categoría</option>
          <option value="Playstation">Playstation</option>
          <option value="Xbox">Xbox</option>
        </select>
        <input type="number" placeholder="Precio" value={nuevoProducto.Precio} onChange={(e) => setNuevoProducto({ ...nuevoProducto, Precio: e.target.value })} required />
        <input type="text" placeholder="URL de la imagen" value={nuevoProducto.imagen} onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })} required />
        <button type="submit" style={{padding: "0.75rem"}}>Agregar</button>
      </form>
    </div>

    <div className="producto-grid">
      {productos.map((producto) => (
        <div key={producto.id} className="producto-card">
          {editando?.id === producto.id ? (
            <form onSubmit={handleGuardar} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <input value={editando.name} onChange={(e) => setEditando({ ...editando, name: e.target.value })} required />
              <input type="number" value={editando.Precio} onChange={(e) => setEditando({ ...editando, Precio: e.target.value })} required />
              <select value={editando.categoria} onChange={(e) => setEditando({ ...editando, categoria: e.target.value })}>
                <option value="Playstation">Playstation</option>
                <option value="Xbox">Xbox</option>
              </select>
              <input value={editando.imagen} onChange={(e) => setEditando({ ...editando, imagen: e.target.value })} />
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setEditando(null)}>Cancelar</button>
            </form>
          ) : (
            <>
              <img src={producto.imagen} alt={producto.name} className="producto-image" />
              <h3>{producto.name}</h3>
              <p>${producto.Precio} - {producto.categoria}</p>
              <div className="producto-btns">
                <button onClick={() => handleEditar(producto)} aria-label="Editar producto" ><FaEdit size={19}/></button>
                <button onClick={() => setConfirmarEliminacion(producto.id)} aria-label="Borrar producto"><MdDelete size={19}/></button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>

    {confirmarEliminacion && (
      <div className="modal-confirm">
        <div className="modal-content" style={{ marginTop: "20px", padding: "1rem", border: "1px solid red", borderRadius: "8px" }}>
          <p>¿Estás seguro de que querés eliminar este producto?</p>
          <button  id="botonEliminar" onClick={() => handleEliminar(confirmarEliminacion)} aria-label="confirmar eliminacion">Sí, eliminar</button>
          <button id="botonCancelar" onClick={() => setConfirmarEliminacion(null)} aria-label="cancelar eliminacion">Cancelar</button>
        </div>
      </div>
    )}
  </div>
);
}

export default AdminProductos;
