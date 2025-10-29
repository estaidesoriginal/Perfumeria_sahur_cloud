import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Asegúrate de que la ruta sea correcta

export default function ProductCard({ producto }) {
  // 1. Obtener la función addToCart de tu contexto
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    // 2. Llamar a la función, pasándole el objeto del producto
    addToCart(producto); 
    console.log(`Producto ${producto.name} añadido al carrito.`);
    // Opcional: Puedes agregar una notificación visual aquí
  };

  return (
    <article 
      className="product-card" 
      key={producto.id} 
      style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', maxWidth: '300px' }}
    >
      <img 
        src={producto.image || 'https://via.placeholder.com/300x200?text=Producto'} 
        alt={producto.name} 
        style={{ width: '100%', height: 'auto' }}
      />
      <h3>{producto.name}</h3>
      <p>Precio: ${Number(producto.price).toFixed(2)}</p>

      {/* 3. El Botón que llama a la función del carrito */}
      <button 
        onClick={handleAddToCart}
        style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', width: '100%' }}
      >
        Añadir al Carrito 🛒
      </button>
    </article>
  );
}