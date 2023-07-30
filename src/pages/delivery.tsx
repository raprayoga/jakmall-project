import React, { useState, useEffect } from 'react'
import Delivery from '@/components/templates/Delivery/Delivery'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { SetItemAsDropshipper } from '@/interfaces/payment'
import { getItemFromLocalStorage } from '@/utils/store'

export type Inputs = {
  email: string
  phone: string
  dropshippername?: string
  dropshipperphone?: string
  deliveryaddress: string
}

export default function DeliveryPage() {
  const costOfGood = 500000
  const dropshipperFee = 5900
  const { control, handleSubmit, setValue } = useForm<Inputs>({
    mode: 'onChange',
  })
  const router = useRouter()
  const [isSendAsDropshipper, setIsSendAsDropshipper] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(500000)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem('form', JSON.stringify(data))
    localStorage.setItem('total-price', JSON.stringify(total))
    const itemAsDropshipper: SetItemAsDropshipper = {
      isSendAsDropshipper: isSendAsDropshipper,
      price: dropshipperFee || 0,
    }
    localStorage.setItem('asdropshipper', JSON.stringify(itemAsDropshipper))

    router.push('/payment')
  }

  const handleCheckAsDropshipper = () => {
    setIsSendAsDropshipper((prevState) => {
      const newTotal = !prevState ? costOfGood + dropshipperFee : costOfGood
      setTotal(newTotal)
      return !prevState
    })
  }

  useEffect(() => {
    const oldForm: Inputs = getItemFromLocalStorage('form')
    if (oldForm) {
      Object.entries(oldForm).forEach(([key, value]: any) => {
        setValue(key, value)
      })
    }
  }, [])

  return (
    <Delivery
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isSendAsDropshipper={isSendAsDropshipper}
      handleCheckAsDropshipper={handleCheckAsDropshipper}
      total={total}
      dropshipperFee={dropshipperFee}
    />
  )
}
