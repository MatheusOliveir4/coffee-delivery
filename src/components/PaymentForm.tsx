import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'

export function PaymentForm() {
  return (
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
  )
}
