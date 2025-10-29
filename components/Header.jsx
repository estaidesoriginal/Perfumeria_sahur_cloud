import React, { useContext } from "react";
import { Link } from "react-router-dom"; // 👈 NECESARIO para la navegación de React Router
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useAuth } from "../context/AuthContext"; // 👈 IMPORTAMOS el hook de autenticación

export default function Header() {
  const { cart } = useContext(CartContext);
  
  // Usamos useAuth para obtener el usuario y el estado de administrador
  const { user, isAdmin, logout } = useAuth(); // <-- Obtenemos user y isAdmin
  
  // Nota: Mantenemos la desestructuración de UserContext por si contiene otra información,
  // pero usaremos el 'user' de useAuth para la lógica de login/logout/admin.
  const { user: userFromUserContext } = useContext(UserContext);

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src="/logo_1.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            {/* MEJOR PRÁCTICA: Cambiamos <a> por <Link> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            
            {/* 🔑 BOTÓN ADMIN: SOLO se muestra si el estado isAdmin es true */}
            {isAdmin && (
              <li>
                <Link to="/admin" style={{ fontWeight: 'bold', color: '#ff69b4' }}>
                  ADMIN 👑
                </Link>
              </li>
            )}
            
          </ul>
        </nav>
        <div className="login-carrito">
          {user 
            ? (
              // Mostramos el nombre si está logueado y un botón para cerrar sesión
              <span>
                Hola, {user.username || 'Usuario'} 
                <button 
                  onClick={logout} 
                  style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer', color: 'grey', padding: '0' }}
                >
                  (Salir)
                </button>
              </span>
            ) 
            : (
              // Redirigimos al login si no está logueado
              <Link to="/login">Iniciar Sesión</Link>
            )
          }
          <div className="carrito">
            <span className="carrito-icon">🛒</span>
            <span className="carrito-count">{cart.length}</span>
          </div>
        </div>
      </div>
    </header>
  );
}