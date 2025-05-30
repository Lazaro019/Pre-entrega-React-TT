import { useState } from 'react'
import './App.css'
import Home from './layouts/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductosContainer from './components/ProductosContainer';
import Carrito from './components/Carrito';
import About from './components/About';
import Contacto from './components/Contacto';

function App() {
  const [productosCarrito, setProductosCarrito] = useState([])

  function funcionCarrito(producto){
    const existe = productosCarrito.find(p => p.id === producto.id);
    console.log(existe)
    if (existe) {
        const carritoActualizado = productosCarrito.map((p) => {
            if (p.id === producto.id){
                const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                return productoActualizado
            }else{
                return p
            }
        })
        setProductosCarrito(carritoActualizado)
    }else{
        const nuevoCarrito = [...productosCarrito, producto];
        setProductosCarrito(nuevoCarrito)
    }

  }

  function borrarProductoCarrito(id){
    console.log(id)
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
  }

  
  return (
      <div>
        <Nav productosCarrito={productosCarrito}/>
        <Routes>
          <Route path="/" element={<Home functionCarrito={funcionCarrito}/>} />
          <Route path="/productos" element={<ProductosContainer functionCarrito={funcionCarrito}/>} />
          <Route path="/productos/:categoria" element={<ProductosContainer functionCarrito={funcionCarrito} />} />
          <Route path="/carrito" element={<Carrito productosCarrito={productosCarrito} funcionBorrar={borrarProductoCarrito}/>}/>      
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </div>
  )
}

export default App;