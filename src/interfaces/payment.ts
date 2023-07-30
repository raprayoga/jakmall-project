export interface ShipmentService {
  service: string
  price: number
  time: string
}

export interface PaymentService {
  service: string
  balance: number | null
}

export interface SetItemAsDropshipper {
  isSendAsDropshipper: boolean
  price: number
}
