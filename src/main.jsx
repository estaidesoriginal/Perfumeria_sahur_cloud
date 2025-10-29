import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Se eliminó la extensión .jsx para una mejor resolución de módulos.

// El punto de entrada de la aplicación React.
// Se asume que el CSS de Tailwind está cargado en index.html
// o configurado via Vite.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);