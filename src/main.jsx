import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { ContextProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from 'react-use-cart';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ContextProvider >
  </BrowserRouter>
)
