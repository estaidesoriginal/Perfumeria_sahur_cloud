
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. IMPORTS DE PROVIDERS (Contextos)
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";

// 2. IMPORTS DE COMPONENTES Y PÁGINAS (¡Faltaban aquí!)
import Header from "./components/Header";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

// 3. Importación de CSS (si es necesaria)
import "./index.css";


export default function App() {
  return (
    // Estructura de Providers correcta para que Header pueda usar CartContext
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          <Router>
            <Header /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}