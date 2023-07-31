import React from 'react'
import {
  StyledTitle,
  StyledContainer,
  StyledCountItem,
  StyledTotal,
  StyledCalculateFee,
} from '@/components/layouts/summary-styling'
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
} from '../../Payment/PaymentSummary/paymentsummary-styling'

export interface FinishSummaryProps {
  total: number
  itemAsDropshipper: SetItemAsDropshipper
  shipmentSelected: ShipmentService
  paymentSelected: PaymentService
  costOfGood: number
}

export default function FinishSummary({
  total,
  itemAsDropshipper,
  shipmentSelected,
  paymentSelected,
  costOfGood,
}: FinishSummaryProps) {
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
        {paymentSelected.service && (
          <>
            <StyledEstimateHr />
            <StyledEstimateWraper>
              <p>Paymetn Method</p>
              <p>
                {paymentSelected.service} by {paymentSelected.service}
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
        <StyledCalculateFee>
          <p>
            <span style={{ fontWeight: '700' }}>
              {shipmentSelected.service}
            </span>{' '}
            shipment
          </p>
          <p>{new Intl.NumberFormat('en-US').format(shipmentSelected.price)}</p>
        </StyledCalculateFee>
        <StyledTotal>
          <p>Total</p>
          <p>{new Intl.NumberFormat('en-US').format(total)}</p>
        </StyledTotal>
      </div>
    </StyledContainer>
  )
}
