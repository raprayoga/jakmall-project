import React, { useState } from 'react'
import Delivery from '@/components/templates/Delivery/Delivery'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'

export type Inputs = {
  email: string
  phone: string
  dropshippername?: string
  dropshipperphone?: string
  deliveryaddress: string
}

export default function DeliveryPage() {
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<Inputs>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    localStorage.setItem('form', JSON.stringify(data))
    localStorage.setItem('total-price', JSON.stringify(total))

    router.push('/payment')
  }
  const router = useRouter()
  const [isSendAsDropshipper, setIsSendAsDropshipper] = useState<boolean>(false)
  const [total, setTotal] = useState<number>(500000)

  const handleCheckAsDropshipper = () => {
    setIsSendAsDropshipper((prevState) => {
      const newTotal = prevState ? total - 5900 : total + 5900
      setTotal(newTotal)
      return !prevState
    })
  }

  return (
    <Delivery
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isSendAsDropshipper={isSendAsDropshipper}
      handleCheckAsDropshipper={handleCheckAsDropshipper}
      dirtyFields={dirtyFields}
      total={total}
    />
  )
}
