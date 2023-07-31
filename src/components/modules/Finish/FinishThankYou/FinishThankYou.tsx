import React from 'react'
import {
  StyledButtonToHome,
  StyledContainer,
  StyledDescript,
} from './finishthankyou-styling'
import { StyledTitleContainer } from '@/components/templates/main-styling'
import Title from '@/components/elements/Title'
import { ShipmentService } from '@/interfaces/payment'

export interface FinishThankYouProps {
  orderId: string
  shipmentSelected: ShipmentService
  handleToHome: () => void
}

export default function FinishThankYou({
  orderId,
  shipmentSelected,
  handleToHome,
}: FinishThankYouProps) {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <Title>Shipment</Title>
      </StyledTitleContainer>

      <StyledDescript>
        <p>
          Order ID : <span>{orderId}</span>
        </p>
        <p>
          Your order will be delivered {shipmentSelected.time} with{' '}
          {shipmentSelected.service}
        </p>
      </StyledDescript>
      <StyledButtonToHome onClick={handleToHome}>
        Go to homepage
      </StyledButtonToHome>
    </StyledContainer>
  )
}
