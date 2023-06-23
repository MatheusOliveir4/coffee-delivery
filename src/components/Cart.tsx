import { ProductLayoutInCart } from './ProductLayoutInCart'

export function Cart() {
  return (
    <section className="flex-1 lg:max-w-[460px] space-y-4">
      <strong>Cafés selecionados</strong>

      <div className="px-8 bg-gray-50 rounded-md rounded-tr-3xl rounded-bl-3xl">
        <ProductLayoutInCart />
        <ProductLayoutInCart />

        <div className="py-8 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm">Total de itens</p>
            <span>R$ 29,70</span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm">Entrega</p>
            <span>R$ 3,50</span>
          </div>

          <div className="flex items-center justify-between font-bold text-lg">
            <p>Total</p>
            <span>R$ 33,20</span>
          </div>

          <button className="bg-orange-400 w-full rounded text-white py-2">
            Confirmar pedido
          </button>
        </div>
      </div>
    </section>
  )
}
