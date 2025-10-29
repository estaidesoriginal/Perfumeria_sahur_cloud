import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// -----------------------------------------------------------------
// 🖥️ COMPONENTE PRINCIPAL: Admin Panel (Historial y Reportes)
// -----------------------------------------------------------------
export default function Admin() {
  // 💡 Datos de Muestra: En una aplicación real, esta data vendría de una API/Base de Datos.
  const purchaseHistory = [
    { id: 101, user: 'admin', total: 55.00, date: '2025-10-25', items: 2, status: 'Completado' },
    { id: 102, user: 'user123', total: 100.00, date: '2025-10-26', items: 3, status: 'Pendiente' },
    { id: 103, user: 'admin', total: 120.00, date: '2025-10-27', items: 4, status: 'Completado' },
    { id: 104, user: 'user_new', total: 45.00, date: '2025-10-28', items: 1, status: 'Enviado' },
    { id: 105, user: 'user123', total: 245.00, date: '2025-10-29', items: 5, status: 'Pendiente' },
  ];
  
  // Aquí puedes agregar lógica para calcular reportes (ej. total de ventas)
  const totalRevenue = purchaseHistory.reduce((acc, order) => acc + order.total, 0).toFixed(2);
  const totalOrders = purchaseHistory.length;

  return (
    <main className="admin-panel" style={{ padding: 20 }}>
      <h1>Panel Admin: Historial y Reportes 📈</h1>

      {/* Sección de Reportes Rápidos */}
      <section style={{ display: 'flex', gap: '20px', marginBottom: '30px', maxWidth: 720 }}>
          <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px', flexGrow: 1 }}>
              <h3 style={{ margin: '0 0 5px 0' }}>Ventas Totales</h3>
              <p style={{ margin: 0, fontSize: '1.5em', fontWeight: 'bold' }}>${totalRevenue}</p>
          </div>
          <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '5px', flexGrow: 1 }}>
              <h3 style={{ margin: '0 0 5px 0' }}>Órdenes Totales</h3>
              <p style={{ margin: 0, fontSize: '1.5em', fontWeight: 'bold' }}>{totalOrders}</p>
          </div>
      </section>

      {/* Sección de Historial de Compras */}
      <section className="admin-list">
        <h2>Historial de Órdenes ({totalOrders})</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 10 }}>
            <thead>
              <tr style={{ backgroundColor: '#f4f4f4' }}>
                <th style={tableHeaderStyle}>ID</th>
                <th style={tableHeaderStyle}>Usuario</th>
                <th style={tableHeaderStyle}>Fecha</th>
                <th style={tableHeaderStyle}>Items</th>
                <th style={tableHeaderStyle}>Total</th>
                <th style={tableHeaderStyle}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map(order => (
                <tr key={order.id} style={tableRowStyle}>
                  <td style={tableCellStyle}>#{order.id}</td>
                  <td style={tableCellStyle}>{order.user}</td>
                  <td style={tableCellStyle}>{order.date}</td>
                  <td style={tableCellStyle}>{order.items}</td>
                  <td style={tableCellStyle}>${order.total.toFixed(2)}</td>
                  <td style={{ ...tableCellStyle, fontWeight: 'bold', color: getStatusColor(order.status) }}>
                      {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

// -----------------------------------------------------------------
// 🔒 COMPONENTE EXPORTADO: ProtectedRoute (Sin Cambios)
// -----------------------------------------------------------------
export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  // El acceso es denegado si no hay usuario o si el rol no es 'admin'.
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  // Si es admin, se permite el acceso al contenido (<Admin />).
  return children;
};

// Estilos auxiliares para la tabla
const tableHeaderStyle = { 
    padding: '12px', 
    border: '1px solid #ddd', 
    textAlign: 'left',
};
const tableCellStyle = { 
    padding: '12px', 
    border: '1px solid #ddd',
};
const tableRowStyle = {
    backgroundColor: '#fff',
    ':hover': { backgroundColor: '#f9f9f9' }
};

// Función para asignar color al estado (solo para el ejemplo)
function getStatusColor(status) {
    switch (status) {
        case 'Completado': return 'green';
        case 'Pendiente': return 'orange';
        case 'Enviado': return 'blue';
        default: return 'black';
    }
}