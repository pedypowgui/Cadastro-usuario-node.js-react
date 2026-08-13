import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importando estilizacao
import './index.css' 

// Componentes React
import Home from './pages/home' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
