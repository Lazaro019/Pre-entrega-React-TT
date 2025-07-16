import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [productosCarrito, setProductosCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    const existe = productosCarrito.find(p => p.id === producto.id);
    if (existe) {
      const carritoActualizado = productosCarrito.map(p =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + producto.cantidad }
          : p
      );
      setProductosCarrito(carritoActualizado);
    } else {
      setProductosCarrito([...productosCarrito, producto]);
    }
  }

  function sumarProducto(id){
    {
      setProductosCarrito((prev) =>prev.map((prod) => {
        if (prod.id === id) {
          return { ...prod, cantidad: prod.cantidad + 1 };
        }
        return prod;
      }).filter(Boolean)
    );
    };
  }

  function restarProducto(id){
    {
      setProductosCarrito((prev) =>prev.map((prod) => {
        if (prod.id === id) {
          if (prod.cantidad > 1) {
            return { ...prod, cantidad: prod.cantidad - 1 };
          } else {
            return null;
          }
        }
        return prod;
      }).filter(Boolean)
    );
   };
  }

  function borrarProducto(id) { 
    setProductosCarrito(prev => prev.filter(prod => prod.id !== id));
  }

  function vaciarCarrito() {
    setProductosCarrito([]);
  }

  return (
    <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito, sumarProducto, restarProducto, borrarProducto, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}