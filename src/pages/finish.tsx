import React, { useState, useEffect } from 'react'
import Finish from '@/components/templates/Finish/Finish'
import {
  PaymentService,
  SetItemAsDropshipper,
  ShipmentService,
} from '@/interfaces/payment'
import { getItemFromLocalStorage } from '@/utils/store'
import { useRouter } from 'next/router'
import { generateOrderId } from '@/utils/generate'

export default function FinishPage() {
  const router = useRouter()
  const costOfGood = 500000
  const [total, setTotal] = useState<number>(0)
  const [orderId, setOrderId] = useState<string>('')
  const [shipmentSelected, setShipmentSelected] = useState<ShipmentService>({})
  const [paymentSelected, setPaymentSelected] = useState<PaymentService>({})
  const [itemAsDropshipper, setItemAsDropshipper] =
    useState<SetItemAsDropshipper>({})

  const handleToHome = () => {
    localStorage.clear()
    router.push('/')
  }

  useEffect(() => {
    const total = getItemFromLocalStorage('total-price') || 0
    const payment = getItemFromLocalStorage('payment')
    const shipment = getItemFromLocalStorage('shipment')
    const itemAsDropshipper = getItemFromLocalStorage('asdropshipper')

    if (!total || !payment || !shipment) router.back()

    setTotal(total)
    setPaymentSelected(payment)
    setShipmentSelected(shipment)
    setItemAsDropshipper(itemAsDropshipper)

    setOrderId(generateOrderId(5))
  }, [])

  return (
    <Finish
      total={total}
      shipmentSelected={shipmentSelected}
      paymentSelected={paymentSelected}
      itemAsDropshipper={itemAsDropshipper}
      costOfGood={costOfGood}
      orderId={orderId}
      handleToHome={handleToHome}
    />
  )
}
