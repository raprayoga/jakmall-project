import React from 'react'
import {
  StyledTitle,
  StyledContainer,
  StyledCountItem,
  StyledTotal,
  StyledCalculateFee,
} from '@/components/layouts/summary-styling'
import Button from '@/components/elements/Button'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { Inputs } from '@/pages/payment'
import {
  PaymentService,
  SetItemAsDropshipper,
  ShipmentService,
} from '@/interfaces/payment'
import {
  StyledEstimateHr,
  StyledEstimateWraper,
} from './paymentsummary-styling'

export interface PaymentSummaryProps {
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>
  onSubmit: SubmitHandler<Inputs>
  total: number
  itemAsDropshipper: SetItemAsDropshipper
  shipmentSelected: ShipmentService
  paymentSelected: PaymentService
}

export default function DeliverSummary({
  handleSubmit,
  onSubmit,
  total,
  itemAsDropshipper,
  shipmentSelected,
  paymentSelected,
}: PaymentSummaryProps) {
  return (
    <StyledContainer>
      <div>
        <StyledTitle>Summary</StyledTitle>
        <StyledCountItem>10 items purchased</StyledCountItem>
        <StyledEstimateHr />
        {shipmentSelected.service && (
          <StyledEstimateWraper>
            <p>Delivery estimation</p>
            <p>
              {shipmentSelected.time} by {shipmentSelected.service}
            </p>
          </StyledEstimateWraper>
        )}
      </div>
      <div>
        <StyledCalculateFee>
          <p>Cost of goods</p>
          <p>500,000</p>
        </StyledCalculateFee>
        {itemAsDropshipper?.isSendAsDropshipper && (
          <StyledCalculateFee>
            <p>Dropshipping Fee</p>
            <p>
              {new Intl.NumberFormat('en-US').format(itemAsDropshipper.price)}
            </p>
          </StyledCalculateFee>
        )}
        {shipmentSelected.service && (
          <StyledCalculateFee>
            <p>
              <span style={{ fontWeight: '700' }}>
                {shipmentSelected.service}
              </span>{' '}
              shipment
            </p>
            <p>
              {new Intl.NumberFormat('en-US').format(shipmentSelected.price)}
            </p>
          </StyledCalculateFee>
        )}
        <StyledTotal>
          <p>Total</p>
          <p>{new Intl.NumberFormat('en-US').format(total)}</p>
        </StyledTotal>
        <Button style={{ width: '100%' }} onClick={handleSubmit(onSubmit)}>
          Pay {paymentSelected.service ? `with ${paymentSelected.service}` : ''}
        </Button>
      </div>
    </StyledContainer>
  )
}
