import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { Router } from './Router'
import { CartProductsProvider } from './hooks/useCartProducts'

export function App() {
  return (
    <BrowserRouter>
      <CartProductsProvider>
        <Router />
      </CartProductsProvider>
    </BrowserRouter>
  )
}
