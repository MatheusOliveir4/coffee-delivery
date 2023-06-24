import { NavLink } from 'react-router-dom'

import { ShoppingCart, MapPin } from 'phosphor-react'
import logoCoffee from '../assets/logo-coffee.svg'
import { useCartProducts } from '../hooks/useCartProducts'

export function Header() {
  const { cartProducts } = useCartProducts()

  const productsQuantityInCart = cartProducts.length

  return (
    <header className=" bg-white w-full py-8 fixed">
      <div className="container px-16 flex justify-between items-center m-auto">
        <NavLink to="/">
          <img src={logoCoffee} alt="Logo de um café escrito Coffee Delivery" />
        </NavLink>

        <div className="flex items-center space-x-4 ">
          <div className="hidden sm:flex items-center space-x-2 bg-purple-100 p-2 rounded text-purple-700 font-medium">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </div>

          <NavLink
            to="/checkout"
            className="bg-orange-100 p-2 rounded text-orange-600 hover:opacity-80 relative"
          >
            <ShoppingCart size={22} weight="fill" />

            {productsQuantityInCart !== 0 && (
              <div className="w-5 h-5 rounded-full bg-orange-500 absolute -top-2 -right-2 flex items-center justify-center text-sm text-white">
                {productsQuantityInCart}
              </div>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  )
}
