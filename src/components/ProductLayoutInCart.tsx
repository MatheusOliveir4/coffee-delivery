import { Minus, Plus, Trash } from 'phosphor-react'
import { useCartProducts } from '../hooks/useCartProducts'
import { formatNumber } from '../utils/formatNumber'

interface ProductLayoutInCartProps {
  id: number
  title: string
  image: string
  amount: number
  price: number
}

export function ProductLayoutInCart({
  id,
  title,
  image,
  amount,
  price,
}: ProductLayoutInCartProps) {
  const { removeProductInCart, updateProductAmount } = useCartProducts()

  function handleIncreaseProductAmount() {
    updateProductAmount(id, amount + 1)
  }

  function handleDecreaseProductAmount() {
    updateProductAmount(id, amount > 0 ? amount - 1 : amount)
  }

  return (
    <div className="flex justify-between py-8 border-b-2 border-gray-200">
      <div className="flex gap-4">
        <img src={image} alt="" className="w-14" />

        <div className="flex flex-col justify-between gap-1">
          <strong className="font-normal">{title}</strong>
          <div className="flex gap-2">
            <div className="bg-gray-200 py-1 px-2 space-x-2 rounded flex items-center">
              <button onClick={handleDecreaseProductAmount}>
                <Minus />
              </button>

              <span>{amount}</span>

              <button onClick={handleIncreaseProductAmount}>
                <Plus />
              </button>
            </div>

            <button
              onClick={() => removeProductInCart(id)}
              className="flex items-center gap-1 bg-gray-200 py-1 px-2 rounded text-sm"
            >
              <Trash className="text-purple-600" size={16} />
              Remover
            </button>
          </div>
        </div>
      </div>

      <strong>{formatNumber(price)}</strong>
    </div>
  )
}
