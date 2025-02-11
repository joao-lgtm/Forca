import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Global } from './style/global'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>
)
