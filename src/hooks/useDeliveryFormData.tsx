import { createContext, useContext, ReactNode, useState } from 'react'

interface DeliveryFormData {
  cep: string
  city: string
  complement: string
  neighborhood: string
  number: string
  street: string
  uf: string
  paymentFormat: string
}

interface DeliveryFormDataContextProps {
  deliveryFormData: DeliveryFormData
  addDeliveryFormData: (data: DeliveryFormData) => void
}

const DeliveryFormDataContext = createContext(
  {} as DeliveryFormDataContextProps,
)

interface DeliveryFormDataProviderProps {
  children: ReactNode
}

export function DeliveryFormDataProvider({
  children,
}: DeliveryFormDataProviderProps) {
  const [deliveryFormData, setDeliveryFormData] = useState(
    {} as DeliveryFormData,
  )

  function addDeliveryFormData(data: DeliveryFormData) {
    setDeliveryFormData(data)
  }

  return (
    <DeliveryFormDataContext.Provider
      value={{ deliveryFormData, addDeliveryFormData }}
    >
      {children}
    </DeliveryFormDataContext.Provider>
  )
}

export function useDeliveryFormData() {
  return useContext(DeliveryFormDataContext)
}
