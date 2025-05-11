import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
if (import.meta.env.DEV) {
  console.log(
    '%c⚠️ Advertencia para desarrolladores:\n%cNo pegues nada aquí que no entiendas. Puede ser una estafa.',
    'color: red; font-size: 20px; font-weight: bold;',
    'color: white; font-size: 14px;'
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
