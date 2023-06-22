import CoffeeDeliveryPng from '../assets/coffee-delivery.png'
import { ShoppingCart, Clock, Package, Coffee } from 'phosphor-react'
import { Product } from '../components/Product'

export function Home() {
  return (
    <main className="container m-auto px-16 font-body">
      <header className="flex items-center justify-between py-32">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-normal">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-4">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="flex items-center gap-2 text-gray-700">
              <ShoppingCart
                size={16}
                weight="fill"
                className="text-white bg-orange-500 rounded-full p-2 box-content"
              />
              Compra simples e segura
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Package
                size={16}
                weight="fill"
                className="text-white bg-gray-800 rounded-full p-2 box-content"
              />
              Embalagem mantém o café intacto
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Clock
                size={16}
                weight="fill"
                className="text-white bg-yellow-500 rounded-full p-2 box-content"
              />
              Entrega rápida e rastreada
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Coffee
                size={16}
                weight="fill"
                className="text-white bg-purple-800 rounded-full p-2 box-content"
              />
              O café chega fresquinho até você
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <img
            width={476}
            height={360}
            src={CoffeeDeliveryPng}
            alt="Imagem de um café escrito Coffee Delivery"
          />
        </div>
      </header>

      <section>
        <h1 className="text-2xl font-bold">Nossos cafés</h1>

        <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-auto my-16">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  )
}
