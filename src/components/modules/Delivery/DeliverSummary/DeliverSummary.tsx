import React from 'react'
import {
  StyledTitle,
  StyledContainer,
  StyledCountItem,
  StyledTotal,
  StyledCalculateFee,
} from './deliversummary-styling'
import Button from '@/components/elements/Button'
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import { Inputs } from '@/pages/delivery'

export interface DeliverSummaryProps {
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>
  onSubmit: SubmitHandler<Inputs>
  isSendAsDropshipper: boolean
  total: number
}

export default function DeliverSummary({
  handleSubmit,
  onSubmit,
  isSendAsDropshipper,
  total,
}: DeliverSummaryProps) {
  return (
    <StyledContainer>
      <div>
        <StyledTitle>Summary</StyledTitle>
        <StyledCountItem>10 items purchased</StyledCountItem>
      </div>
      <div>
        <StyledCalculateFee>
          <p>Cost of goods</p>
          <p>500,000</p>
        </StyledCalculateFee>
        {isSendAsDropshipper && (
          <StyledCalculateFee>
            <p>Dropshipping Fee</p>
            <p>5,900</p>
          </StyledCalculateFee>
        )}
        <StyledTotal>
          <p>Total</p>
          <p>{new Intl.NumberFormat('en-US').format(total)}</p>
        </StyledTotal>
        <Button style={{ width: '100%' }} onClick={handleSubmit(onSubmit)}>
          Continue to Payment
        </Button>
      </div>
    </StyledContainer>
  )
}
