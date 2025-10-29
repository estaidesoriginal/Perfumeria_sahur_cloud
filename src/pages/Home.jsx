import React from "react";
import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const destacados = productos.slice(0, 4); // Primeros 4 productos como destacados

  return (
    <main>
      <section className="hero">
        <h1>Perfumes Sahur</h1>
        <p>Las mejores fragancias a un clic de distancia</p>
        <Link to="/shop" className="btn-hero">Ver Productos</Link>
      </section>

      <section className="destacados">
        <h2>Destacados</h2>
        <div className="grid-container">
          {destacados.map(p => <ProductCard key={p.id} producto={p} />)}
        </div>
      </section>
    </main>
  );
}
