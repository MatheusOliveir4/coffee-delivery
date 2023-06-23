import { createContext, ReactNode, useState, useContext } from 'react'

interface Product {
  id: number
  title: string
  description: string
  image: string
  price: number
  amount: number
}

interface CartProductsContextProps {
  cartProducts: Product[]
  addProductToCart: (product: Product) => void
}

const CartProductsContext = createContext({} as CartProductsContextProps)

interface CartProductsProviderProps {
  children: ReactNode
}

export function CartProductsProvider({ children }: CartProductsProviderProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  function addProductToCart(product: Product) {
    setCartProducts((state) => [...state, product])
  }

  return (
    <CartProductsContext.Provider value={{ cartProducts, addProductToCart }}>
      {children}
    </CartProductsContext.Provider>
  )
}

export function useCartProducts() {
  return useContext(CartProductsContext)
}
