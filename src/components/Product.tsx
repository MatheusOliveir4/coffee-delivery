import { useState } from 'react'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface ProductProps {
  id: number
  title: string
  description: string
  image: string
  price: number
}

export function Product({ title, description, image, price }: ProductProps) {
  const [productAmount, setProductAmount] = useState(0)

  function handleIncreaseProductAmount() {
    setProductAmount((state) => state + 1)
  }

  function handleDecreaseProductAmount() {
    setProductAmount((state) => {
      if (state > 0) {
        return state - 1
      }

      return state
    })
  }

  return (
    <div className="flex flex-col bg-gray-100 items-center px-6 pb-6 rounded-md rounded-tr-3xl rounded-bl-2xl w-64 ">
      <img className="w-30 -mt-6" src={image} alt="Imagem de um café" />
      <span className="mt-2 bg-orange-200 text-orange-600 py-0.5 px-3 text-xs font-bold rounded-full">
        Tradicional
      </span>
      <strong className="my-2 text-lg">{title}</strong>
      <p className="text-gray-500 text-sm text-center">{description}</p>

      <footer className="mt-8 w-full flex justify-between items-center">
        <strong className=" text-xl">
          <span className="text-sm inline-block mr-1">R$</span>
          {price}
        </strong>

        <div className="bg-gray-200 p-2 space-x-2 rounded flex items-center">
          <button
            onClick={handleDecreaseProductAmount}
            className="text-purple-700"
          >
            <Minus />
          </button>

          <span>{productAmount}</span>

          <button
            onClick={handleIncreaseProductAmount}
            className="text-purple-700"
          >
            <Plus />
          </button>
        </div>

        <button className="bg-purple-800 text-white p-2 rounded">
          <ShoppingCart size={24} weight="fill" />
        </button>
      </footer>
    </div>
  )
}
