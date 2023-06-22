import coffee from '../assets/coffee.svg'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Product() {
  return (
    <div className="flex flex-col bg-gray-100 items-center px-6 pb-6 rounded-md rounded-tr-3xl rounded-bl-2xl w-64 ">
      <img className="w-30 -mt-6" src={coffee} alt="Imagem de um café" />

      <span className="mt-2 bg-orange-200 text-orange-600 py-0.5 px-3 text-xs font-bold rounded-full">
        Tradicional
      </span>

      <strong className="my-2 text-lg">Expresso Tradicional</strong>

      <p className="text-gray-500 text-sm text-center">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <footer className="mt-8 w-full flex justify-between items-center">
        <strong className=" text-xl">
          <span className="text-sm inline-block mr-1">R$</span>
          9,90
        </strong>

        <div className="bg-gray-200 p-2 space-x-2 rounded flex items-center">
          <button className="text-purple-700">
            <Minus />
          </button>
          <span>1</span>
          <button className="text-purple-700">
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
