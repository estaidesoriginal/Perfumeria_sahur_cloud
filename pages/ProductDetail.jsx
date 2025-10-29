import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data/productos";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="detalle-info">
        <h2>{producto.nombre}</h2>
        <p className="detalle-precio">Precio: ${producto.precio}</p>
        <p className="detalle-descripcion">{producto.descripcion}</p>
        <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
      </div>
    </div>
  );
}
