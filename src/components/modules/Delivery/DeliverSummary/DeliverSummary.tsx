import Button from '@/components/elements/Button'
import React from 'react'
import {
  StyledTitle,
  StyledContainer,
  StyledCountItem,
  StyledTotal,
  StyledCalculateFee,
} from './deliversummary-styling'

export default function DeliverSummary() {
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
        <StyledCalculateFee>
          <p>Dropshipping Fee</p>
          <p>5,900</p>
        </StyledCalculateFee>
        <StyledTotal>
          <p>Total</p>
          <p>505,900</p>
        </StyledTotal>
        <Button style={{ width: '100%' }} onClick={() => null}>
          Continue to Payment
        </Button>
      </div>
    </StyledContainer>
  )
}
