import { Cart } from '../components/Cart'
import { PaymentForm } from '../components/PaymentForm'

export function Checkout() {
  return (
    <main
      className="
        container 
        m-auto
        px-16
        pt-32
        font-body
        flex
        flex-col-reverse
        items-start 
        justify-between 
        gap-8
        lg:flex-row
      "
    >
      <PaymentForm />
      <Cart />
    </main>
  )
}
