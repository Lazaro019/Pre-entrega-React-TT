import './App.css';
import Home from './layouts/home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductosContainer from './components/ProductosContainer';
import Carrito from './components/Carrito';
import About from './components/About';
import Contacto from './components/Contacto';
import { useState } from 'react';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import AdminProductos from './components/AdminProductos';
import { MdAccountCircle } from "react-icons/md";
import { IoMdExit } from "react-icons/io";



function App() {
  const [busqueda, setBusqueda] = useState("");
  const { usuario, login, logout } = useAuth();

  return (
    <div>
      <div style={{ padding: '10px', display: 'flex', gap: '10px', width:"100%" }}>
        {!usuario ? (
          <>
            <button onClick={() => {
              const nombre = prompt("Ingresá tu nombre de usuario:");
              if (nombre) login(nombre);
            }} aria-label="Iniciar sesion"><MdAccountCircle size={30} /></button>
          </>
        ) : (
          <>
            <span style={{fontSize:"20px"}}>Bienvenido <strong>{usuario.nombre}</strong></span>
            <button onClick={logout} aria-label="Cerrar sesion"><IoMdExit size={20}/></button>
          </>
        )}
      </div>
      <a href="./" target="_blank"><img src="/Images/logo1.png" width="150" alt="150" /></a>
      <Nav busqueda={busqueda} setBusqueda={setBusqueda} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductosContainer busqueda={busqueda} />} />
        <Route path="/productos/:categoria" element={<ProductosContainer busqueda={busqueda} />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/carrito" element={
            <ProtectedRoute>
              <Carrito />
            </ProtectedRoute>
          }
        />
          <Route path="/admin" element={ usuario?.nombre === "admin" ? (<AdminProductos/>) : (
          <p style={{ padding: "20px" }}>Acceso denegado. Solo para administradores.</p>)
          }
          />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
