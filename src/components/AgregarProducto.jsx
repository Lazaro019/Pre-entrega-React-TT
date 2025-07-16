import { useState } from "react";

function AgregarProducto() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nuevoProducto = {
      name: nombre,
      categoria: categoria,
      Precio: parseFloat(precio),
      cantidad: 1,
      imagen: imagen
    };

    fetch('https://6834ef09cd78db2058bfce57.mockapi.io/Productos/productos', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Producto agregado correctamente.");
        setNombre("");
        setCategoria("");
        setPrecio("");
        setImagen("");
      })
      .catch(() => {
        alert("Error al agregar el producto.");
      });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Agregar nuevo producto</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <option value="">Seleccionar categoría</option>
          <option value="Playstation">Playstation</option>
          <option value="Xbox">Xbox</option>
        </select>
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          min={1}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL de la imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />
        <button type="submit" style={{ marginTop: "10px" }}>Agregar</button>
      </form>
    </div>
  );
}

export default AgregarProducto;
