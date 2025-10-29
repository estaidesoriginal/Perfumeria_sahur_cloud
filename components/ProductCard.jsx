import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; // 👈 Importamos el Contexto

export default function ProductCard({ producto }) {
  // 1. Obtenemos la función addToCart del contexto
  const { addToCart } = useContext(CartContext); 
  
  // Nota: El administrador en el panel usa 'name', 'price', 'image'.
  // Aquí ajustamos las propiedades si son diferentes (nombre, precio, imagen).
  const { 
    id, 
    name: nombre, // Renombramos 'name' a 'nombre'
    price: precio, // Renombramos 'price' a 'precio'
    image: imagen, // Renombramos 'image' a 'imagen'
    // Puedes añadir 'descripcion' si la tuvieras en el modelo de Admin
    descripcion = "Descripción no disponible.", 
  } = producto;

  const handleAddToCart = () => {
    // Llamamos a la función del contexto, pasándole el producto completo
    addToCart(producto); 
    console.log(`Producto ${nombre} añadido al carrito.`);
  };

  return (
    <div className="product">
      <img 
        // 2. Lógica para imagen faltante: usa 'imagen' o un placeholder
        src={imagen || 'https://via.placeholder.com/300x200?text=Sin+imagen'} 
        alt={nombre} 
      />
      
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      
      {/* Usamos Number() por si el precio es un string de localStorage */}
      <p className="precio">Precio: ${Number(precio).toFixed(2)}</p>
      
      <div className="botonera">
        {/* Usamos el ID del producto */}
        <Link to={`/product/${id}`}>Ver producto</Link> 
        
        {/* 3. El botón llama a la función del contexto */}
        <button onClick={handleAddToCart}>Comprar</button>
      </div>
    </div>
  );
}