import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function PaymentForm() {
  const [activePaymentFormat, setActivePaymentFormat] = useState('')
  const { register, handleSubmit } = useForm()

  function handleCreateDeliveryAddress(data: any) {
    console.log(data)
    console.log(activePaymentFormat)
  }

  return (
    <section className="flex-1 lg:max-w-[640px] space-y-4">
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

        <form
          action=""
          id="delivery-address-form"
          onSubmit={handleSubmit(handleCreateDeliveryAddress)}
          className="grid grid-cols-8 gap-4"
        >
          <input
            className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-3"
            type="text"
            placeholder="CEP"
            {...register('cep')}
          />
          <input
            className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-8"
            type="text"
            placeholder="Rua"
            {...register('street')}
          />
          <input
            className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-3"
            type="text"
            placeholder="Número"
            {...register('number')}
          />
          <input
            className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-5"
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <input
            className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-3"
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <input
            className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded col-span-4"
            type="text"
            placeholder="Cidade"
            {...register('city')}
          />
          <input
            className="p-2 bg-gray-100 border border-gray-200 text-sm outline-none placeholder:text-gray-500 rounded "
            type="text"
            placeholder="UF"
            {...register('uf')}
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

          <div className="grid lg:grid-cols-3 gap-4 text-xs uppercase  text-gray-600">
            <button
              onClick={() => setActivePaymentFormat('credit')}
              className={`p-4 rounded flex items-center gap-2 bg-gray-200 ${
                activePaymentFormat === 'credit' && 'bg-purple-200'
              }`}
            >
              <CreditCard size={22} className={` text-purple-600`} />
              Cartão de crédito
            </button>

            <button
              onClick={() => setActivePaymentFormat('debit')}
              className={`p-4 rounded flex items-center gap-2 bg-gray-200 ${
                activePaymentFormat === 'debit' && 'bg-purple-200'
              }`}
            >
              <Bank size={22} className="text-purple-600" />
              Cartão de débito
            </button>

            <button
              onClick={() => setActivePaymentFormat('cash')}
              className={`p-4 rounded flex items-center gap-2 bg-gray-200 ${
                activePaymentFormat === 'cash' && 'bg-purple-200'
              }`}
            >
              <Money size={22} className="text-purple-600" />
              Dinheiro
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
