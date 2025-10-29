import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ producto, onAdd }) {
  return (
    <div className="product">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p className="precio">Precio: ${producto.precio}</p>
      <div className="botonera">
        <Link to={`/product/${producto.id}`}>Ver producto</Link>
        <button onClick={onAdd}>Comprar</button>
      </div>
    </div>
  );
}
