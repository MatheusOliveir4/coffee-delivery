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
  removeProductInCart: (productId: number) => void
  updateProductAmount: (productId: number, amount: number) => void
}

const CartProductsContext = createContext({} as CartProductsContextProps)

interface CartProductsProviderProps {
  children: ReactNode
}

export function CartProductsProvider({ children }: CartProductsProviderProps) {
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  function addProductToCart(product: Product) {
    setCartProducts((state) => {
      if (product.amount <= 0) {
        return state
      }

      return [...state, product]
    })
  }

  function removeProductInCart(productId: number) {
    setCartProducts((state) =>
      state.filter((product) => product.id !== productId),
    )
  }

  function updateProductAmount(productId: number, amount: number) {
    setCartProducts((state) =>
      state.map((product) => {
        if (product.id === productId) {
          product.amount = amount
        }

        return product
      }),
    )
  }

  return (
    <CartProductsContext.Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductInCart,
        updateProductAmount,
      }}
    >
      {children}
    </CartProductsContext.Provider>
  )
}

export function useCartProducts() {
  return useContext(CartProductsContext)
}
