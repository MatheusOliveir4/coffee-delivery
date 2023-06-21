import { NavLink } from 'react-router-dom'

import { ShoppingCart, MapPin } from 'phosphor-react'
import logoCoffee from '../assets/logo-coffee.svg'

export function Header() {
  return (
    <header className="container m-auto flex justify-between items-center p-8">
      <NavLink to="/">
        <img src={logoCoffee} alt="Logo de um café escrito Coffee Delivery" />
      </NavLink>

      <div className="flex items-center space-x-4 ">
        <div className="flex items-center space-x-2 bg-purple-100 p-2 rounded text-purple-700 font-medium">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink
          to="/checkout"
          className="bg-orange-100 p-2 rounded text-orange-600 hover:opacity-80"
        >
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </div>
    </header>
  )
}
