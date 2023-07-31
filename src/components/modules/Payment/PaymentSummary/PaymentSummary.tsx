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
  costOfGood: number
  isBusy: boolean
}

export default function DeliverSummary({
  handleSubmit,
  onSubmit,
  total,
  itemAsDropshipper,
  shipmentSelected,
  paymentSelected,
  costOfGood,
  isBusy,
}: PaymentSummaryProps) {
  return (
    <StyledContainer>
      <div>
        <StyledTitle>Summary</StyledTitle>
        <StyledCountItem>10 items purchased</StyledCountItem>
        {shipmentSelected.service && (
          <>
            <StyledEstimateHr />
            <StyledEstimateWraper>
              <p>Delivery estimation</p>
              <p>
                {shipmentSelected.time} by {shipmentSelected.service}
              </p>
            </StyledEstimateWraper>
          </>
        )}
      </div>
      <div>
        <StyledCalculateFee>
          <p>Cost of goods</p>
          <p>{new Intl.NumberFormat('en-US').format(costOfGood)}</p>
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
        <Button
          style={{ width: '100%' }}
          onClick={handleSubmit(onSubmit)}
          isLoading={isBusy}
        >
          Pay {paymentSelected.service ? `with ${paymentSelected.service}` : ''}
        </Button>
      </div>
    </StyledContainer>
  )
}
