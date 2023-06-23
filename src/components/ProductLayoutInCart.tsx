import { Minus, Plus, Trash } from 'phosphor-react'

export function ProductLayoutInCart() {
  return (
    <div className="flex justify-between py-8 border-b-2 border-gray-200">
      <div className="flex gap-4">
        {/* <img src={coffeeProduct} alt="" className="w-14" /> */}

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
  )
}
