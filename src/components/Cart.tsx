import { useCartProducts } from '../hooks/useCartProducts'
import { formatNumber } from '../utils/formatNumber'
import { ProductLayoutInCart } from './ProductLayoutInCart'

const DELIVERY_TAX = 3.5

export function Cart() {
  const { cartProducts } = useCartProducts()

  const sumOfProductsPrice = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.amount
  }, 0)

  const totalCartValue = sumOfProductsPrice + DELIVERY_TAX

  return (
    <section className="w-full lg:max-w-[460px] space-y-4">
      <strong>Cafés selecionados</strong>

      <div className="px-8 bg-gray-50 rounded-md rounded-tr-3xl rounded-bl-3xl">
        {cartProducts.map((product) => (
          <ProductLayoutInCart
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            amount={product.amount}
            image={product.image}
          />
        ))}

        <div className="py-8 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm">Total de itens</p>
            <span>{formatNumber(sumOfProductsPrice)}</span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm">Entrega</p>
            <span>{formatNumber(DELIVERY_TAX)}</span>
          </div>

          <div className="flex items-center justify-between font-bold text-lg">
            <p>Total</p>
            <span>{formatNumber(totalCartValue)}</span>
          </div>

          <button
            form="delivery-address-form"
            className="bg-orange-400 w-full rounded text-white py-2"
          >
            Confirmar pedido
          </button>
        </div>
      </div>
    </section>
  )
}
