import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import successImg from '../assets/success-img.svg'

export function Success() {
  return (
    <main className="container m-auto px-16 pt-32 font-body flex items-end justify-between gap-16">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-orange-600">
          Uhu! Pedido confirmado
        </h1>
        <p className="mt-2 text-gray-800">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="mt-8 p-8 border-2 rounded-md rounded-tr-3xl rounded-bl-3xl space-y-6 ">
          <div className="flex items-center gap-4">
            <MapPin
              size={18}
              weight="fill"
              className="p-2 rounded-full bg-purple-600 box-content text-white"
            />
            <div className="text-gray-700">
              <p>
                Entrega em{' '}
                <span className="font-bold">
                  Rua João Daniel Martinelli, 102
                </span>
              </p>
              <p className="text-base">Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock
              size={18}
              weight="fill"
              className="p-2 rounded-full bg-yellow-500 box-content text-white"
            />
            <div className="text-gray-700">
              <p>Previsão de entrega</p>
              <p className="text-base font-bold">20 min - 30 min</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CurrencyDollar
              size={18}
              weight="fill"
              className="p-2 rounded-full bg-yellow-600 box-content text-white"
            />
            <div className="text-gray-700">
              <p>Pagamento na entrega</p>
              <p className="text-base font-bold">Cartão de crédito</p>
            </div>
          </div>
        </div>
      </div>

      <img src={successImg} alt="" />
    </main>
  )
}
