import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

import coffeeProduct from '../assets/coffee.svg'

export function Checkout() {
  return (
    <main className="container m-auto px-16 pt-32 font-body flex items-start justify-between gap-8">
      <section className="flex-1 max-w-[640px] space-y-4">
        <strong className="text-lg">Complete seu pedido</strong>

        <div className="bg-gray-50 rounded-md p-8 space-y-10">
          <header className="flex gap-2">
            <MapPin size={22} className="text-orange-600" />
            <div>
              <strong className="font-normal">Endereço de entrega</strong>
              <p className="text-sm text-gray-700">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>

          <form action="" className="grid grid-cols-8 gap-4">
            <input
              className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-3"
              type="text"
              placeholder="CEP"
            />
            <input
              className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-8"
              type="text"
              placeholder="Rua"
            />
            <input
              className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-3"
              type="text"
              placeholder="Número"
            />
            <input
              className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-5"
              type="text"
              placeholder="Complemento"
            />
            <input
              className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-3"
              type="text"
              placeholder="Bairro"
            />
            <input
              className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-4"
              type="text"
              placeholder="Cidade"
            />
            <input
              className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded "
              type="text"
              placeholder="UF"
            />
          </form>
        </div>

        <div className="bg-gray-50 rounded-md p-8 ">
          <div className="space-y-10">
            <div className="flex gap-2">
              <CurrencyDollar size={22} className="text-purple-600" />
              <div>
                <strong className="font-normal">Pagamento</strong>
                <p className="text-sm text-gray-700">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <button className="text-xs uppercase p-4 rounded bg-gray-200 text-gray-600 flex items-center gap-2">
                <CreditCard size={22} className="text-purple-600" />
                Cartão de crédito
              </button>

              <button className="text-xs uppercase p-4 rounded bg-gray-200 text-gray-600 flex items-center gap-2">
                <Bank size={22} className="text-purple-600" />
                Cartão de crédito
              </button>

              <button className="text-xs uppercase p-4 rounded bg-gray-200 text-gray-600 flex items-center gap-2">
                <Money size={22} className="text-purple-600" />
                Cartão de crédito
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-96 space-y-4">
        <strong>Cafés selecionados</strong>

        <div className="px-8 bg-gray-50 rounded-md rounded-tr-3xl rounded-bl-3xl">
          <div>
            <div className="flex justify-between py-8 border-b-2 border-gray-200">
              <div className="flex gap-4">
                <img src={coffeeProduct} alt="" className="w-14" />

                <div className="flex flex-col justify-between gap-1">
                  <strong className="font-normal">Expresso tradicional</strong>
                  <div className="flex gap-2">
                    <div className="bg-gray-200 py-1 px-2 space-x-2 rounded flex items-center">
                      <button>
                        <Minus />
                      </button>
                      <span>1</span>
                      <button>
                        <Plus />
                      </button>
                    </div>

                    <button className="flex items-center gap-1 bg-gray-200 py-1 px-2 rounded text-sm">
                      <Trash className="text-purple-600" size={16} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              <strong>R$ 9,90</strong>
            </div>
            <div className="flex justify-between py-8 border-b-2 border-gray-200">
              <div className="flex gap-4">
                <img src={coffeeProduct} alt="" className="w-14" />

                <div className="flex flex-col justify-between gap-1">
                  <strong className="font-normal">Latte</strong>
                  <div className="flex gap-2">
                    <div className="bg-gray-200 py-1 px-2 space-x-2 rounded flex items-center">
                      <button>
                        <Minus />
                      </button>
                      <span>1</span>
                      <button>
                        <Plus />
                      </button>
                    </div>

                    <button className="flex items-center gap-1 bg-gray-200 py-1 px-2 rounded text-sm">
                      <Trash className="text-purple-600" size={16} />
                      Remover
                    </button>
                  </div>
                </div>
              </div>

              <strong>R$ 9,90</strong>
            </div>

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

              <button className="bg-orange-400 w-full rounded text-white py-2 ">
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
