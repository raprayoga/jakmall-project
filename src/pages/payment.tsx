import React, { useState, useEffect } from 'react'
import Payment from '@/components/templates/Payment/Payment'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import {
  PaymentService,
  SetItemAsDropshipper,
  ShipmentService,
} from '@/interfaces/payment'
import { getItemFromLocalStorage } from '@/utils/store'

export type Inputs = {
  shipment: { service: string; price: number }
  payment: { type: string; balance: number }
}

const shipmentServices: ShipmentService[] = [
  { service: 'GO-SEND', price: 15000, time: 'today' },
  { service: 'JNE', price: 9000, time: '2 days' },
  { service: 'Personal Courier', price: 29000, time: '1 day' },
]

const paymentServices: PaymentService[] = [
  { service: 'e-Wallet', balance: 1500000 },
  { service: 'Bank Transfer', balance: null },
  { service: 'Virtual Account', balance: null },
]

export default function PaymentPage() {
  const costOfGood = 500000
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' })
  const router = useRouter()
  const [costnfee, setCostnfee] = useState<number>(500000)
  const [total, setTotal] = useState<number>(500000)
  const [shipmentSelected, setShipmentSelected] = useState<ShipmentService>({})
  const [paymentSelected, setPaymentSelected] = useState<PaymentService>({})
  const [itemAsDropshipper, setItemAsDropshipper] =
    useState<SetItemAsDropshipper>({})

  const onSubmit: SubmitHandler<Inputs> = () => {
    localStorage.setItem('payment', JSON.stringify(paymentSelected))
    localStorage.setItem('shipment', JSON.stringify(shipmentSelected))
    localStorage.setItem('total-price', JSON.stringify(total))

    router.push('/finish')
  }

  const handleSelectShipment = (e: ShipmentService) => {
    setShipmentSelected(e)
    setTotal(costnfee + e.price)
  }

  const handleSelectPayment = (e: PaymentService) => {
    setPaymentSelected(e)
  }

  useEffect(() => {
    const total = getItemFromLocalStorage('total-price') || 0
    if (!total) router.back()

    setTotal(total)
    setCostnfee(total)

    const itemAsDropshipper = getItemFromLocalStorage('asdropshipper')
    setItemAsDropshipper(itemAsDropshipper)
  }, [])

  return (
    <Payment
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      total={total}
      shipmentSelected={shipmentSelected}
      handleSelectShipment={handleSelectShipment}
      paymentSelected={paymentSelected}
      handleSelectPayment={handleSelectPayment}
      itemAsDropshipper={itemAsDropshipper}
      shipmentServices={shipmentServices}
      paymentServices={paymentServices}
      costOfGood={costOfGood}
    />
  )
}
