import React, { createContext, useState, useContext } from 'react';

// Se inicializa con null y con la estructura de las propiedades que contendrá.
const AuthContext = createContext({
  user: null, 
  isAdmin: false, 
  login: () => {}, 
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); 

  const userIsNormal = (username, password) => {

    if (username === "user" && password === "user123") {
      return true;
    }
    // Aquí es donde conectarías con tu API/DB para verificar otros usuarios
    return false;
  };

  const login = (username, password) => {
    // 1. Admin predefinido
    if (username === "admin" && password === "admin123") {
      setUser({ username, role: 'admin' });
      setIsAdmin(true); // <-- Es admin
      return true;
    }
    
    // 2. Usuario Normal (Ahora usa la función definida arriba)
    if (userIsNormal(username, password)) {
      setUser({ username, role: 'user' });
      setIsAdmin(false); // <-- No es admin
      return true;
    }

    // 3. Login fallido
    setUser(null);
    setIsAdmin(false); 
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false); 
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);