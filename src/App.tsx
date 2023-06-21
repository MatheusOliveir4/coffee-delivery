import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
