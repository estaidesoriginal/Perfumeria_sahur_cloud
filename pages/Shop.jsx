import React, { useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid";

export default function Shop() {
  const STORAGE_KEY = 'miapp_products_v1';
  
  // 💡 Datos de Muestra (fallback)
  const sample = [
    { id: 1, name: 'Perfume A', price: 25.0, image: '', visible: true },
    { id: 2, name: 'Perfume B', price: 30.0, image: '', visible: true },
  ];
  
  // Estado para guardar la lista de productos visibles
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    // 1. Obtener la lista de productos de localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    
    // Si no hay datos, usamos el sample data como fallback
    const loadedProducts = stored ? JSON.parse(stored) : sample; 
    
    // 2. Filtrar de forma SEGURA: verificamos que 'p' exista (no sea null/undefined)
    // antes de acceder a la propiedad 'p.visible'.
    const visibleProducts = loadedProducts.filter(p => p && p.visible); // 👈 CAMBIO CLAVE AQUÍ
    
    setShopProducts(visibleProducts);

  }, []); 

  return (
    <main>
      <h1>Todos los Productos ({shopProducts.length})</h1>
      
      {/* Añadimos un mensaje si no hay productos */}
      {shopProducts.length === 0 ? (
        <p>No hay productos visibles en este momento. Intenta añadirlos desde el Panel Admin o limpia tu Local Storage.</p>
      ) : (
        /* Pasamos la lista dinámica y filtrada al componente de la cuadrícula */
        <ProductGrid productos={shopProducts} />
      )}
    </main>
  );
}