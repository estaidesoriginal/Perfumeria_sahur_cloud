import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  // Desestructuramos tanto 'user' (para verificar si hay login) como 'isAdmin'
  const { user, isAdmin } = useAuth();
  
  // Condición de Protección:
  // 1. Si no hay usuario (nadie ha iniciado sesión), O
  // 2. Si hay usuario, pero el estado 'isAdmin' es falso.
  if (!user || !isAdmin) {
    // Redirige al login.
    return <Navigate to="/login" replace />;
  }

  // Si pasa la verificación (hay usuario Y es admin), muestra el componente hijo (<Admin />)
  return children;
};

export default ProtectedRoute;